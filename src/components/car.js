import st from './car-style.module.css'
import './my-style.scss';

export default function Car(){
    return (<>
    <h1>A Big car Heading</h1>
    <p className={st.bigblue}>A Big Blue Car</p>
    </>);
}