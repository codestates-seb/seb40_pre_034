package seb40pre034.stackoverflowclone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import seb40pre034.stackoverflowclone.question.entity.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Override
    @Query(value = "select q from Question as q ORDER BY q.createdAt DESC")
    List<Question> findAll();
}
