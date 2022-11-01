package seb40pre034.stackoverflowclone.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class CommentDto {

    @AllArgsConstructor
    @Getter
    public static class Post {
        @NotBlank(message = "댓글 내용을 입력해 주세요.")
        private String comment_content;
    }

    @AllArgsConstructor
    @Getter
    public static class Patch {
        private long commentId;

        @NotBlank(message = "댓글 내용을 입력해 주세요.")
        private String comment_content;

        public void setCommentId(long commentId) {
            this.commentId = commentId;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long commentId;
        private String comment_content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }


}
