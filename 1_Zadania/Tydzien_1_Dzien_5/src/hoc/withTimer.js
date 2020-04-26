/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

import React, { useState, Component } from "react";

const withTimer = (WrappedComponent) => {

    return class extends Component {
        state = { counter: 0 }


        startTimer = () => {
            this.intervalId = setInterval(() => {
                this.setState(prevState => ({
                    counter: prevState.counter + 1
                }));
            }, 1000);
        }

        stopTimer = () => {
            clearInterval(this.intervalId)
        }

        render() {
            return (
                <WrappedComponent
                    counter={this.state.counter}
                    startTimer={this.startTimer}
                    stopTimer={this.stopTimer}
                    {...this.props}
                />
            )
        }
    }
}

export default withTimer;