package seb40pre034.stackoverflowclone.question.service;

import seb40pre034.stackoverflowclone.question.entity.Question;
import seb40pre034.stackoverflowclone.tag.entity.Tag;

import java.util.List;

public interface QuestionService {
    //CRUD
    public Question createQuestion(Question question);

    public Question updateQuestion(Question question, List<String> tags);

    public Question findQuestion(long questionId);

    public List<Question> findQuestions();

    public void deleteQuestion(long questionId);

    public Question findVerifiedQuestion(long questionId);

    public void increaseViews(long questionId);
}
