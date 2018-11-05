package com.bowling.bae.repository;

import com.bowling.bae.domain.Score;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import java.util.List;

public interface ScoreRepository extends JpaRepository<Score, Long>, QuerydslPredicateExecutor<Score> {

    @Query("select s from Score s ")
    List<Score> findLimitCount(Pageable pageable);
}
