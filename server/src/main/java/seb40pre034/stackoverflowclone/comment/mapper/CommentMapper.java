package seb40pre034.stackoverflowclone.comment.mapper;

import seb40pre034.stackoverflowclone.comment.dto.CommentDto;
import seb40pre034.stackoverflowclone.comment.entity.Comment;

public interface CommentMapper {

    Comment commentPostDtoToComment(CommentDto.Post requestBody);
    Comment commentPatchDtoToComment(CommentDto.Patch requestBody);
    CommentDto.Response commentToCommentResponse(Comment comment);
}
