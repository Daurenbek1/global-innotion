import classes from './logo.module.css'
import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <NavLink to="/" className={classes.link}>
            <img className={classes.img} src="https://logos-download.com/wp-content/uploads/2016/06/BBC_logo.png"></img>
            <span className={classes.name}>BBC</span>
        </NavLink>
    )
}

export default Logo