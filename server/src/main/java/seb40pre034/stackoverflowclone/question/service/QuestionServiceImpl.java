package seb40pre034.stackoverflowclone.question.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import seb40pre034.stackoverflowclone.exception.BusinessLogicException;
import seb40pre034.stackoverflowclone.exception.ExceptionCode;
import seb40pre034.stackoverflowclone.question.entity.Question;
import seb40pre034.stackoverflowclone.question.entity.QuestionTag;
import seb40pre034.stackoverflowclone.question.repository.QuestionRepository;
import seb40pre034.stackoverflowclone.question.repository.QuestionTagRepository;
import seb40pre034.stackoverflowclone.tag.entity.Tag;
import seb40pre034.stackoverflowclone.tag.repository.TagRepository;
import seb40pre034.stackoverflowclone.tag.service.TagService;
import seb40pre034.stackoverflowclone.tag.service.TagServiceImpl;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
@AllArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final QuestionTagRepository questionTagRepository;
    private final TagRepository tagRepository;

    @Override
    public Question createQuestion(Question question) {
        question.setVote(0);
        question.setViews(1);
        return questionRepository.save(question);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Question updateQuestion(Question question, List<String> tags) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle()).ifPresent(findQuestion::setTitle);
        Optional.ofNullable(question.getContent()).ifPresent(findQuestion::setContent);
        Optional.ofNullable(question.getVote()).ifPresent(findQuestion::setVote);
        if (Optional.ofNullable(tags).isPresent()) {
            for (int i = 0; i < findQuestion.getQuestionTags().size(); i++) {
                QuestionTag questionTag = findQuestion.getQuestionTags().get(i);
                findQuestion.getQuestionTags().remove(questionTag);
                questionTag.getTag().getQuestionTags().remove(questionTag);
                questionTagRepository.delete(questionTag);
                i--;
            }

            for (String tag : tags) {
                if (tagRepository.findByTagName(tag).isEmpty()) {
                    Tag newTag = new Tag();
                    newTag.setTagName(tag);
                    tagRepository.save(newTag);
                }
                Tag foundTag = tagRepository.findByTagName(tag).get();
                QuestionTag questionTag = new QuestionTag();
                questionTag.setTag(foundTag);
                questionTag.setQuestion(question);
                findQuestion.getQuestionTags().add(questionTag);
                foundTag.getQuestionTags().add(questionTag);
                questionTagRepository.save(questionTag);
            }
        }
        return questionRepository.save(findQuestion);
    }

    @Override
    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    @Override
    public void increaseViews(long questionId) {
        Question foundQuestion = findQuestion(questionId);
        foundQuestion.setViews(foundQuestion.getViews() + 1);
        questionRepository.save(foundQuestion);
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
