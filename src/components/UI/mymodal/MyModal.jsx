import classes from './mymodal.module.css'
import Form from '../../Form/Form'
import MyButton from '../mybutton/MyButton'


const MyModal = ({visible, setVisible, ...props}) => {
    

    const rootClasses = [classes.myModal]
    if(visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => props.closeModal()}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                <div style={{position:'absolute', right:'10px', top: '10px'}}>
                    <MyButton onClick={() => props.closeModal()}>Закрыть</MyButton>
                </div>
                <Form closeModal={props.closeModal}></Form>
            </div>
        </div>
    )
}

export default MyModal