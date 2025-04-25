import { useState } from 'react';
import './App.css';
import Available from './components/AvailableSection/Available'
import Banner from './components/Banner/Banner'
import Navbar from './components/Header/Navbar'
import AvailablePlayer from './components/MainSection/AvailablePlayer'
import Selected from './components/SelectedSection/Selected'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [credit, setCredit] = useState(0);
  const handleAddFreeCredit = () => {
    setCredit(credit + 10);
    console.log("Button clicked! Adding credit...");
    toast('Thank You For Claiming Free Credit..!!', { position: "top-center" });
  }
  return (
    <>
      <Navbar credit={credit}></Navbar>
      <Banner handleAddFreeCredit={handleAddFreeCredit}></Banner>
      <div className='w-10/12 mx-auto flex justify-between'>
        <AvailablePlayer></AvailablePlayer>
        <div className='flex gap-6'>
          <Available></Available>
          <div>
            <Selected></Selected>
          </div>
        </div>
        <div className='font-semibold text-xl'>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default App
