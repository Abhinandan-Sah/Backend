import React from 'react'
import {useState} from "react";
import "./Lottery.css"
import { genTicket, sum } from './helper';
import Ticket from './Ticket';

export const Lottery = ({n, winningSum}) => {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;
    let buyTicket = () =>{
      setTicket(genTicket(n));
    }

  return (
    <div>
        <h1 className='text-black'>Lottery Game</h1>
        <Ticket ticket={ticket} />
        <br />
        <button className='border-2 border-sky-500 rounded-full bg-green-600 text-white px-2 py-1' onClick={buyTicket}>Buy New Ticket</button>
        <h2>{isWinning && "Congratulations, you won!"}</h2>
    </div>
  )
}

export default Lottery;