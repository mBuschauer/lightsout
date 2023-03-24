import React, { useState } from "react"
import './Board.css'
import Cell from "../Cell/Cell"

const Board = ({ size }) => {

    const randomLight = () => Math.random() < .3

    const createGrid = () => 
        new Array(size)
            .fill()
            .map(r => 
                new Array(size)
                .fill()
                .map(c => randomLight()))
    
    const [ board, setBoard ] = useState(createGrid())
    
    const toggleLights = (row, col) => {
        const copy = [...board.map(r => [...r])]

        copy[row][col] = !copy[row][col]
        if (row < size - 1) 
            copy[row+1][col] = !copy[row+1][col]
        if (row > 0) 
            copy[row-1][col] = !copy[row-1][col]
        if (col < size - 1) 
            copy[row][col+1] = !copy[row][col+1]
        if (col > 0) 
            copy[row][col-1] = !copy[row][col-1]

        setBoard(copy)
    }

    const hasWon = () => board.every(row => row.every(cell => !cell) )
    
    return(
        <div className="Board">
           {hasWon() 
           ?    <div className="won">You won!</div> 
           :    board.map((row, rowIndex) => 
                    <div className="row" key={rowIndex}>
                        {row.map((_, colIndex) => (
                            <Cell 
                                key={`${rowIndex}-${colIndex}`}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                isOn={board[rowIndex][colIndex]}
                                toggleLights={toggleLights}
                            />
                        ))}
                    </div>) 
           }
        </div>
    )
}

export default Board