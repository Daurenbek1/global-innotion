import classes from './mymodal.module.css'
import Form from '../../Form/Form'
import MyButton from '../mybutton/MyButton'

import { observer } from "mobx-react-lite";

import modalWindow from "../../../store/modalWindow";

const MyModal = observer(() => {
    return (
        <div className={classes.background} onClick={() => modalWindow.setStatus = !modalWindow.status}>
            <div className={classes.myModal} onClick={e => e.stopPropagation()}>
                <div style={{position:'absolute', right:'10px', top: '10px'}}>
                    <MyButton onClick={() => modalWindow.setStatus = !modalWindow.status}>Закрыть</MyButton>
                </div>
                <Form />
            </div>
        </div>
    );
});

export default MyModal