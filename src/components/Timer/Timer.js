import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import * as routes from '../../constants/routes';
import './Timer.css';

// const CountdownCompleted = () => <span>Good Job!</span>;

// const renderer = ({ minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <CountdownCompleted />;
//   } else {
//     return <span>{minutes}:{seconds}</span>;
//   }
// };

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 5,
            isPlaying: false
        }
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer() {
        this.interval = setInterval(
            () => {
                if(this.state.timeLeft > 0) {
                    this.setState(prevState => ({
                        timeLeft: prevState.timeLeft -1
                    }))
                } else {
                    clearInterval(this.interval)
                    // Submit user input and render next page 
                }
            },
            1000
        )
    }

    // startTimer() {
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    //     this.setState({
    //         isPlaying: true
    //     });
    // }

    // stopTimer() {
    //     clearInterval(this.timerID);
    //     this.setState({
    //         timeLeft: 0,
    //         isPlaying: false,
    //         date: null
    //     });
    // }
    render() {
        const isPlaying = this.state.isPlaying;
        if(this.state.timeLeft === 0){
            return (
                <Redirect to={routes.EXIT} />
            );
        } else {
            return (
                <div>
                    <h3><span class="glyphicon glyphicon-time"></span> {this.state.timeLeft} seconds</h3>
                    <button onClick={this.startTimer}>{isPlaying ? "Keep Going!" : "Start Journaling!"}</button>
                </div>
            );
        } 
    }
}
