import './App.css';
import React, { useState } from "react"
import Board from './components/Board/Board';
import Title from './components/Title/Title';

const App = () => {
    const [ won, setWon ] = useState(false)

    return (
        <div className="App">
            <Title
                finished={won}
            />
            <Board 
                size={5}
                finished={won}
                setFinished={setWon}
            />
        </div>
    );
}

export default App;