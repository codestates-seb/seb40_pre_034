package seb40pre034.stackoverflowclone.comment.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb40pre034.stackoverflowclone.comment.dto.CommentDto;
import seb40pre034.stackoverflowclone.comment.entity.Comment;
import seb40pre034.stackoverflowclone.comment.mapper.CommentMapper;
import seb40pre034.stackoverflowclone.comment.service.CommentService;
import seb40pre034.stackoverflowclone.dto.SingleResponseDto;

import javax.validation.Valid;

@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;


    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post requestBody) {
        Comment comment = mapper.commentPostDtoToComment(requestBody);

        Comment createdComment = commentService.createComment(comment);
        CommentDto.Response response = mapper.commentToCommentResponse(createdComment);

        return new ResponseEntity<>(new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }

}
