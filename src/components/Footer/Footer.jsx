import Logo from "../Logo/Logo"
import classes from './footer.module.css'



const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <Logo/>
            <div className={classes.linksInner}>
                {props.news.map((newsItem) => <div className={classes.linksItem}>
                                            <a className={classes.link} href={newsItem.link} target="_blank">{newsItem.name}</a>
                                        </div>)}
            </div>
        </footer>
    )
}

export default Footer