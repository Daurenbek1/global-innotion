import Slider from "react-slick";
import classes from './slider.module.css';
import { useState, useEffect } from 'react';
import NewsService from './../../API/NewsService';
import { Link } from 'react-router-dom';

const Sliders = () => {
    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1175,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [news, setNews] = useState([]);

    async function getData() {
        const photos = await NewsService.getPhotos();
        const posts = await NewsService.getPosts();
        const news = posts.map((post, index) => {
            return {
                imageUrl: photos[index].url,
                ...post
            }
        })


        setNews(news);
        console.log(news);
    }

    useEffect(() => {
        getData();
    }, []);

    const newsHtml = news.map((newsItem, index) => 
        <Link to={`news/${index}`} className={classes.newsItem}>
            <h3 className={classes.newsTitle}>{newsItem.title}</h3>
            <img className={classes.newsImg} src={newsItem.imageUrl} alt=""/>
            <p className={classes.newsDescr}>{newsItem.body}</p>
        </Link>
    );


    return (
        <div className={classes.Slider}>
            <h1 className={classes.title}>Новости</h1>
            <Slider {...settings}>
                {newsHtml}
            </Slider>
        </div>
    )
}

export default Sliders