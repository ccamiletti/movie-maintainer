package nl.cc.task.repository;

import nl.cc.task.entity.GenreEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GenreRepository extends CrudRepository<GenreEntity, Long> {

    Optional<GenreEntity> findByName(String name);
}
