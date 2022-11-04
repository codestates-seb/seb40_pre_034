package seb40pre034.stackoverflowclone.login.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb40pre034.stackoverflowclone.login.entity.LoginEntity;
import seb40pre034.stackoverflowclone.login.service.LoginService;
import seb40pre034.stackoverflowclone.member.entity.Member;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/members/login")
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @PostMapping
    public String login(@Valid @RequestBody LoginEntity login, BindingResult bindingResult) {
        Member loginMember = loginService.login(login.getEmail(), login.getPassword());
        if(loginMember == null) {
            bindingResult.reject("loginFail", "이메일 또는 비밀번호가 틀립니다.");
            return "/로그인 실패";
        }

        //로그인 성공

        return "/로그인 성공";
    }
}
