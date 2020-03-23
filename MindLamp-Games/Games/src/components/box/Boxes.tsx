/**
 * @file   Boxes.tsx
 * @brief  Boxes component which is the initial point of Box game
 * @date   Mar , 2020
 * @author ZCO Engineer
 * @copyright (c) 2020, ZCO
 */
import * as React from 'react';
import { Link } from "react-router-dom";

import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Board from './Board';

   
interface AppState {
    current:any;    
}

class Box extends React.Component<{}, AppState> {
  
  constructor(props: {}) {
    super(props);
  }
  
  // To refresh the game
  clickHome=() => {
    window.location.reload(false);
  }

  // Game render function
  render() {     
    return (
      <div>
        <nav className="home-link">
          <Link onClick={this.clickHome}><FontAwesomeIcon icon={faRedo} /></Link>
        </nav>
        <div className="heading">Box Game</div>
        <div className="game-board">
        <Board  
        />          
      </div> 
    </div> 
    );
  }
}

export default Box