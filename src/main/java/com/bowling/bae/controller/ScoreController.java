package com.bowling.bae.controller;

import com.bowling.bae.domain.Score;
import com.bowling.bae.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ScoreController {
    @Autowired
    ScoreRepository scoreRepository;

    @GetMapping(path="/score/{games}",produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Score> getScore(@PathVariable int games){
        Pageable pageable = new PageRequest(0,games);
        List<Score> scores = scoreRepository.findLimitCount(pageable);
        System.out.println(scores.toString());
        return scores;
    }

    @PostMapping("/score")
    public void addScore(List<Score> scores){
        if(scores == null){
            return;
        }
        for(Score score : scores){
            scoreRepository.save(score);
        }
    }

}
