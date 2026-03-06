import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck} from "@fortawesome/free-solid-svg-icons";

import './App.css'
import MainLobby from "./MainLobby"; 

function App() {
  const [count, setCount] = useState(0)

  // establishing a screen state for static switching
  const [screen, setScreen] = useState("ROE");

  return (
    <>
    <div className="color_wheel">
    </div>
    <h3>UNO<br />
      PARTY<br />
      ONLINE</h3>
    {screen === "ROE" && (
      <>
        <div className="ROE">
        <h1 className="rules_title">ROE</h1>
        <ul className="list_of_engagements">
        <li><FontAwesomeIcon icon={faCheck} className="check"></FontAwesomeIcon>Setup: Deal 7 cards to each player, turn one card up to start the discard pile, and place the rest face-down to draw.</li><br></br>
        <li><FontAwesomeIcon icon={faCheck} className="check"></FontAwesomeIcon>Matching: Match color, number, or symbol (Action cards).</li><br></br>
        <li><FontAwesomeIcon icon={faCheck} className="check"></FontAwesomeIcon>Draw Rule: If you cannot play, you must draw one card. If it is playable, you may play it immediately; otherwise, turn passes.</li><br></br>
        <li><FontAwesomeIcon icon={faCheck} className="check"></FontAwesomeIcon>UNO Penalty: When down to one card, you must press the button that will say "UNO!" If caught by another player before the next person begins their turn, you must draw 2 cards.</li>
        </ul>
        <label htmlFor="username" className="username_header">Enter username:</label>
        <input type="text" className="input_field" id="username" name="username">
        </input>
        <button type="submit" className="create-account"
        onClick={() => setScreen("lobby")}
        >Create Account</button>
        </div>
         <div className="UNO_Card">
        <h2>UNO</h2>
        <div className="circle"></div>
        </div>

        <div className="UNO_Card2">
        <h2 className="UNO_Title2">UNO</h2>
        <div className="circle_2"></div>
        </div>


        <div className="UNO_Card3">
        <h2 className="UNO_Title3">UNO</h2>
        <div className="circle_3"></div>
        </div>
    </>
    )}
    {screen === "lobby" && <MainLobby />}
    </>
  )
}

export default App