import classes from './news-item.module.css'

const NewsItem = ({newItem}) => {
    return (
        <> 
            <div className={classes.newsItem}>
                <img className={classes.img}src={newItem.imageUrl}/>
                <div className={classes.info}>
                    <h3 className={classes.title}>{newItem.title}</h3>
                    <p className={classes.descr}>{newItem.body}</p>
                </div>
            </div>
        </>
    )
}

export default NewsItem