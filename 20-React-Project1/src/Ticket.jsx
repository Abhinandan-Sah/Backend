import TicketNum from "./TicketNum.jsx"
import React from "react";

export default function Ticket({ticket}){
    return(

        <div className="border-2 border-sky-500 rounded-full my-3">
            <p className="text-1xl">Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum key={idx} num={num} />
            ))}
        </div>
    );
}