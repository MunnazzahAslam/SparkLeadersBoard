import React, {Component} from 'react';
import './style.css';

export default class Student extends Component {
    constructor(){
        super();
        this.state={
            score:0,
            success: false
        }
    }
    componentDidMount(){
        this.setState({
            score:this.props.score
        });
    }
    addScore(){
        this.setState({
            score:this.state.score + 1
        },()=>{
            if(this.state.score >= 350){
                this.setState({ success:true })           
             }
        })
    }
    subScore(){
        this.setState({
            score:this.state.score - 1
        })
    }
    
    render() {

        const isSuccess= this.state.success;
        let text;

        if(isSuccess){
            text=<span>Success</span>
        }
        else{
            text='';
        }

        return (
        <div className="student">
            <div className="left">
            <h2 className="studentName">{this.props.name}
            <button className="addScore" onClick={()=>this.addScore()}>+</button>
            <button className="subScore" onClick={()=>this.subScore()}>-</button>
            </h2>
        <p className="uniName">{this.props.uni} {text}</p>
            </div>
            <div className="right">
            <p className="score">{this.state.score}</p>
            </div>
        </div>          
        )
    }
    }
