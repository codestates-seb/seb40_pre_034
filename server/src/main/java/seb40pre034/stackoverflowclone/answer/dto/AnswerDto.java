package seb40pre034.stackoverflowclone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;


public class AnswerDto {

    @AllArgsConstructor
    @Getter
    public static class Post {

        @NotBlank(message = "답변 내용을 입력해 주세요.")
        private String answer_content;
        private Long memberId;
        private Long questionId;
        private List<String> imgUrls;


    }

    @AllArgsConstructor
    @Getter
    public static class Patch {
        private long answerId;

        @NotBlank(message = "답변 내용을 입력해 주세요.")
        private String answer_content;
        private List<String> imgUrls;

        public void setAnswerId(long answerId) {
            this.answerId = answerId;
        }
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Response {
        private long answerId;
        private String nickName;
        private String answer_content;
        private List<String> imgUrls;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private Integer answer_vote;
    }
}
