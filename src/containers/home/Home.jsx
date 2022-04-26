import Sliders from "../../components/Slider/Slider"
import MyModal from './../../components/UI/mymodal/MyModal';
import modalWindow from './../../store/modalWindow';

import { observer } from 'mobx-react-lite';

const Home = observer(() => {
    return (
        <>
            {modalWindow.status && <MyModal />}
            <Sliders/>
        </>
        
    )
});

export default Home