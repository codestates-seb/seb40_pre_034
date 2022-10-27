package seb40pre034.stackoverflowclone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        private String title;
        private String content;
        private List<String> imgUrls;
        private List<String> tags;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long questionId;
        private String title;
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
    }
}
