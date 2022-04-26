import Slider from "react-slick";
import classes from './slider.module.css';
import { useState, useEffect } from 'react';
import NewsService from './../../API/NewsService';

const Sliders = () => {
    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [news, setNews] = useState([]);

    const getNews = async () => {
        const news = await NewsService.getAll();
        setNews(news);
    }

    useEffect(() => {
        getNews();
    }, []);

    const newsHtml = news.map((oneNew) => 
        <div className={classes.newsItem}>
            <h3 className={classes.newsTitle}>{oneNew.title}</h3>
            <img className={classes.newsImg} src={oneNew.url} alt=""/>
            <p className={classes.newsDescr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt! Repellat corporis sapiente vitae reprehenderit, ipsum quisquam ratione numquam, architecto iste optio voluptate debitis omnis?</p>
        </div>
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