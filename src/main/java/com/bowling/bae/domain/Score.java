package com.bowling.bae.domain;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.util.List;

@Entity
@ToString
@NoArgsConstructor
@Getter @Setter
@JsonSerialize
public class Score {

    @GeneratedValue
    @Id
    private long scoreNo;
    private int score;
    private boolean isNew;

    @Transient
    private List<Score> newScores;
}
