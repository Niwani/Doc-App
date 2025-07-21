import React, {useState} from "react";

import './GreetingCard.css';

export default function GreetingCard() {
    const [clicked, setIsClicked] = useState(false);

    function handleClickButton() {
        setIsClicked(true)

        setTimeout(() =>setIsClicked(false), 200)
    }

    return (
        <div className="greeting-card">
            <div className="inside-text">
                <h3>Hello, Anne!</h3>
                <p className="reminder-text">Don't forget to complete <br></br> your daily health report!</p>
                <p className="good-bye">Have a nice day!</p>
                <button className={clicked ? 'button clicked' : 'button'} onClick={handleClickButton}>Complete report</button>
            </div>
        </div>
    )
}