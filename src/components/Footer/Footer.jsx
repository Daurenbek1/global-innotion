import Logo from "../Logo/Logo"
import classes from './footer.module.css'



const Footer = (props) => {

    const newsPortal = [
        {name: 'BBC News', link: 'https://www.bbc.com/news'},
        {name: 'Yahoo News', link: 'https://news.yahoo.com/'},
        {name: 'Google News', link: 'https://news.google.com/'},
        {name: 'New York Times', link: 'https://www.nytimes.com/'},
        {name: 'NBC News', link: 'https://www.nbcnews.com/'},
      ]

    return (
        <footer className={classes.footer}>
            <Logo/>
            <div className={classes.linksInner}>
                {newsPortal.map((newsItem) => <div className={classes.linksItem}>
                                            <a className={classes.link} href={newsItem.link} target="_blank">{newsItem.name}</a>
                                        </div>)}
            </div>
        </footer>
    )
}

export default Footer