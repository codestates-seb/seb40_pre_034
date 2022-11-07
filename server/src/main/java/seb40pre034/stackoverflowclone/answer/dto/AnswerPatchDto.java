package seb40pre034.stackoverflowclone.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class AnswerPatchDto {
    private long answerId;
    @NotBlank(message = "답변 내용을 입력해 주세요.")
    private String answer_content;
    private List<String> ImgUrls;

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }
}


