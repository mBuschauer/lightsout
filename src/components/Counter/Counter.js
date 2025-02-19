import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ moves }) => {
    return (
        <div className="won">
            <p class={"small-text"}>{moves.length}/15 moves</p>
        </div>
    );
};

export default Counter;
