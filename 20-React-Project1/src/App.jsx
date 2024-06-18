import './App.css'
import Lottery from './Lottery'
import { ToDoList } from './ToDoList'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import Joker from './Joker.jsx'
function App() {

  return (
    <>
      {/* <div className='w-full h-screenbg-zinc-200 dis'>Card</div> */}
      {/* <div className='w-full h-screen bg-zinc-200 dis text-black'> */}


        {/* <ToDoList/> */}
        {/* <Lottery n={3} winningSum={15}/> */}
        
        {/* <Ticket ticket={[0, 1, 2]} /> */}

        <Joker />

    </>
  )
}

export default App
