import * as React from 'react';
import scoreStore from '../store/ScoreStore';
// import * as mobx from 'mobx'
import { observer } from 'mobx-react'
// import {number} from "prop-types";

@observer
class ScoreBoard extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        //임시 테이터생성
        scoreStore.addScoreList(133);
        scoreStore.addScoreList(155);
        scoreStore.addScoreList(143);
        scoreStore.addScoreList(165);
        scoreStore.addScoreList(182);
        scoreStore.addScoreList(177);
    }

    public render(){
        let scoreSum = 0;
        const scoreList = scoreStore.scoreList.map((item:any)=>{
            scoreSum+=item.score;
            return <li key={item.id}>{item.score}</li>
        });
        let scoreAvg = Math.round(scoreSum/scoreList.length*10)/10;
        return (
            <div>
                <ul className="floating-left">
                    <li onClick={this.onClick} data-game={3}>3게임</li>
                    <li onClick={this.onClick} data-game={7}>7게임</li>
                    <li onClick={this.onClick}>7일</li>
                    <li onClick={this.onClick}>한달</li>
                </ul>
                <div>Score : {scoreAvg}</div>
                <ul>
                    {scoreList}
                </ul>
            </div>
        );
    }

    onClick(e: any){
        let target = e.target;
        console.dir(typeof e);
        let gameCount = +target.getAttribute('data-game')||0;
        scoreStore.setLimit(gameCount);
    }
}

export default ScoreBoard;