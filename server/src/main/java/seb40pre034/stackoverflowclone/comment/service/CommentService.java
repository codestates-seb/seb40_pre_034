package seb40pre034.stackoverflowclone.comment.service;

import org.springframework.stereotype.Service;
import seb40pre034.stackoverflowclone.comment.entity.Comment;
import seb40pre034.stackoverflowclone.comment.repository.CommentRepository;
import seb40pre034.stackoverflowclone.exception.BusinessLogicException;
import seb40pre034.stackoverflowclone.exception.ExceptionCode;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class CommentService {

    private CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findVerifiedCommet(comment.getCommentId());

        Optional.ofNullable(comment.getComment_content())
                .ifPresent(findComment::setComment_content);
        return commentRepository.save(findComment);
    }

    public void deleteComment(Long commentId) {
        Comment findComment = findVerifiedCommet(commentId);
        commentRepository.delete(findComment);
    }

    public Comment findVerifiedCommet(long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        return optionalComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
    }
}
