package com.bowling.bae.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@ToString
@NoArgsConstructor
@Getter @Setter
@JsonSerialize
public class Score {

    @GeneratedValue
    @Id
    @JsonProperty(value = "id")
    private long scoreNo;
    private int score;
    private boolean isNew;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date regDate;

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Score> newScores;

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    String crudType;
}
