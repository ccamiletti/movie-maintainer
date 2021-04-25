package nl.cc.task.controller;

import nl.cc.task.client.TmdbResponse;
import nl.cc.task.model.MovieDTO;
import nl.cc.task.model.MovieResponse;
import nl.cc.task.service.MovieService;
import nl.cc.task.util.TmdbCategoryEnum;
import nl.cc.task.util.TmdbGenreEnum;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movie")
public class MovieController {

    public final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/{category}")
    public ResponseEntity<TmdbResponse> getByCategoryMovies(@PathVariable("category") String category) {
        TmdbCategoryEnum filter = TmdbCategoryEnum.valueOf(category);
        return ResponseEntity.ok().body(movieService.getByCategory(filter));
    }

    @GetMapping
    public MovieResponse getMoviesByGenre(@RequestParam("withGenre") String genres,
                                          @PageableDefault(page = 0, size = 10) Pageable pageable,
                                          @RequestParam("filterTitle") String filterTitle) {
        TmdbGenreEnum tmdbGenreEnum = TmdbGenreEnum.of(genres);
        MovieResponse movieResponse = movieService.getByGenre(tmdbGenreEnum, pageable, filterTitle);
        return movieResponse;
    }

    @PostMapping
    public ResponseEntity<String> saveMovie(@RequestParam MovieDTO movieDTO) {
        movieService.save(movieDTO);
        return ResponseEntity.ok().body("Movie saved correctly");
    }

    @GetMapping("/create")
    public void createMovieData() {
        movieService.getAndSavaAllMovies();
    }

    @DeleteMapping("/{movieId}")
    public ResponseEntity deleteMovie(@PathVariable("movieId") Long movieId) {
        movieService.deleteMovie(movieId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{movieId}")
    public ResponseEntity updateMovie(@RequestParam("movieDTO") MovieDTO movieDTO) {
        return ResponseEntity.ok().build();
    }
}
