import './styles/App.css'
import Header from './components/Header/Header';
import MyModal from './components/UI/mymodal/MyModal';
import { useEffect, useState } from "react"
import Home from './containers/home/Home';
import News from './containers/news/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import axios from 'axios';
import NewsService from './API/NewsService';


function App() {

  const [ modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const newsPortal = [
    {name: 'BBC News', link: 'https://www.bbc.com/news'},
    {name: 'Yahoo News', link: 'https://news.yahoo.com/'},
    {name: 'Google News', link: 'https://news.google.com/'},
    {name: 'New York Times', link: 'https://www.nytimes.com/'},
    {name: 'NBC News', link: 'https://www.nbcnews.com/'},
  ]

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false)


  async function fetchPosts() {
    setLoading(true)
    const news = await NewsService.getAll();
    setNews(news)
    setLoading(false)
  }


  useEffect(() => {
    fetchPosts();
  }, [])
  



  
  return (
    <div className="App">
      <BrowserRouter>
        <Header openModal={openModal}/>
        <MyModal visible={modal} setVisble={setModal} closeModal={closeModal}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<News news={news} loading={loading}/>}/>
        </Routes>
        <Footer news={newsPortal}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
