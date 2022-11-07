package seb40pre034.stackoverflowclone.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

@Getter
public class LoginDto {
    @Email
    private String username;
    @Pattern(regexp = "^(?=.[a-zA-Z])(?=.[!@#$%^+=-])(?=.[0-9]).{8,12}$")
    private String password;
}
