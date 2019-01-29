
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {_, shuffle, sample} from 'underscore';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

class Tonggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {clicks: 0};

        // This binding is necessary to make `this` work in the callback
        this.handleClickByFunc = this.handleClickByFunc.bind(this);
    };
    handleClick = (e) => {
        this.setState({isTonggleOn: !this.state.isTonggleOn})
    }

    handleClickByFunc(){
        const newClick = this.state.clicks + 1;
        this.setState({clicks: newClick});
        if(newClick %2 === 0) {
            this.props.onEventClick(newClick);

        }
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClickByFunc}>Click is {this.state.clicks}</button>
            </div>
        );
    }

}

ReactDOM.render(<Tonggle onEventClick={(data) => console.log(`event ${data}`)}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();