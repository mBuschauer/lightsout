import './App.css';
import React, { useState, useEffect } from "react"
import Board from './components/Board/Board';
import Title from './components/Title/Title';

const App = () => {
    const [ won, setWon ] = useState(false)

    useEffect(() => {
        document.title = "Twice Dead - Lights Out"; // Change tab title
      }, []);

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