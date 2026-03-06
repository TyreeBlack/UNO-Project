
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,
        faSearch
} 
       from  "@fortawesome/free-solid-svg-icons";


import './MainLobby.css'
import MainGame from "./MainGame";

function MainLobby() {

const [onscreen, setScreen] = useState("sidebar_menu");
const [activePanel, setActivePanel] = useState(null);

return (
    <>
    {onscreen === "sidebar_menu" && (
    <>
    <div className="sidebar_menu">
    <div className="sidebar_tab">
    </div>
    <div className="create_item">
    <h1 onClick={() => setActivePanel("create")}><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Create party</h1><br></br>
    </div>
    {activePanel === "create" && (
    <div className="game_room">
    <div className="slot_container">
    <button type className="decrement_slot">+</button>
    </div>
    <div className="slot_container_2">
    <button type className="increment_slot">+</button>
    </div>
    <div className="slot_container_3">
    <button type className="increment_slot_3">+</button>
    </div>
    <div className="slot_container_4">
    <button type className="increment_slot_4">+</button>
    </div>
    <button type="submit" className="readyup" onClick ={() => setScreen("GameRoom")}>Ready</button>
    <h1 className="player_limit">Maxmium: 4/4</h1>
    </div>
    )}
    <h1><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>Join Party</h1><br></br>
    <hr className="tabname_divider"/>
    <h1>Friends</h1>
    <div className="friend_request">
    </div>
    <hr className="tabname_divider" />
    </div>
    </>
    )}
    {onscreen === "GameRoom" && <MainGame />}
    </>
  )
}
export default MainLobby