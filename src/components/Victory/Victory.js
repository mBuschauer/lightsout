import React, { useState } from "react";
import "./Victory.css";

const Victory = ({ moves }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const extendedMoves = [["See Moves?", ""]].concat(moves).concat([["Victory!", ""]]);

    const nextMove = () => {
        if (currentIndex < extendedMoves.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevMove = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="won">
            <h2>You won!</h2>
            <p class={"small-text"}>It took {moves.length} moves!</p>
            <p>
                {extendedMoves[currentIndex][0] !== "See Moves?" && extendedMoves[currentIndex][0] !== "Victory!" ?
                    `${currentIndex}. [${extendedMoves[currentIndex][0] + 1},${extendedMoves[currentIndex][1] + 1}]` :
                    extendedMoves[currentIndex][0]}
            </p>
            <button onClick={prevMove} disabled={currentIndex === 0} class={"won-button"}>Previous</button>
            <button onClick={nextMove} disabled={currentIndex === extendedMoves.length - 1} class={"won-button"}>Next</button>        </div>
    );
};

export default Victory;
