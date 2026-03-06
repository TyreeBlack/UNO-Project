import  React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './MainGame.css'

function MainGame() {

    const [card_deck, set_card_deck] = useState([]);

    // declaring an array to handle uno card objects
    const cardDeck = [
        {id: 1, color: "green", name: 1, description: "UNO Green Card"},
        {id: 2, color: "red",  name: 2, description: "UNO Red Card"},
        {id: 3, color: "yellow", name: 3, description: "UNO Yellow Card"},
        {id: 4, color: "blue", name: 4, description: "UNO Blue Card"},
        {id: 5, color: "black", name: "+4", description: "Draw 4 UNO Card"}
    ];

    function HandleDeck() {

    const cardDeck = [
        {id: 1, color: "green", name: 1, description: "UNO Green Card"},
        {id: 2, color: "red",  name: 2, description: "UNO Red Card"},
        {id: 3, color: "yellow", name: 3, description: "UNO Yellow Card"},
        {id: 4, color: "blue", name: 4, description: "UNO Blue Card"},
        {id: 5, color: "black", name:"+4", description: "Draw 4 UNO Card"}
    ];

    for (let i = cardDeck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[randomIndex]] = [cardDeck[randomIndex], cardDeck[i]];
    }
      set_card_deck(cardDeck);

    }

    // runs the shuffling rendering when screen loads
    useEffect(() => {
        HandleDeck();
    }, []);

    return (
    <>
    <div className="gaming_table">
    <div className="uno_stack">
    <h1 className="UNO_Title">UNO</h1>
    <div className="UNO_circle"></div>
     </div>
    <div className="uno_stack_2">
    <h1 className="UNO_Title_2">UNO</h1>
    <div className="UNO_circle_2"></div>
    </div>
     <div className="uno_stack_3">
    <h1 className="UNO_Title_3">UNO</h1>
    <div className="UNO_circle_3"></div>
    </div>
       <div className="uno_stack_4">
    <h1 className="UNO_Title_4">UNO</h1>
    <div className="UNO_circle_4"></div>
    </div>

    <div className="starting_deck">
    <div className="play_card">
    <h1 className="play_number">8</h1>
    <h1 className="main_number">8</h1>
    <h1 className="secondary_number">8</h1>
    <div className="play_circle"></div>
    </div>
    </div>
    <button type="submit" className="UNO_Button">UNO!</button>
    </div>

    <div className="player_zone">
    <h4>Player Zone</h4>
    <div className="players_cards">
    {card_deck.map((items) => (
    <div key={items.id} className={`render_cards ${items.color}`}>
    <h2 className="render_header">{items.name}</h2>
    <div className="render_circle"></div>
    {
     items.name === "+4" && (
    <>
     <h2 className="Draw_Special_Card">+4</h2> 
       <div className="special_circle"></div>
       <div className="draw_4_logo_blue"></div>
       <div className="draw_4_logo_red"></div>
       <div className="draw_4_logo_green"></div>
       <div className="draw_4_logo_yellow"></div>
    </>
     )}
    </div>
    ))}
    </div>
    </div>
    </>
    )

}

export default MainGame