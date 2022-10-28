package seb40pre034.stackoverflowclone.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40pre034.stackoverflowclone.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
}
