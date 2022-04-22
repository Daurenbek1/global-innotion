import './styles/App.css'
import Header from './components/Header/Header';
import MyModal from './components/UI/mymodal/MyModal';
import { useState } from "react"
import Home from './containers/home/Home';
import News from './containers/news/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
      <BrowserRouter>
        <Header openModal={openModal}/>
        <MyModal visible={modal} setVisble={setModal} closeModal={closeModal}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<News/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
