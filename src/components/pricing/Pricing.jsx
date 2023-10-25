import './Pricing.css'
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="pricing__body bubble_container_min">
                    <div className="pricing__body_title">
                        <h2>цены и услуги</h2>
                    </div>
                    <div className="pricing__body_items">
                        <div className="pricing__body_items_item">
                            <div className="pricing__body_items_item_title">
                                <div className="pricing__body_items_item_title_left">
                                    <h2>лендинг пейдж</h2>
                                    <p>от 1 до 3 дней</p>
                                </div>
                                <div className="pricing__body_items_item_title_right">
                                    <h2>от <span>35 000 тг</span></h2>
                                </div>
                            </div>
                            <div className="pricing__body_items_item_text">
                                <p>Oдностраничный сайт, который создан для конкретной цели, например, продажи продукта или
                                    услуги. Они могут быть частью цифровой маркетинговой стратегии вашего бизнеса.
                                </p>
                            </div>
                            <div className="pricing__body_items_item_button">
                                <Link to="https://wa.link/qcsiv2" target="_blank" download className="btn">обсудить</Link>
                                {/* <a className="navbar__blue_button" href="https://wa.link/qcsiv2" target="_blank">обсудить</a> */}
                            </div>
                        </div>
                        <div className="pricing__body_items_item">
                            <div className="pricing__body_items_item_title">
                                <div className="pricing__body_items_item_title_left">
                                    <h2>многостраничник</h2>
                                    <p>от 5 до 14 дней</p>
                                </div>
                                <div className="pricing__body_items_item_title_right">
                                    <h2>от <span>55 000 тг</span></h2>
                                </div>
                            </div>
                            <div className="pricing__body_items_item_text">
                                <p>Сайт для компании, чтобы представить ее бизнес, продукты или услуги. Он обычно содержит
                                    более подробную информацию о компании, ее истории, миссии, целях и достижениях.
                                </p>
                            </div>
                            <div className="pricing__body_items_item_button">
                                <Link to="https://wa.link/qcsiv2" target="_blank" download className="btn">обсудить</Link>
                                {/* <a className="navbar__blue_button" target="_blank" href="https://wa.link/qcsiv2">обсудить</a> */}
                            </div>
                        </div>
                        <div className="pricing__body_items_item">
                            <div className="pricing__body_items_item_title">
                                <div className="pricing__body_items_item_title_left">
                                    <h2>сайт каталог</h2>
                                    <p>от 3 до 14 дней</p>
                                </div>
                                <div className="pricing__body_items_item_title_right">
                                    <h2>от <span>65 000 тг</span></h2>
                                </div>
                            </div>
                            <div className="pricing__body_items_item_text">
                                <p>Cайт-каталог содержит описание и фотографии продуктов, их цены, а также информацию о
                                    наличии на складе. Только каталог, без возможности заказать товар.
                                </p>
                            </div>
                            <div className="pricing__body_items_item_button">
                                <Link to="https://wa.link/qcsiv2" target="_blank" download className="btn">обсудить</Link>
                                {/* <a className="navbar__blue_button" target="_blank" href="https://wa.link/qcsiv2">обсудить</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;