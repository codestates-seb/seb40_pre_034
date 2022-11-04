package seb40pre034.stackoverflowclone.tag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb40pre034.stackoverflowclone.question.entity.QuestionTag;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false, unique = true)
    private String tagName;

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void setQuestionTags(List<QuestionTag> questionTags) {
        this.questionTags = questionTags;
    }

    public void setQuestionTags(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
    }
}
