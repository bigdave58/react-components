import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return ( <
        div className="ui container comments" >
        <
            div className="comment" >
                <a href="/" className="avatar">
                <img alt="avatar" />
                </a>
                <div>
                <a  href="/" className="author" >
                Sam
                </a>
                <div className="metadata">
                <span className="date"> Today at 6:00PM</span>
                </div>
                <div className="text"> Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};


ReactDOM.render( < App / > , document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
