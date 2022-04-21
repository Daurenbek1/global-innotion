import classes from './header.module.css'
import MyButton from '../UI/mybutton/MyButton'
import Logo from '../Logo/Logo'


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div>
                <Logo/>
            </div>
            <div>
                <MyButton onClick={() => props.openModal()}>Связаться с нами</MyButton>
            </div>
        </header>
    )
}

export default Header