package com.bowling.bae.controller;

import com.bowling.bae.domain.Score;
import com.bowling.bae.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ScoreController {
    @Autowired
    ScoreRepository scoreRepository;



    @GetMapping(path="/score",produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Score> getAllScore(){
        Sort sort = new Sort(Sort.Direction.DESC, "scoreNo");
        List<Score> scores = scoreRepository.findAll(sort);
        System.out.println(scores.toString());
        return scores;
    }

    @GetMapping(path="/score/{games}",produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Score> getScore(@PathVariable int games){
        Pageable pageable = new PageRequest(0,games);
        List<Score> scores = scoreRepository.findLimitCount(pageable);
        System.out.println(scores.toString());
        return scores;
    }

    @PostMapping(value = "/score",produces = MediaType.APPLICATION_JSON_VALUE)
    public void addScore(@RequestBody Score newScores){
        List<Score> scores = newScores.getNewScores();
        if(scores == null){
            return;
        }
        for(Score score : scores){
            scoreRepository.save(score);
        }
    }

}
