package seb40pre034.stackoverflowclone.login.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import seb40pre034.stackoverflowclone.member.entity.Member;
import seb40pre034.stackoverflowclone.member.repository.MemberRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final MemberRepository repository;

    public Member login(String email, String password) {

        return repository.findByEmail(email)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }
}
