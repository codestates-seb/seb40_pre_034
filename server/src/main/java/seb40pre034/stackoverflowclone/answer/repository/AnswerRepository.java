package seb40pre034.stackoverflowclone.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40pre034.stackoverflowclone.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
