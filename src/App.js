import './App.css';
import React, { useState, useEffect } from "react"
import Board from './components/Board/Board';
import Title from './components/Title/Title';
import Counter from './components/Counter/Counter'
import { computeHeadingLevel } from '@testing-library/react';

const App = () => {
    const [won, setWon] = useState(false)
    const [moves, setMoves] = useState([])


    useEffect(() => {
        document.title = "Twice Dead - Lights Out"; // Change tab title

        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", "Lights Out puzzle for Gehenna's Furnace (Twice Dead - DnD 5e Campaign)");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Lights Out puzzle for Gehenna's Furnace (Twice Dead - DnD 5e Campaign)";
            document.head.appendChild(meta);
        }
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
                moves={moves}
                setMoves={setMoves}
            />
            <Counter moves={moves} />
        </div>
    );
}

export default App;