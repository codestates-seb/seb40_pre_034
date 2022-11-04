package seb40pre034.stackoverflowclone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb40pre034.stackoverflowclone.tag.entity.Tag;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "QUESTION_TAG")
public class QuestionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    public void setQuestion(Question question) {
        this.question = question;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }
}
