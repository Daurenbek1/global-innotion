import NewsItem from "../../components/NewsItem/NewsItem"
import classes from './news.module.css'

const News = ({news, loading}) => {    
    
    
    return (
        <div className={classes.news}>
            <h1 className={classes.title}>Новости</h1>
            {loading
                ? <h1 className={classes.loading}>Идеть загрузка...</h1>
                : <NewsItem news={news}/>
            }
        </div>
    )
}

export default News