package seb40pre034.stackoverflowclone.tag.service;

import seb40pre034.stackoverflowclone.tag.entity.Tag;

import java.util.List;

public interface TagService {
    //CR
    public List<Tag> createTag(List<String> tags, Long questionId);
    public Tag findTag(long tagId);

    public Tag findTag(String tagName);
    public Tag findVerifiedTag(long tagId);

    public Tag findVerifiedTag(String tagName);
}
