import {action, observable} from "mobx";

interface ScoreObj {
    id:number,
    score:number
}

class ScoreStore{
    @observable scoreList:Array<ScoreObj>=[];
    // @observable limit = 0;
    originScoreList:Array<ScoreObj>=[];

    @action
    getScoreList(limit:number = 0){
        // console.log(333);
        let temp = limit === 0 ? this.originScoreList : this.originScoreList.slice(0,limit);
        return temp;
    }

    @action
    getLimitedList(limit:number){
        return this.scoreList.slice(0,limit);
    }

    @action
    setLimit(limit:number = 0){
        this.scoreList = limit === 0 ? this.originScoreList : this.originScoreList.slice(0,limit);
    }

    @action
    addScoreList(score:number){
        let newItem = {
            id: new Date().getMilliseconds()+Math.random(),
            score
        }
        this.originScoreList.push(newItem);
        this.scoreList.push(newItem);
    }

    resetScoreList(){
        this.scoreList=[];
    }
}

const scoreStore = new ScoreStore();

export default scoreStore;