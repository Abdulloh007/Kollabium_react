import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAPost } from "../../apis/posts";
import { Image, Shimmer } from 'react-shimmer';
import Pt from "../../components/Post";
import '../css/home.css';

function Post() {
    const navigate = useNavigate()
    const { state } = useLocation()

    const [post, setPost] = useState({})

    useEffect(() => {
        if (!localStorage.getItem(btoa('token'))) return navigate('/auth')
        getAPost(state.id).then(res => setPost(res.data.data))
    }, [])


    return (
        <>
            <main class="content">

                <section class="feed">
                    <div class="container">
                        <div class="feed__grid">
                            <div class="feed__content">
                                {post.id
                                    ? (
                                        <Pt data={post}></Pt>

                                    )
                                    : (<><Shimmer width={'100%'} height={400} /></>)
                                }
                            </div>
                            <div class="feed__sidebar">
                                <div class="info">
                                    <div class="info__inner">
                                        <div class="info__top">
                                            <div class="text24 font2">
                                                Запросы в друзья
                                            </div>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    8
                                                </span>
                                            </div>
                                        </div>
                                        <div class="news__items">
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar6.webp" alt="" />
                                                    <div class="avatar__online"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Elena Smith
                                                    </div>
                                                    <div class="text18">
                                                        Хочет добавить вас в друзья
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 18.2174C14.97 18.2174 19 14.3628 19 9.60869C19 4.85461 14.97 1 10 1C5.03 1 1 4.85461 1 9.60869C1 11.8042 1.859 13.8066 3.273 15.327C3.705 15.7934 4.013 16.4122 3.859 17.0393C3.69037 17.7251 3.37478 18.3619 2.936 18.9019C3.28714 18.9677 3.64324 19.0005 4 19C5.282 19 6.47 18.5805 7.445 17.8657C8.255 18.0953 9.113 18.2174 10 18.2174Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Отправить сообщение</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar7.webp" alt="" />
                                                    <div class="avatar__online _red"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Evan Watson
                                                    </div>
                                                    <div class="text18">
                                                        Хочет добавить вас в друзья
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 18.2174C14.97 18.2174 19 14.3628 19 9.60869C19 4.85461 14.97 1 10 1C5.03 1 1 4.85461 1 9.60869C1 11.8042 1.859 13.8066 3.273 15.327C3.705 15.7934 4.013 16.4122 3.859 17.0393C3.69037 17.7251 3.37478 18.3619 2.936 18.9019C3.28714 18.9677 3.64324 19.0005 4 19C5.282 19 6.47 18.5805 7.445 17.8657C8.255 18.0953 9.113 18.2174 10 18.2174Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Отправить сообщение</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar8.webp" alt="" />
                                                    <div class="avatar__online"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Jessica Will
                                                    </div>
                                                    <div class="text18">
                                                        Хочет добавить вас в друзья
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 18.2174C14.97 18.2174 19 14.3628 19 9.60869C19 4.85461 14.97 1 10 1C5.03 1 1 4.85461 1 9.60869C1 11.8042 1.859 13.8066 3.273 15.327C3.705 15.7934 4.013 16.4122 3.859 17.0393C3.69037 17.7251 3.37478 18.3619 2.936 18.9019C3.28714 18.9677 3.64324 19.0005 4 19C5.282 19 6.47 18.5805 7.445 17.8657C8.255 18.0953 9.113 18.2174 10 18.2174Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Отправить сообщение</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="info__btn m-btn m-btn-white round-btn">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="info">
                                    <div class="info__inner">
                                        <div class="info__top">
                                            <div class="text24 font2">
                                                Интересные авторы
                                            </div>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    3
                                                </span>
                                            </div>
                                        </div>
                                        <div class="news__items">
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar6.webp" alt="" />
                                                    <div class="avatar__online"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Elena Smith
                                                    </div>
                                                    <div class="text18">
                                                        Design, UX/UI
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M19 7.5V10.5M19 10.5V13.5M19 10.5H22M19 10.5H16M13.75 6.375C13.75 6.81821 13.6627 7.25708 13.4931 7.66656C13.3235 8.07603 13.0749 8.44809 12.7615 8.76149C12.4481 9.07488 12.076 9.32348 11.6666 9.49309C11.2571 9.6627 10.8182 9.75 10.375 9.75C9.93179 9.75 9.49292 9.6627 9.08344 9.49309C8.67397 9.32348 8.30191 9.07488 7.98851 8.76149C7.67512 8.44809 7.42652 8.07603 7.25691 7.66656C7.0873 7.25708 7 6.81821 7 6.375C7 5.47989 7.35558 4.62145 7.98851 3.98851C8.62145 3.35558 9.47989 3 10.375 3C11.2701 3 12.1285 3.35558 12.7615 3.98851C13.3944 4.62145 13.75 5.47989 13.75 6.375ZM4 19.235V19.125C4 17.4342 4.67165 15.8127 5.86719 14.6172C7.06274 13.4216 8.68424 12.75 10.375 12.75C12.0658 12.75 13.6873 13.4216 14.8828 14.6172C16.0784 15.8127 16.75 17.4342 16.75 19.125V19.234C14.8255 20.3931 12.6206 21.0038 10.374 21C8.043 21 5.862 20.355 4 19.234V19.235Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Добавить в друзья</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar7.webp" alt="" />
                                                    <div class="avatar__online _red"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Evan Watson
                                                    </div>
                                                    <div class="text18">
                                                        Back-End Development
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M19 7.5V10.5M19 10.5V13.5M19 10.5H22M19 10.5H16M13.75 6.375C13.75 6.81821 13.6627 7.25708 13.4931 7.66656C13.3235 8.07603 13.0749 8.44809 12.7615 8.76149C12.4481 9.07488 12.076 9.32348 11.6666 9.49309C11.2571 9.6627 10.8182 9.75 10.375 9.75C9.93179 9.75 9.49292 9.6627 9.08344 9.49309C8.67397 9.32348 8.30191 9.07488 7.98851 8.76149C7.67512 8.44809 7.42652 8.07603 7.25691 7.66656C7.0873 7.25708 7 6.81821 7 6.375C7 5.47989 7.35558 4.62145 7.98851 3.98851C8.62145 3.35558 9.47989 3 10.375 3C11.2701 3 12.1285 3.35558 12.7615 3.98851C13.3944 4.62145 13.75 5.47989 13.75 6.375ZM4 19.235V19.125C4 17.4342 4.67165 15.8127 5.86719 14.6172C7.06274 13.4216 8.68424 12.75 10.375 12.75C12.0658 12.75 13.6873 13.4216 14.8828 14.6172C16.0784 15.8127 16.75 17.4342 16.75 19.125V19.234C14.8255 20.3931 12.6206 21.0038 10.374 21C8.043 21 5.862 20.355 4 19.234V19.235Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Добавить в друзья</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar8.webp" alt="" />
                                                    <div class="avatar__online"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Jessica Will
                                                    </div>
                                                    <div class="text18">
                                                        Front-End Development
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M19 7.5V10.5M19 10.5V13.5M19 10.5H22M19 10.5H16M13.75 6.375C13.75 6.81821 13.6627 7.25708 13.4931 7.66656C13.3235 8.07603 13.0749 8.44809 12.7615 8.76149C12.4481 9.07488 12.076 9.32348 11.6666 9.49309C11.2571 9.6627 10.8182 9.75 10.375 9.75C9.93179 9.75 9.49292 9.6627 9.08344 9.49309C8.67397 9.32348 8.30191 9.07488 7.98851 8.76149C7.67512 8.44809 7.42652 8.07603 7.25691 7.66656C7.0873 7.25708 7 6.81821 7 6.375C7 5.47989 7.35558 4.62145 7.98851 3.98851C8.62145 3.35558 9.47989 3 10.375 3C11.2701 3 12.1285 3.35558 12.7615 3.98851C13.3944 4.62145 13.75 5.47989 13.75 6.375ZM4 19.235V19.125C4 17.4342 4.67165 15.8127 5.86719 14.6172C7.06274 13.4216 8.68424 12.75 10.375 12.75C12.0658 12.75 13.6873 13.4216 14.8828 14.6172C16.0784 15.8127 16.75 17.4342 16.75 19.125V19.234C14.8255 20.3931 12.6206 21.0038 10.374 21C8.043 21 5.862 20.355 4 19.234V19.235Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Добавить в друзья</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="info__btn m-btn m-btn-white round-btn">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="info">
                                    <div class="info__inner">
                                        <div class="info__top">
                                            <div class="text24 font2">
                                                Контакты
                                            </div>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    8
                                                </span>
                                            </div>
                                        </div>
                                        <div class="news__items">
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar6.webp" alt="" />
                                                    <div class="avatar__online"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Elena Smith
                                                    </div>
                                                    <div class="text18">
                                                        Design, UX/UI
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 18.2174C14.97 18.2174 19 14.3628 19 9.60869C19 4.85461 14.97 1 10 1C5.03 1 1 4.85461 1 9.60869C1 11.8042 1.859 13.8066 3.273 15.327C3.705 15.7934 4.013 16.4122 3.859 17.0393C3.69037 17.7251 3.37478 18.3619 2.936 18.9019C3.28714 18.9677 3.64324 19.0005 4 19C5.282 19 6.47 18.5805 7.445 17.8657C8.255 18.0953 9.113 18.2174 10 18.2174Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Отправить сообщение</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar7.webp" alt="" />
                                                    <div class="avatar__online _red"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Evan Watson
                                                    </div>
                                                    <div class="text18">
                                                        Back-End Development
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 18.2174C14.97 18.2174 19 14.3628 19 9.60869C19 4.85461 14.97 1 10 1C5.03 1 1 4.85461 1 9.60869C1 11.8042 1.859 13.8066 3.273 15.327C3.705 15.7934 4.013 16.4122 3.859 17.0393C3.69037 17.7251 3.37478 18.3619 2.936 18.9019C3.28714 18.9677 3.64324 19.0005 4 19C5.282 19 6.47 18.5805 7.445 17.8657C8.255 18.0953 9.113 18.2174 10 18.2174Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Отправить сообщение</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="news-card news-card2">
                                                <div class="avatar">
                                                    <img src="/img/avatar8.webp" alt="" />
                                                    <div class="avatar__online"></div>
                                                </div>
                                                <div class="news-card__content">
                                                    <div class="text20 font2">
                                                        Jessica Will
                                                    </div>
                                                    <div class="text18">
                                                        Front-End Development
                                                    </div>
                                                    <div class="news-card__nav">
                                                        <button class="badge anim-btn _small _btn">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 18.2174C14.97 18.2174 19 14.3628 19 9.60869C19 4.85461 14.97 1 10 1C5.03 1 1 4.85461 1 9.60869C1 11.8042 1.859 13.8066 3.273 15.327C3.705 15.7934 4.013 16.4122 3.859 17.0393C3.69037 17.7251 3.37478 18.3619 2.936 18.9019C3.28714 18.9677 3.64324 19.0005 4 19C5.282 19 6.47 18.5805 7.445 17.8657C8.255 18.0953 9.113 18.2174 10 18.2174Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="text14">Отправить сообщение</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="info__btn m-btn m-btn-white round-btn">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    )
}

export default Post;