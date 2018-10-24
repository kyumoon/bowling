import {action, observable} from "mobx";
import * as React from "react";

interface ScoreObj {
    id:number,
    score:number,
    isNew:boolean
}

class ScoreStore{
    @observable scoreList:Array<ScoreObj>=[];
    originScoreList:Array<ScoreObj>=[];

    @action
    getScoreList =(limit:number = 0)=>{
        // console.log(333);
        let temp = limit === 0 ? this.originScoreList : this.originScoreList.slice(0,limit);
        return temp;
    }

    @action
    getLimitedList = (limit:number)=>{
        return this.scoreList.slice(0,limit);
    }

    @action
    setLimit = (limit:number = 0)=>{
        this.scoreList = limit === 0 ? this.originScoreList : this.originScoreList.slice(0,limit);
    }

    @action
    addScoreList = (score:number)=>{
        let newItem = {
            id: new Date().getMilliseconds()+Math.random(),
            score,
            isNew:true
        }
        this.originScoreList.push(newItem);
        this.scoreList.push(newItem);
    }

    @action
    resetScoreList = ()=>{
        this.scoreList=[];
    }

    saveScores = ()=>{
        let newScores:Array<ScoreObj> = this.scoreList.filter((score:ScoreObj)=>{
            return score.isNew;
        });

        let body = {
            newScores
        }

        let request = {
            method: 'post',
            body : JSON.stringify(body),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
        }
        fetch('/score',request).then((response:Response):any=>{
            if(response.ok){
                console.log('response 200');
                return response.text();
                // return response.json();
            }else{
                console.log('response error occured!!');
            }
        }).then((json:any)=>{
            console.dir(json);
        });
    }

    @action
    selectList = ()=>{
        let request = {
            method: 'get',
        }
        fetch('/score',request).then((response:Response):any=>{
            if(response.ok){
                console.log('response 200');
                return response.json();
            }else{
                console.log('response error occured!!');
            }
        }).then((json:any)=>{
            console.dir(json);
            this.originScoreList = json;
            this.scoreList = json;
        });
    }

    getAvg = ()=>{
        let scoreSum = 0;
        if(this.scoreList.length === 0){
            return;
        }
        const scoreList = this.scoreList.map((item:any)=>{
            scoreSum+=item.score;
            return <li key={item.id}>{item.score}</li>
        });
        let scoreAvg = Math.round(scoreSum/scoreList.length*10)/10;
        return scoreAvg;
    }
}

const scoreStore = new ScoreStore();

export default scoreStore;