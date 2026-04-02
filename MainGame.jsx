import { useState, useEffect, useRef } from 'react';
import { useDragAndDrop } from "./DragAndDrop";

import GameSoundTrack from './assets/Gaming Sountrack.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretDown
}
from "@fortawesome/free-solid-svg-icons";

import './MainGame.css'

const cardDeck = [
        {id: 1, color: "green", name: 1, description: "UNO Green Card"},
        {id: 2, color: "red",  name: 2, description: "UNO Red Card"},
        {id: 3, color: "yellow", name: 3, description: "UNO Yellow Card"},
        {id: 4, color: "blue", name: 4, description: "UNO Blue Card"},
        {id: 5, color: "black", name:"+4", description: "Draw 4 UNO Card"},
        {id: 6, color: "green", name: 5, description: "UNO Green Card"},
        {id: 7, color: "red", name: 6, description: "UNO Red Card"},
        {id: 8, color: "yellow", name: 7, description: "UNO Yellow Card"},
        {id: 9, color: "blue", name: 8, description: "UNO Blue Card"},
        {id: 10, color: "green", name: 1, description: "UNO Red Card"},

        {id: 11, color: "blue", name: 2, description: "UNO Blue Card"},
        {id: 12, color: "red", name: "+2", description: "Draw 2 UNO Card"},
        {id: 13, color: "green", name: 3, description: "UNO Green Card"},
        {id: 14, color: "yellow", name: 4, description: "UNO Yellow Card"},
        {id: 15, color: "green", name: "+2", description: "Draw 2 UNO Card"},
        {id: 16, color: "red", name: 5, description: "UNO Red Card"},
        {id: 17, color: "blue", name: 6, description: "UNO Blue Card"},

        {id: 18, color: "yellow", name: "+2", description: "Draw 2 UNO Card"},
        {id: 19, color: "blue", name: "+2", description: "Draw 2 UNO Card"}
    ];

function MainGame({}) {

    const {handleDragCard, handleDragEnter, handleDragOver, handleDragEnd} = useDragAndDrop(onDrop);

    const [XPBoard, setXPBoard] = useState(null);
    const [MinimizeXPBoard, setMinimizeXPBoard] = useState(false);
    const [ReturnLobby, setReturnLobby] = useState(null);

    const [card_deck, set_card_deck] = useState([]);
    const [CurrentCard, setCurrentCard] = useState(null);

    const [onCardAnimation] = useState(true);
    const [isCardRevealed, setCardRevealed] = useState(false);

    const[ColorWheel, setColorWheel] = useState(null);

function MyGameSound() {
    const audioRef = useRef(null);

useEffect(() => {
    const unlockAudio = () => {
        if(audioRef.current) {
           audioRef.current.play();
        }
        document.removeEventListener("click", unlockAudio);
    };
    document.addEventListener("click", unlockAudio);
}, []);

return (
    <>
    <audio ref={audioRef} autoPlay loop src={GameSoundTrack}></audio>
    </>
  );
}
    
function HandleDeck() {
    
    for (let i = cardDeck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[randomIndex]] = [cardDeck[randomIndex], cardDeck[i]];
    }
    setCurrentCard(cardDeck[0]);
    set_card_deck(cardDeck.slice(1, 8)); // returns the selected cards for the user to use
    }

    function onDrop(from, to) {  // from: handles where the card is dragged from, to: handles where the card is dropped; 
    const card_result = card_deck.filter(checkCard => checkCard.id !== from.id); // filters through the array object and keeps only the cards that pass the condition
   
    // rule enforcement to ensure the user puts the correct card based off color or number
    if(to === "starting_deck" && from.color === CurrentCard.color || from.name === CurrentCard.name || from.name === "+4") { 
    set_card_deck(card_result);  // card_result becomes the new hand; essentially removing the card from the user's view
    setCurrentCard(from);
    }
    console.log("Dropped Card: ", from);
    console.log("Dropped onto deck: ", to);
    }

    // runs the shuffling rendering when screen loads
    useEffect(() => {
        HandleDeck(); 
        setTimeout(() => {
            setCardRevealed(true);
        }, 2000);
    },[]);

    return (
    <>
    <MyGameSound />
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

    <div onDragOver={(e) => handleDragOver(e)}
    onDragEnter={() => handleDragEnter("starting_deck")}
    className="starting_deck">
     {CurrentCard && (
    <div className={`play_card ${CurrentCard.color}`}>
    <h1 className="play_number">{CurrentCard.name}</h1>
    <h1 className="main_number">{CurrentCard.name}</h1>
    <h1 className="secondary_number">{CurrentCard.name}</h1>
    <div className="play_circle"></div>
    </div>
       )}   
    </div>
    <button type="submit" className="UNO_Button" onClick={() => setXPBoard("XP")}>UNO!</button>
    </div>

    <div className="color_selector">
    <h6 className="color_header">Select a color of your choice: </h6>
    <div className="color_wild">
    <div className="wedge_red">HELLO</div>
    <div className="wedg_blue">HELLO</div>
    <div className="wedge_yellow">HELLO</div>
    <div className="wedge_green">HELLO</div>
    </div>
    </div>

    {XPBoard === "XP" && !MinimizeXPBoard && (
    <div className="XP_Board_Container">
    <h6 className="player_progress">Player Progress</h6>
    <FontAwesomeIcon icon={faCaretDown} className="fa-caret" onClick={() => setMinimizeXPBoard(true)}></FontAwesomeIcon>
    <i class="fa-sharp fa-solid fa-stars"></i>
     <i class="fa-sharp fa-solid fa-star"></i>
    <h6 className="level">Level:</h6>
    <i class="fa-duotone fa-regular fa-minus"></i>
    <h6 className="games_played">Games Played:</h6>
    <h6 className="win_streak">Win Streak:</h6>
    <i class="fa-duotone fa-solid fa-fire-flame-curved"></i>
    <h6 className="xp_earned">XP Earned:</h6>
    <h6 className="credits_earned">Credits Earned:</h6>
    <button type="button" className="Return" onClick={() => setReturnLobby("lobby")}>RETURN</button>
    <button type="button" className="play_again">PLAY AGAIN</button>
    </div>
    )}
    
    <div className="player_zone">
    <h4>Player Zone</h4>
    {isCardRevealed && (
    <div className="players_cards">
    {card_deck.map((items) => (
    <div key={items.id} className={`render_cards ${items.color}`} onDragStart={() => handleDragCard(items)} draggable="true" onDragEnd={() => handleDragEnd()}>
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
    )}
    

   {!isCardRevealed && (
    <div className="card_animation">
    <div className="card_animation_one" >
    <div className="card-animation-circle"></div>
    <h4 className="card_uno_title">UNO</h4>
    </div>
    

    <div className="card_animation_two">
    <div className="card-animation-circle"></div>
    <h4 className="card_uno_title">UNO</h4>
    </div>

     <div className="card_animation_three" >
    <div className="card-animation-circle"></div>
    <h4 className="card_uno_title">UNO</h4>
    </div>

    <div className="card_animation_four">
    <div className="card-animation-circle"></div>
    <h4 className="card_uno_title">UNO</h4>
    </div>

    <div className="card_animation_five">
    <div className="card-animation-circle"></div>
    <h4 className="card_uno_title">UNO</h4>
    </div>

    <div className="card_animation_six">
    <div className="card-animation-circle"></div>
    <h4 className="card_uno_title">UNO</h4>
    </div>

    <div className="card_animation_s">
    <div className="card-animation-circle"></div>
    <h4 className="card_uno_title">UNO</h4>
    </div>
    </div>
    )}
    </div>
    </>
    )

}

export default MainGame