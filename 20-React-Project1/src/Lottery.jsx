import React from 'react'
import {useState} from "react";
import "./Lottery.css"
import { genTicket, sum } from './helper';

export const Lottery = () => {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) ===15;
    let buyTicket = () =>{
      setTicket(genTicket(3));
    }

  return (
    <div>
        <h1 className='text-black'>Lottery Game</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <br />
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h2>{isWinning && "Congratulations, you won!"}</h2>
    </div>
  )
}

export default Lottery;