import { useEffect, useState } from "react";
import { deleteAFollow, getMyFollows } from "../../apis/follows";

function Followers() {

    const [myFollows, setMyFollows] = useState([])

    useEffect(() => {
        getMyFollows('?target=user').then(res => setMyFollows(res.data.data))
    }, [])

    function unsubscribeUser(e, id) {
        e.target.style.opacity = 0.5
        deleteAFollow(id).then(res => getMyFollows('?target=user').then(res => setMyFollows(res.data.data)))
    }

    return (
        <>
            <main class="content">

                <div class="profile users">
                    <div class="container">
                        <div class="profile__inner">
                            <div class="profile__sidebar">
                                <div class="users-nav">
                                    <div class="users-nav__select">
                                        <div class="users-nav__current">

                                        </div>
                                    </div>
                                    <div class="users-nav__links">
                                        <a href="" class="users-nav__link _active">
                                            <span class="text24 font2">Подписки</span>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    3
                                                </span>
                                            </div>
                                        </a>
                                        <a href="" class="users-nav__link">
                                            <span class="text24 font2">Подписчики</span>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    0
                                                </span>
                                            </div>
                                        </a>
                                        <a href="" class="users-nav__link">
                                            <span class="text24 font2">Фанаты</span>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    7
                                                </span>
                                            </div>
                                        </a>
                                        <a href="" class="users-nav__link">
                                            <span class="text24 font2">Лайкнутые</span>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    1
                                                </span>
                                            </div>
                                        </a>
                                        <a href="" class="users-nav__link">
                                            <span class="text24 font2">Заблокированы</span>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    5
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="profile__content">
                                <div class="profile__top">
                                    <h1 class="text40 font2">
                                        Подписки
                                    </h1>
                                    <button class="profile__save m-btn m-btn-purple">
                                        <span>Подписки</span>
                                    </button>
                                </div>
                                <div class="team__items">
                                    {myFollows.map((item, idx) => (
                                        <div class="member-card" key={idx}>
                                            <div class="member-card__user">
                                                <div class="avatar">
                                                    <img src="img/avatar2.webp" alt=""/>
                                                </div>
                                                <div class="member-card__user-info">
                                                    <div class="text16 text14-mob font2">
                                                        {item?.target_title}
                                                    </div>
                                                    <div class="text16 text10-mob">
                                                        @iren_lasky
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="member-card__desc">
                                                <div class="text16 text10-mob">
                                                    Подписался {Math.round((new Date() - new Date(item?.created_at)) / (1000 * 60 * 60 * 24))} дней назад
                                                </div>
                                            </div>
                                            <button onClick={(e) => unsubscribeUser(e, item?.id)} class="member-card__btn m-btn m-btn-purple">
                                                <span>Отписаться</span>
                                            </button>
                                        </div>
                                    ))}

                                    {myFollows.length == 0 ? (<p>Нет подписок!</p>) : '' }

                                    {/* <div class="member-card">
                                        <div class="member-card__user">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="member-card__user-info">
                                                <div class="text16 text14-mob font2">
                                                    Iren Lasky
                                                </div>
                                                <div class="text16 text10-mob">
                                                    @iren_lasky
                                                </div>
                                            </div>
                                        </div>
                                        <div class="member-card__desc">
                                            <div class="text16 text10-mob">
                                                Подписался 365 дней назад
                                            </div>
                                        </div>
                                        <button class="member-card__btn m-btn m-btn-purple">
                                            <span>Отписаться</span>
                                        </button>
                                    </div>

                                    <div class="member-card">
                                        <div class="member-card__user">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="member-card__user-info">
                                                <div class="text16 text14-mob font2">
                                                    Iren Lasky
                                                </div>
                                                <div class="text16 text10-mob">
                                                    @iren_lasky
                                                </div>
                                            </div>
                                        </div>
                                        <div class="member-card__desc">
                                            <div class="text16 text10-mob">
                                                Подписался 365 дней назад
                                            </div>
                                        </div>
                                        <button class="member-card__btn m-btn m-btn-purple">
                                            <span>Отписаться</span>
                                        </button>
                                    </div>

                                    <div class="member-card">
                                        <div class="member-card__user">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="member-card__user-info">
                                                <div class="text16 text14-mob font2">
                                                    Iren Lasky
                                                </div>
                                                <div class="text16 text10-mob">
                                                    @iren_lasky
                                                </div>
                                            </div>
                                        </div>
                                        <div class="member-card__desc">
                                            <div class="text16 text10-mob">
                                                Подписался 365 дней назад
                                            </div>
                                        </div>
                                        <button class="member-card__btn m-btn m-btn-purple">
                                            <span>Отписаться</span>
                                        </button>
                                    </div>

                                    <div class="member-card">
                                        <div class="member-card__user">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="member-card__user-info">
                                                <div class="text16 text14-mob font2">
                                                    Iren Lasky
                                                </div>
                                                <div class="text16 text10-mob">
                                                    @iren_lasky
                                                </div>
                                            </div>
                                        </div>
                                        <div class="member-card__desc">
                                            <div class="text16 text10-mob">
                                                Подписался 365 дней назад
                                            </div>
                                        </div>
                                        <button class="member-card__btn m-btn m-btn-purple">
                                            <span>Отписаться</span>
                                        </button>
                                    </div>

                                    <div class="member-card">
                                        <div class="member-card__user">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="member-card__user-info">
                                                <div class="text16 text14-mob font2">
                                                    Iren Lasky
                                                </div>
                                                <div class="text16 text10-mob">
                                                    @iren_lasky
                                                </div>
                                            </div>
                                        </div>
                                        <div class="member-card__desc">
                                            <div class="text16 text10-mob">
                                                Подписался 365 дней назад
                                            </div>
                                        </div>
                                        <button class="member-card__btn m-btn m-btn-purple">
                                            <span>Отписаться</span>
                                        </button>
                                    </div> */}

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Followers;