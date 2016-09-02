import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trianspotting', '28 days later'];

ReactDOM.render(
    <Voting pair={pair} hasVoted='Trainsptting'/>,
    document.getElementById('app'));
