package seb40pre034.stackoverflowclone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40pre034.stackoverflowclone.question.entity.QuestionTag;


public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
}
