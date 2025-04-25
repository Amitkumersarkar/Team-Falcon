import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner'
import Navbar from './components/Header/Navbar'
import AvailablePlayer from './components/MainSection/AvailablePlayer'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  // state management and props drilling
  const [credit, setCredit] = useState(0);
  const handleAddFreeCredit = () => {
    setCredit(credit + 10);
    console.log("Button clicked! Adding credit...");
    toast('Thank You For Claiming Free Credit..!!', {
      position: "top-center", style: {
        backgroundColor: "skyblue",
        color: "black",
      }
    });

    // using conditional rendering
    // const [isActive, setIsActive] = useState({
    //   available: true,
    //   status: "active"
    // })
    // declaring event handler
    // const handleIsActive = (status) => {
    // condition apply
    //   if (status == "available") {
    //     setIsActive({
    //       available: true,
    //       status: "available"
    //     })
    //   }
    //   else {
    //     setIsActive({
    //       available: false,
    //       status: "selected"
    //     })
    //   }
    // }
  }
  return (
    <>
      <Navbar credit={credit}></Navbar>
      <Banner handleAddFreeCredit={handleAddFreeCredit}></Banner>
      <AvailablePlayer ></AvailablePlayer>
      <div className='font-semibold text-xl'>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
