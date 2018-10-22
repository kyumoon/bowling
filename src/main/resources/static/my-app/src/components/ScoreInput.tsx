import * as React from 'react';
import {inject, observer} from 'mobx-react'
import {observable} from "mobx";
import scoreStore from "../store/ScoreStore";

@inject('store')
@observer
class ScoreInput extends React.Component<any,any>{
    scoreStore = this.props.store;
    @observable value='';
    constructor(props:any){
        super(props);
    }

    public render(){
        return (
            <input onChange={this.onChange} onKeyDown={this.onEnter}  value={this.value}/>
        );
    }

    onEnter = (e:any)=>{
        let newVal:string = e.target.value;
        if(e.key === 'Enter'){
            this.value='';
            scoreStore.addScoreList( +newVal );
            // fetch(`/score/3`).then((response:any):any =>{
            //     if(response.ok) {
            //         // console.log(response.blob());
            //         return response.json();
            //     }else{
            //         console.log('Network response was not ok.');
            //     }
            // }).then((myBlob)=>{
            //     console.dir(myBlob);
            // });
            return;
        }
    }

    onChange = (e:any)=>{
        let newVal:string = e.target.value;
        this.value = newVal;
    }

}

export default ScoreInput;