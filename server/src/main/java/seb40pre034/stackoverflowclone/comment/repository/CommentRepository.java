package seb40pre034.stackoverflowclone.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40pre034.stackoverflowclone.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
