import classes from './header.module.css';
import MyButton from '../UI/mybutton/MyButton';
import Logo from '../Logo/Logo';

import { observer } from "mobx-react-lite";

import modalWindow from "../../store/modalWindow";

const Header = observer((props) => {
    return (
        <header className={classes.header}>
            <div>
                <Logo/>
            </div>
            <div>
                <MyButton onClick={() => modalWindow.setStatus = !modalWindow.status}>Связаться с нами</MyButton>
            </div>
        </header>
    )
});

export default Header