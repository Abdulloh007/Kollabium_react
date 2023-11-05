import { useState } from 'react';
import '../css/subscriptions.css'
import { useEffect } from 'react';
import { getPlans } from '../../apis/plans';
import { makeOrder } from '../../apis/orders';

function Subscriptions() {
    const [plans, setPlans] = useState([])

    useEffect(() => {
        getPlans().then(res => {
            setPlans(res.data.data)
        })
    }, [])

    function makeOrderHandle(id) {
        makeOrder({ plan_id: id }).then(res => alert(res.data))
    }
    return (
        <>
            <main class="content">

                <div className="t__wrapper">
                    <div className="t_col-6 t_tarif">
                        <div className="t_tarif_content">
                            <div className="t_tc_part_secondary">
                                <button className="t_offer_btn t_orange_btn" onClick={() => makeOrderHandle(1)}>Kollabium X</button>
                                <img src="/img/offer_poster_1.png" alt="" className="t_order_poster" />
                            </div>
                            <div className="t_tc_part_primary">
                                <button className="t_offer_btn t_black_btn">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.61121 14.9686C9.61121 16.2586 10.6012 17.2986 11.8312 17.2986H14.3412C15.4112 17.2986 16.2812 16.3886 16.2812 15.2686C16.2812 14.0486 15.7512 13.6186 14.9612 13.3386L10.9312 11.9386C10.1412 11.6586 9.61121 11.2286 9.61121 10.0086C9.61121 8.88858 10.4812 7.97858 11.5512 7.97858H14.0612C15.2912 7.97858 16.2812 9.01858 16.2812 10.3086" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 6.63873V18.6387" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 22.6387C18.4622 22.6387 22.9393 18.1616 22.9393 12.6387C22.9393 7.11589 18.4622 2.63873 12.9393 2.63873C7.41648 2.63873 2.93933 7.11589 2.93933 12.6387C2.93933 18.1616 7.41648 22.6387 12.9393 22.6387Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>бесплатно / навсегда</span>
                                </button>
                                <button className="t_offer_btn t_orange_btn small">Базовый доступ</button>
                                <h4 className='t_offer_heading'>Партнерская программа</h4>
                                <ul className="t_order_list">
                                    <li>
                                        <span>Действие одного Промо Кода</span>
                                        <span>1 рег / 24 часа</span>
                                    </li>
                                    <li>
                                        <span>Партнерская программа (доступные уровни)</span>
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <span>Вознаграждения (max в месяц)</span>
                                        <span>100 $</span>
                                    </li>
                                </ul>
                                <h4 className='t_offer_heading'>Функции</h4>
                                <ul className="t_order_list">
                                    <li>
                                        <span>Основной доступ к соц сети*</span>
                                        {/* <span>1 рег / 24 часа</span> */}
                                    </li>
                                    <li>
                                        <span>«Функция поддержки»</span>
                                        {/* <span>1</span> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="t_tarif_layout">
                            <img src="/img/tbg1.png" alt="" />
                        </div>
                    </div>
                    <div className="t_col-6 t_tarif">
                        <div className="t_tarif_content">
                            <div className="t_tc_part_primary">
                                <button className="t_offer_btn t_black_btn">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.61121 14.9686C9.61121 16.2586 10.6012 17.2986 11.8312 17.2986H14.3412C15.4112 17.2986 16.2812 16.3886 16.2812 15.2686C16.2812 14.0486 15.7512 13.6186 14.9612 13.3386L10.9312 11.9386C10.1412 11.6586 9.61121 11.2286 9.61121 10.0086C9.61121 8.88858 10.4812 7.97858 11.5512 7.97858H14.0612C15.2912 7.97858 16.2812 9.01858 16.2812 10.3086" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 6.63873V18.6387" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 22.6387C18.4622 22.6387 22.9393 18.1616 22.9393 12.6387C22.9393 7.11589 18.4622 2.63873 12.9393 2.63873C7.41648 2.63873 2.93933 7.11589 2.93933 12.6387C2.93933 18.1616 7.41648 22.6387 12.9393 22.6387Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>15$/ месяц</span>
                                </button>
                                <button className="t_offer_btn t_rose_btn small">Включает все функции KollabiuM X плюс</button>
                                <h4 className='t_offer_heading'>Партнерская программа</h4>
                                <ul className="t_order_list">
                                    <li>
                                        <span>Действие одного Промо Кода</span>
                                        <span>3 рег / 72 часа</span>
                                    </li>
                                    <li>
                                        <span>Партнерская программа (доступные уровни)</span>
                                        <span>2</span>
                                    </li>
                                    <li>
                                        <span>Вознаграждения (max в месяц)</span>
                                        <span>1000 $</span>
                                    </li>
                                </ul>
                                <h4 className='t_offer_heading'>Функции</h4>
                                <div className="t_offer_list_row">
                                    <ul className="t_order_list">
                                        <li>
                                            <span>Возможность делегировать личные токены </span>
                                            {/* <span>1 рег / 24 часа</span> */}
                                        </li>
                                        <li>
                                            <span>Смена дизайна соц сети </span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Премиум стикеры и эмодзи</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Аналитика страницы</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Взаимодействия с людьми</span>
                                            {/* <span>1</span> */}
                                        </li>
                                    </ul>
                                    <ul className="t_order_list">
                                        <li>
                                            <span>Делегирование токена от партнерки</span>
                                            {/* <span>1 рег / 24 часа</span> */}
                                        </li>
                                        <li>
                                            <span>Голосование на платформе</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Настраиваемая реклама</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Размещение рекламы</span>
                                            {/* <span>1</span> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="t_tc_part_secondary">
                                <button onClick={() => makeOrderHandle(3)} className="t_offer_btn t_rose_btn">Kollabium Y</button>
                                <img src="/img/offer_poster_2.png" alt="" className="t_order_poster" />
                            </div>
                        </div>
                        <div className="t_tarif_layout">
                            <img src="/img/tbg2.png" alt="" />
                        </div>
                    </div>
                    <div className="t_col-6 t_tarif">
                        <div className="t_tarif_content">
                            <div className="t_tc_part_secondary">
                                <img src="/img/offer_poster_3.png" alt="" className="t_order_poster" />
                                <button className="t_offer_btn t_violet_btn">Kollabium Z</button>
                            </div>
                            <div className="t_tc_part_primary">
                                <button className="t_offer_btn t_violet_btn small">Включает все функции KollabiuM Y плюс</button>
                                <h4 className='t_offer_heading'>Партнерская программа</h4>
                                <ul className="t_order_list">
                                    <li>
                                        <span>Действие одного Промо Кода</span>
                                        <span>1 рег / 24 часа</span>
                                    </li>
                                    <li>
                                        <span>Партнерская программа (доступные уровни)</span>
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <span>Вознаграждения (max в месяц)</span>
                                        <span>100 $</span>
                                    </li>
                                </ul>
                                <h4 className='t_offer_heading'>Функции</h4>
                                <ul className="t_order_list">
                                    <li>
                                        <span>Основной доступ к соц сети*</span>
                                        {/* <span>1 рег / 24 часа</span> */}
                                    </li>
                                    <li>
                                        <span>«Функция поддержки»</span>
                                        {/* <span>1</span> */}
                                    </li>
                                </ul>
                                <button className="t_offer_btn t_black_btn">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.61121 14.9686C9.61121 16.2586 10.6012 17.2986 11.8312 17.2986H14.3412C15.4112 17.2986 16.2812 16.3886 16.2812 15.2686C16.2812 14.0486 15.7512 13.6186 14.9612 13.3386L10.9312 11.9386C10.1412 11.6586 9.61121 11.2286 9.61121 10.0086C9.61121 8.88858 10.4812 7.97858 11.5512 7.97858H14.0612C15.2912 7.97858 16.2812 9.01858 16.2812 10.3086" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 6.63873V18.6387" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 22.6387C18.4622 22.6387 22.9393 18.1616 22.9393 12.6387C22.9393 7.11589 18.4622 2.63873 12.9393 2.63873C7.41648 2.63873 2.93933 7.11589 2.93933 12.6387C2.93933 18.1616 7.41648 22.6387 12.9393 22.6387Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>бесплатно / навсегда</span>
                                </button>
                            </div>
                        </div>
                        <div className="t_tarif_layout">
                            <img src="/img/tbg3.png" alt="" />
                        </div>
                    </div>
                    <div className="t_col-6 t_tarif">
                        <div className="t_tarif_content">
                            <div className="t_tc_part_primary">
                                <button className="t_offer_btn t_purple_btn small">Включает все функции KollabiuM X плюс</button>
                                <h4 className='t_offer_heading'>Партнерская программа</h4>
                                <ul className="t_order_list">
                                    <li>
                                        <span>Действие одного Промо Кода</span>
                                        <span>3 рег / 72 часа</span>
                                    </li>
                                    <li>
                                        <span>Партнерская программа (доступные уровни)</span>
                                        <span>2</span>
                                    </li>
                                    <li>
                                        <span>Вознаграждения (max в месяц)</span>
                                        <span>1000 $</span>
                                    </li>
                                </ul>
                                <h4 className='t_offer_heading'>Функции</h4>
                                <div className="t_offer_list_row">
                                    <ul className="t_order_list">
                                        <li>
                                            <span>Возможность делегировать личные токены </span>
                                            {/* <span>1 рег / 24 часа</span> */}
                                        </li>
                                        <li>
                                            <span>Смена дизайна соц сети </span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Премиум стикеры и эмодзи</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Аналитика страницы</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Взаимодействия с людьми</span>
                                            {/* <span>1</span> */}
                                        </li>
                                    </ul>
                                    <ul className="t_order_list">
                                        <li>
                                            <span>Делегирование токена от партнерки</span>
                                            {/* <span>1 рег / 24 часа</span> */}
                                        </li>
                                        <li>
                                            <span>Голосование на платформе</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Настраиваемая реклама</span>
                                            {/* <span>1</span> */}
                                        </li>
                                        <li>
                                            <span>Размещение рекламы</span>
                                            {/* <span>1</span> */}
                                        </li>
                                    </ul>
                                </div>
                                <button className="t_offer_btn t_black_btn">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.61121 14.9686C9.61121 16.2586 10.6012 17.2986 11.8312 17.2986H14.3412C15.4112 17.2986 16.2812 16.3886 16.2812 15.2686C16.2812 14.0486 15.7512 13.6186 14.9612 13.3386L10.9312 11.9386C10.1412 11.6586 9.61121 11.2286 9.61121 10.0086C9.61121 8.88858 10.4812 7.97858 11.5512 7.97858H14.0612C15.2912 7.97858 16.2812 9.01858 16.2812 10.3086" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 6.63873V18.6387" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.9393 22.6387C18.4622 22.6387 22.9393 18.1616 22.9393 12.6387C22.9393 7.11589 18.4622 2.63873 12.9393 2.63873C7.41648 2.63873 2.93933 7.11589 2.93933 12.6387C2.93933 18.1616 7.41648 22.6387 12.9393 22.6387Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>60$ / месяц</span>
                                </button>
                            </div>
                            <div className="t_tc_part_secondary">
                                <img src="/img/offer_poster_4.png" alt="" className="t_order_poster" />
                                <button className="t_offer_btn t_purple_btn">Kollabium Alpha</button>
                            </div>

                        </div>
                        <div className="t_tarif_layout">
                            <img src="/img/tbg4.png" alt="" />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Subscriptions;