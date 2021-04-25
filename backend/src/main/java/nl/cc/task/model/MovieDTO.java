package nl.cc.task.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.Instant;

@Getter
@Setter
public class MovieDTO implements Serializable {

    private Long id;
    private String originalLanguage;
    private String posterPath;
    private Boolean video;
    private String title;
    private String overview;
    private Instant releaseDate;
    private Long voteCount;
    private Boolean adult;
    private String backdropPath;
    private Double voteAverage;
    private String originalTitle;
    private Double popularity;
    private String mediaType;

}
