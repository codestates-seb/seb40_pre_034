package seb40pre034.stackoverflowclone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;
        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
        private List<String> imgUrls;
        private List<String> tags;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long questionId;
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;
        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
        private List<String> imgUrls;
        private List<String> tags;

        public void setQuestionId(long questionId) {
            this.questionId = questionId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long questionId;
        private String title;
        private String content;
        private Integer vote;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        //정렬해서 보내기
    }

    @Getter
    @AllArgsConstructor
    public static class ListResponse {
        private long questionId;
        private String title;
        private String content;
        private Integer vote;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String nickname;
        private String tag;
        private Integer views;
        private Integer answerSum;
    }
}