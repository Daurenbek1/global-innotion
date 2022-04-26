import NewsItem from "../../components/NewsItem/NewsItem";
import { useEffect, useState } from "react";
import classes from './news.module.css';
import NewsService from './../../API/NewsService';
import MyModal from './../../components/UI/mymodal/MyModal';
import modalWindow from './../../store/modalWindow';
import { observer } from 'mobx-react-lite';

const News = observer(() => {    
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchPosts() {
        setLoading(true);
        const news = await NewsService.getAll();
        setNews(news);
        console.log(news);
        setLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, [])
  
    return (
        <>
            {modalWindow.status && <MyModal />}
            <div className={classes.news}>
                <h1 className={classes.title}>Новости</h1>
                {loading
                    ? <h1 className={classes.loading}>Идеть загрузка...</h1>
                    : <NewsItem news={news}/>
                }
            </div>
        </>
    )
});

export default News