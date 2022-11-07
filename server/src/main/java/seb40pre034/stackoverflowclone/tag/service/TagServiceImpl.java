package seb40pre034.stackoverflowclone.tag.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40pre034.stackoverflowclone.exception.BusinessLogicException;
import seb40pre034.stackoverflowclone.exception.ExceptionCode;
import seb40pre034.stackoverflowclone.question.entity.QuestionTag;
import seb40pre034.stackoverflowclone.question.repository.QuestionTagRepository;
import seb40pre034.stackoverflowclone.question.service.QuestionService;
import seb40pre034.stackoverflowclone.tag.entity.Tag;
import seb40pre034.stackoverflowclone.tag.repository.TagRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Transactional
@Service
public class TagServiceImpl implements TagService {
    private final TagRepository tagRepository;
    private final QuestionService questionService;
    private final QuestionTagRepository questionTagRepository;

    @Override
    public List<Tag> createTag(List<String> tags, Long questionId) {
        List<Tag> returnTag = new ArrayList<>();
        for (String t : tags) {
            Optional<Tag> optionalTag = tagRepository.findByTagName(t);
            if (optionalTag.isEmpty()) {
                Tag tag = new Tag();
                tag.setTagName(t);
                tagRepository.save(tag);
            }

            returnTag.add(findTag(t));
            QuestionTag questionTag = new QuestionTag();
            questionTag.setQuestion(questionService.findQuestion(questionId));
            questionTag.setTag(findTag(t));
            questionService.findQuestion(questionId).setQuestionTags(questionTag);
            findTag(t).setQuestionTags(questionTag);

            questionTagRepository.save(questionTag);
        }

        return returnTag;
    }

    @Override
    public Tag findTag(long tagId) {
        return findVerifiedTag(tagId);
    }

    @Override
    public Tag findTag(String tagName) {
        return findVerifiedTag(tagName);
    }

    @Override
    @Transactional(readOnly = true)
    public Tag findVerifiedTag(long tagId) {
        Optional<Tag> optionalTag = tagRepository.findById(tagId);
        return optionalTag.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
    }

    @Override
    public Tag findVerifiedTag(String tagName) {
        Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);
        return optionalTag.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
    }
}
