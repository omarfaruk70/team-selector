import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // state for select team member
  const [select, setSelect] = useState([]) 
  // state for showing total salary
  const [salary, setSalary] = useState(0)
  const handleTeamSelect = (player) =>{
    // console.log(player.salary);
    if(select.length >= 9 ){
      toast('you have reached limited player')
      return
    }
    setSelect([...select, player])
    setSalary(salary + player.salary)
    
  
  }
  // console.log(select);

  return (
    <>
    <Header></Header>
    <main className='max-w-7xl mt-5 flex flex-col mx-auto gap-5 md:items-center items-center md:flex-col lg:flex-row lg:items-start '>
      <Players  handleTeamSelect={handleTeamSelect}></Players>
      <SelectedPlayers select={select} salary={salary} ></SelectedPlayers>
    </main>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
