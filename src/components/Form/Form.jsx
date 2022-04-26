import MyButton from "../UI/mybutton/MyButton"
import MyInput from "../UI/myinput/MyInput"
import classes from './form.module.css'

import { observer } from "mobx-react-lite";

import modalWindow from "../../store/modalWindow";

const Form = observer(() => {
    return ( 
        <div className={classes.form}>
            <MyInput placeholder="Имя Фамилия"/>
            <MyInput placeholder="Номер телефона"/>
            <MyButton onClick={() => modalWindow.setStatus = !modalWindow.status}>Отправить</MyButton>
        </div>
    )
});

export default Form