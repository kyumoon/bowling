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
        this.scoreStore.selectList();
    }

    public render(){
        let scoreSum = 0;
        let scoreAvg = 0;
        const scoreList = this.scoreStore.scoreList.map((item:any)=>{
            scoreSum+=item.score;
            return <li key={item.id}>{item.score}</li>
        });
        if(scoreList.length){
            scoreAvg = Math.round(scoreSum/scoreList.length*10)/10;
        }
        return (
            <div>
                <ul className="floating-left">
                    <li onClick={this.onClick} data-game={5}>5게임</li>
                    <li onClick={this.onClick} data-game={7}>7게임</li>
                    <li onClick={this.onClick}>1주일</li>
                    <li onClick={this.onClick}>2주</li>
                    <li onClick={this.onClick}>한달</li>
                </ul>
                <ScoreInput/>
                <div>Score : {scoreAvg}</div>
                <ul>
                    {scoreList}
                </ul>
                <button onClick={this.scoreStore.saveScores}> 저장</button>
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