import * as React from 'react';
import {inject, observer} from 'mobx-react'
import ScoreInput from "./ScoreInput";
// import scoreStore from "../store/ScoreStore";

@inject('store')
@observer
class ScoreBoard extends React.Component<any,any>{
    scoreStore = this.props.store;
    constructor(props:any){
        super(props);
        this.scoreStore.selectList();
    }

    public render(){
        let scoreSum = 0;
        let scoreAvg = 0;
        const temp = {
            color:'red'
        }

        const scoreList = this.scoreStore.scoreList.map((item:any)=>{
            scoreSum+=item.score;
            if(!item.crudType){
                return <li key={item.id}>{item.score} <button onClick={()=>{  this.scoreStore.removeScore(item);} }>X</button> </li>
            }else if(item.crudType === 'D'){
                return <del key={item.id} style={temp}>{item.score}</del>
            }
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
        this.scoreStore.selectList(gameCount);
    }

    // deleteItem = (item: any)=>{
    //
    // }
}

export default ScoreBoard;