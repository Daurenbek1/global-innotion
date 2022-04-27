import NewsItem from "../../components/NewsItem/NewsItem";
import { useEffect, useState } from "react";
import classes from './news.module.css';
import NewsService from './../../API/NewsService';
import MyModal from './../../components/UI/mymodal/MyModal';
import modalWindow from './../../store/modalWindow';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

const News = observer(() => {    
    const { newId } = useParams();

    const [newItem, setNewItem] = useState({});
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        const photos = await NewsService.getPhotos();
        const posts = await NewsService.getPosts();
        const _newItem = {
            imageUrl: photos[newId].url,
            ...posts[newId]
        }


        setNewItem(_newItem);
        console.log(_newItem);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])
  
    return (
        <>
            {modalWindow.status && <MyModal />}
            <div className={classes.news}>
                <h1 className={classes.title}>Новости</h1>
                {loading
                    ? <h1 className={classes.loading}>Идеть загрузка...</h1>
                    : <NewsItem newItem={newItem}/>
                }
            </div>
        </>
    )
});

export default News