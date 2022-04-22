import classes from './news-item.module.css'

const NewsItem = ({news}) => {
    return (
        <>
            {news.map((newsItem) => 
                <div className={classes.newsItem}>
                    <img className={classes.img}src={newsItem.url}/>
                    <div className={classes.info}>
                        <h3 className={classes.title}>{newsItem.title}</h3>
                        <p className={classes.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo omnis velit temporibus deserunt? Iste obcaecati delectus voluptatem exercitationem esse possimus asperiores ducimus blanditiis inventore nobis dignissimos pariatur ea tenetur hic, neque, repudiandae quo ad accusamus quae perferendis ullam ipsa consequatur nihil. Ducimus, totam iusto id nam suscipit quam veritatis voluptas.</p>
                    </div>
                </div>)}
        </>
    )
}

export default NewsItem