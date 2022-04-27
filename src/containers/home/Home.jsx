import Sliders from "../../components/Slider/Slider"
import MyModal from './../../components/UI/mymodal/MyModal';
import MainNew from './../../components/MainNew/MainNew';
import modalWindow from './../../store/modalWindow';

import classes from './home.module.css'


import { observer } from 'mobx-react-lite';
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = observer(() => {
    return (
        <>
            {modalWindow.status && <MyModal />}
            <MainNew />
            <Sliders />
            <AboutUs />
        </>
        
    )
});

export default Home