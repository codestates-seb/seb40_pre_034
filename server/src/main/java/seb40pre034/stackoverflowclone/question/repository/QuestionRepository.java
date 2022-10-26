package seb40pre034.stackoverflowclone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40pre034.stackoverflowclone.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
