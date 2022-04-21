import MyButton from "../UI/mybutton/MyButton"
import MyInput from "../UI/myinput/MyInput"
import classes from './form.module.css'

const Form = (props) => {
    return ( 
        <div className={classes.form}>
            <MyInput placeholder="Имя Фамилия"/>
            <MyInput placeholder="Номер телефона"/>
            <MyButton onClick={() => props.closeModal()}>Отправить</MyButton>
        </div>
    )
}

export default Form