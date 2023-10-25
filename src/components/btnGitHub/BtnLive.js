import './style.css';

const BtnLive = (props) => {
    return (
        <a href={props.linkLive} className="btn-outline" target='_blank' rel="noreferrer">
            {/* <img src={gitImg} alt="" /> */}
            Посмотреть
        </a>
    );
}

export default BtnLive;