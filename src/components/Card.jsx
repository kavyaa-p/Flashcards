import React, { useState } from 'react';
import { flashcardList } from '../data.js';
import './Card.css';

const Card = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false); // Track flip state

    const currentCard = flashcardList[currentCardIndex];

    const cardClick = () => {
        setIsFlipped(!isFlipped); // Toggle the flip state
    };

    function handleNextClick() {
        const nextIndex = Math.floor(Math.random() * flashcardList.length);
        if (nextIndex === currentCardIndex) {
            return handleNextClick();
        }
        setCurrentCardIndex(nextIndex);
        setIsFlipped(false);
    }

    return (
        <div className='card-container'>
            <div className={`FlipCard ${isFlipped ? 'flipped' : ''}`} onClick={cardClick}>
                <div className="FlipCardInner">
                    <div className="Card">
                        {currentCard.flag ? (
                            <img src={currentCard.flag} alt={`${currentCard.country} flag`} style={{ width: '200px', height: 'auto' }} />
                        ) : (
                            <h1>{currentCard.country}</h1>
                        )}
                    </div>
                    <div className="Card CardBack">
                        <h1>{currentCard.capital}</h1>
                    </div>
                </div>
            </div>
            <div className="Button" onClick={handleNextClick}>
                <button>Next</button>
            </div>
        </div>
    );
};

export default Card;
