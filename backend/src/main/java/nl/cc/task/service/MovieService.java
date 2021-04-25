package nl.cc.task.service;


import nl.cc.task.client.TmdbClient;
import nl.cc.task.client.TmdbGenre;
import nl.cc.task.client.TmdbMovie;
import nl.cc.task.client.TmdbResponse;
import nl.cc.task.entity.GenreEntity;
import nl.cc.task.entity.MovieEntity;
import nl.cc.task.model.MovieDTO;
import nl.cc.task.model.MovieResponse;
import nl.cc.task.repository.GenreRepository;
import nl.cc.task.repository.MovieRepository;
import nl.cc.task.util.TmdbCategoryEnum;
import nl.cc.task.util.TmdbGenreEnum;
import org.hibernate.Transaction;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

@Service
public class MovieService {

    private final TmdbClient tmdbClient;
    private final MovieRepository movieRepository;
    private final GenreRepository genreRepository;
    private final ModelMapper modelMapper;

    public MovieService(TmdbClient tmdbClient, MovieRepository movieRepository, ModelMapper modelMapper, GenreRepository genreRepository) {
        this.tmdbClient = tmdbClient;
        this.movieRepository = movieRepository;
        this.modelMapper = modelMapper;
        this.genreRepository = genreRepository;
    }

    public TmdbResponse getByCategory(TmdbCategoryEnum filter) {
        return tmdbClient.getByCategory(filter);
    }

    public MovieResponse getByGenre(TmdbGenreEnum tmdbGenreEnum, Pageable pageable, String filterTitle) {
        return genreRepository.findByName(tmdbGenreEnum.name())
                .map(g -> movieRepository.findByTitleContains(pageable, filterTitle))
                .map(this::convertEntityToDto)
                .orElse(new MovieResponse(List.of(), 0, 0));
    }

    public List<TmdbGenre> getGenreList() {

        return tmdbClient.getGenreList().getTmdbGenreList();
    }

    public void save(MovieDTO movieDTO) {
        movieRepository.save(convertToDto(movieDTO));
    }

    @Transactional
    public MovieEntity save(MovieEntity movieEntity) {
        return movieRepository.save(movieEntity);
    }

    private MovieEntity convertToDto(MovieDTO movieDTO) {
        return modelMapper.map(movieDTO, MovieEntity.class);
    }

    private MovieResponse convertEntityToDto(Page<MovieEntity> pageMovieEntity) {
        List<MovieDTO> movieDTOList = pageMovieEntity
                .stream()
                .map(movie -> modelMapper.map(movie, MovieDTO.class))
                .collect(Collectors.toList());
        return new MovieResponse(movieDTOList, pageMovieEntity.getPageable().getPageNumber(), pageMovieEntity.getTotalPages());
    }

    public MovieEntity convertToEntity(TmdbMovie movieDTO) {
        Set<GenreEntity> genreList = new HashSet<>();
        if (movieDTO.genreIds != null) {
            movieDTO.genreIds.stream().forEach(g -> {
                genreRepository.findById(g).map(genreList::add);
            });
        }
        MovieEntity movieEntity =  modelMapper.map(movieDTO, MovieEntity.class);
        movieEntity.setGenreList(genreList);
        return movieEntity;
    }

    public void getAndSavaAllMovies() {
        TmdbResponse allMoviesByPage = tmdbClient.getAllMoviesByPage(1L);
        allMoviesByPage.tmdbMovieList.stream()
                .map(this::convertToEntity)
                .map(this::save);

        LongStream.range(2, allMoviesByPage.totalPages).forEach(index -> {
            tmdbClient.getAllMoviesByPage(index).tmdbMovieList
                    .stream()
                    .map(this::convertToEntity)
                    .map(this::save)
                    .collect(Collectors.toList());
        });
    }

    public void deleteMovie(Long movieId) {
        movieRepository.deleteById(movieId);
    }
}
