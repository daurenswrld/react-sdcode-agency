import './About.css';

import alen from '../../img/avatars/alen.png';
import anet from '../../img/avatars/anet.png';
import dauren from '../../img/avatars/dauren.png';

const About = () => {
    return (
        <section className="about" id="about-us">
            <div className="container">
                <div className="about__body bubble_container_min">
                    <div className="about__left">
                        <h3>о нас</h3>
                        <p>Мы команда из молодых специалистов занимаемся разработкой и продвижением веб сайтов.</p>
                        <p>Как команда молодых и талантливых специалистов, мы сосредотачиваем все свои усилия на создании
                            инновационных, современных и уникальных веб-сайтов. </p>
                        <p>Доверьтесь нам, и мы сделаем ваш сайт уникальным и успешным!</p>
                        <div className="about__left_numbers">
                            <div className="about__left_numbers_item">
                                <h3>3+</h3>
                                <p>лет <br />
                                    опыта</p>
                            </div>
                            <div className="about__left_numbers_item">
                                <h3>10+</h3>
                                <p>успешных <br />
                                    проектов</p>
                            </div>
                            <div className="about__left_numbers_item">
                                <h3>
                                    &lt;/&gt;
                                </h3>
                                <p>работаем <br />
                                    с кодом</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__right ">
                        <div className="about__right_team">
                            <div className="about__right_team_item">
                                <img src={anet} alt="worker01" />
                                <h4>Таргетолог</h4>
                                <a href="https://instagram.com/satkalii_" target="_blank" rel="noreferrer"  >@satkalii_</a>
                            </div>
                            <div className="about__right_team_item">
                                <img src={dauren} alt="worker02" />
                                <h4>Full Stack dev</h4>
                                <a href="https://instagram.com/daurenswrld" target="_blank" rel="noreferrer" >@daurenswrld</a>
                            </div>
                            <div className="about__right_team_item">
                                <img src={alen} alt="worker03" />
                                <h4>Web designer</h4>
                                <a href="https://instagram.com/karrimberdiyev" target="_blank" rel="noreferrer" >@karrimberdiyev</a>
                            </div>
                        </div>
                        <p>Сотрудничество с нами - это не только гарантия высококачественных решений, но и приверженность
                            срокам и превосходному сервису поддержки. Мы убеждены, что наши успехи отражаются в успехах
                            наших клиентов, и именно поэтому мы стремимся к постоянному улучшению наших навыков и
                            возможностей.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;