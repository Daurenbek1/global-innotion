import './styles/App.css'
import Header from './components/Header/Header';
import MyModal from './components/UI/mymodal/MyModal';
import { useState } from "react"
import MyButton from './components/UI/mybutton/MyButton';


function App() {

  const [ modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  
  return (
    <div className="App">
      <Header openModal={openModal}/>
      <MyModal visible={modal} setVisble={setModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
