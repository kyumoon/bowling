import * as React from 'react';
import {inject, observer} from 'mobx-react'
import ScoreInput from "./ScoreInput";

@inject('store')
@observer
class ScoreBoard extends React.Component<any,any>{
    scoreStore = this.props.store;
    constructor(props:any){
        super(props);
        // const scoreStore = this.props.store;
        //임시 테이터생성
        this.scoreStore.addScoreList(133);
        this.scoreStore.addScoreList(155);
        this.scoreStore.addScoreList(143);
        this.scoreStore.addScoreList(165);
        this.scoreStore.addScoreList(182);
        this.scoreStore.addScoreList(177);
    }

    public render(){
        let scoreSum = 0;
        const scoreList = this.scoreStore.scoreList.map((item:any)=>{
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
                <ScoreInput/>
                <div>Score : {scoreAvg}</div>
                <ul>
                    {scoreList}
                </ul>
            </div>
        );
    }

    onClick=(e: any)=>{
        let target = e.target;
        let gameCount = +target.getAttribute('data-game')||0;
        this.scoreStore.setLimit(gameCount);
    }
}

export default ScoreBoard;