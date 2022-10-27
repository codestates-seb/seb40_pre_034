package seb40pre034.stackoverflowclone.question.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import seb40pre034.stackoverflowclone.exception.BusinessLogicException;
import seb40pre034.stackoverflowclone.exception.ExceptionCode;
import seb40pre034.stackoverflowclone.question.entity.Question;
import seb40pre034.stackoverflowclone.question.repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
@AllArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    @Override
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle()).ifPresent(findQuestion::setTitle);
        Optional.ofNullable(question.getContent()).ifPresent(findQuestion::setContent);
        Optional.ofNullable(question.getVote()).ifPresent(findQuestion::setVote);

        return questionRepository.save(findQuestion);
    }

    @Override
    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    @Override
    public List<Question> findQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    @Override
    @Transactional(readOnly = true)
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        return optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }
}
