package seb40pre034.stackoverflowclone.answer.dto;

import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class AnswerResponseDto {
    private long answerId;
    private String answer_content;
    private List<String> imgUrls;
    private LocalDateTime date;
    private Integer vote;
}
