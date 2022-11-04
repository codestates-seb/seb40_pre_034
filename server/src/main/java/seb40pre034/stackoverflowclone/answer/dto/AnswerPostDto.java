package seb40pre034.stackoverflowclone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@AllArgsConstructor
public class AnswerPostDto {
    @NotBlank(message = "답변 내용을 입력해 주세요.")
    private String answer_content;
    private List<String> imgUrls;


}
