package nl.cc.task.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "genre")
@Getter
@Setter
public class GenreEntity {

    @Id
    private Long id;

    @Column(name = "name")
    private String name;

}