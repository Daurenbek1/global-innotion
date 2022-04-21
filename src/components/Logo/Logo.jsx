import classes from './logo.module.css'



const Logo = () => {
    return (
        <a className={classes.link} href="">
            <img className={classes.img} src="https://logos-download.com/wp-content/uploads/2016/06/BBC_logo.png"></img>
            <span className={classes.name}>BBC</span>
        </a>
    )
}

export default Logo