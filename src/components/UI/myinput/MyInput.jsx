import classes from './myinput.module.css'


const MyInput = (props) => {
    return (
        <input className={classes.myInput} type="text" {...props}/>
    )
}

export default MyInput