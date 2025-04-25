
import './App.css'
import Available from './components/AvailableSection/Available'
import Banner from './components/Banner/Banner'
import Navbar from './components/Header/Navbar'
import AvailablePlayer from './components/MainSection/AvailablePlayer'
import Selected from './components/SelectedSection/Selected'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='w-10/12 mx-auto flex justify-between'>
        <AvailablePlayer></AvailablePlayer>
        <div className='flex gap-6'>
          <Available></Available>
          <div>
            <Selected></Selected>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
