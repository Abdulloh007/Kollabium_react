import { useEffect, useState } from 'react';
import { deleteME, getMe, updatePInfo, updatePersonalInformationil, uploadFile } from '../../apis/users';
import '../css/settings.css'
import { useDispatch } from 'react-redux';
import { setAvatar, setName } from "../../store/sidebar";
import { Image, Shimmer } from 'react-shimmer';
import { Link } from 'react-router-dom';

function Settings() {
    const dispatch = useDispatch()
    // const [me, setMe] = useState({})
    const [nick, setNick] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [language, setLanguage] = useState('')
    const [birthday, setBirthday] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const [isOpen, setOpenSate] = useState(false)
    const [isloaded, setIsLoaded] = useState(false)
    const [modalStep, setModalStep] = useState(1)
    const [previewedAvatar, setPreviewedAvatar] = useState('')

    useEffect(() => {
        getMe().then(res => {
            // setMe(res.data.data)
            setNick(res.data.data?.nick)
            setPhone(res.data.data?.phone)
            setCity(res.data.data.user_information?.city?.value)
            setBirthday(res.data.data.user_information?.birthday?.value)
            setLanguage(res.data.data.user_information?.my_languages?.value)
            setAboutMe(res.data.data.user_information?.about_me?.value)
        })
    }, [])

    function deleteMySelf() {
        if (window.confirm('Вы удаляете свой акаунт!')) {
            deleteME().then(res => {
                localStorage.clear()
                window.location.href = '/'
            })
        }
    }

    function updateAboutMe() {
        const id = localStorage.getItem(btoa('id'))
        updatePInfo(JSON.stringify({
            nick: nick,
            phone: phone
        })).then(() => {
            updatePersonalInformationil(JSON.stringify({
                records: [
                    {
                        system_name: "city",
                        user_id: parseInt(id),
                        value: city == '' ? 'Не указано' : city
                    },
                    {
                        system_name: "birthday",
                        user_id: parseInt(id),
                        value: birthday == '' ? 'Не указано' : birthday
                    },
                    {
                        system_name: "my_languages",
                        user_id: parseInt(id),
                        value: language == '' ? 'Не указано' : language
                    },
                    {
                        system_name: "about_me",
                        user_id: parseInt(id),
                        value: aboutMe == '' ? 'Не указано' : aboutMe
                    },
                ]
            })).then(res => {
                window.location.href = '/feed'
            })
        })
    }

    // Modal 
    function openModal() {
        setOpenSate(true)
    }

    function closeModal() {
        setOpenSate(false)
        setAvatar('')
        setModalStep(1)
        setIsLoaded(false)

    }

    function previewAvatar(e) {
        if (e.target.files.length > 0) {
            setModalStep(2)
            uploadFile(e.target.files[0]).then(res => {
                setIsLoaded(true)
                setPreviewedAvatar('https://dev.backend.kollabium.com' + res.data.data.asset)
            })
        }

    }

    function activeInp() {
        const avinp = document.querySelector('#avatar_uploader')
        avinp.click()
    }

    function saveAvtar() {
        const id = localStorage.getItem(btoa('id'))
        updatePersonalInformationil(JSON.stringify({
            records: [
                {
                    system_name: "profile_photo",
                    user_id: parseInt(id),
                    value: previewedAvatar
                }
            ]
        })).then(res => {
            getMe().then(res => {
                localStorage.setItem(btoa('avatar'), btoa(res.data.data.user_information?.profile_photo?.value ? res.data.data.user_information?.profile_photo?.value : res.data.data.avatar))
                dispatch(setAvatar(res.data.data.user_information?.profile_photo?.value ? res.data.data.user_information?.profile_photo?.value : res.data.data.avatar))
            })
            closeModal()
        })
    }
    return (
        <>
            <main class="content">

                <div class="profile">
                    <div class="container">
                        <div class="profile__inner">
                            <div class="profile__sidebar">
                                <div class="profile-nav">
                                    <a href="" class="profile-nav__link">
                                        <span>Профиль</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="" class="profile-nav__link">
                                        <span>Уведомления</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <Link to="/subscriptions" class="profile-nav__link">
                                        <span>Способ оплаты</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                    <a href="" class="profile-nav__link">
                                        <span>Безопасность</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="" class="profile-nav__link">
                                        <span>Настройки</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="profile__content">
                                <div class="profile__mob-title">
                                    <span class="text24 font2">Профиль</span>
                                </div>
                                <div class="profile__top">
                                    <h1 class="text40 font2">
                                        Заполните информацию
                                    </h1>
                                    <div className="profile__actions">
                                        <button onClick={() => updateAboutMe()} class="profile__save m-btn m-btn-purple">
                                            <span>Сохранить</span>
                                        </button>
                                        <button onClick={() => deleteMySelf()} class="profile__save delete m-btn m-btn-purple">
                                            <span>Удалить</span>
                                        </button>
                                    </div>
                                </div>
                                <form class="profile-form">
                                    <div class="profile-form__grid">
                                        <fieldset class="fg">
                                            <label>Никнейм</label>
                                            <input value={nick} onInput={e => setNick(e.target.value)} type="text" />
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Номер телефона</label>
                                            <input value={phone} onInput={e => setPhone(e.target.value)} type="text" />
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Город</label>
                                            <input value={city} onInput={e => setCity(e.target.value)} type="text" />
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Язык</label>
                                            <input value={language} onInput={e => setLanguage(e.target.value)} type="text" />
                                        </fieldset>
                                        <fieldset class="fg date-field">
                                            <label>Дата рождения</label>
                                            <input class="date-input" max="2012-01-01" type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
                                            <svg class="date-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>О себе</label>
                                            <input value={aboutMe} onInput={e => setAboutMe(e.target.value)} type="text" />
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Загрузка аватарки</label>
                                            <button type='button' onClick={() => openModal()} class=" m-btn m-btn-purple">
                                                <span>Загрузить</span>
                                            </button>
                                        </fieldset>
                                    </div>
                                    <div class="auth-form__nav">

                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>

                <div className={isOpen ? "dialog active" : "dialog"}>
                    <div class="modal__dialog">
                        {modalStep == 1 ? (
                            <div class="modal__inner">
                                <div class="img-input">
                                    <input id="avatar_uploader" type="file" accept="image/*" onChange={e => previewAvatar(e)} />
                                    <img src="img/user3.png" alt="" />
                                    <span class="img-input__mark">
                                        ?
                                    </span>
                                </div>
                                <div class="modal__info">
                                    <div class="text32 font2">
                                        Загрузите ваш аватар
                                    </div>
                                    {/* <div class="text16 lh150">
                                        Ваш задний фон на фотографии будет удалён. Наши нейросети сделают это быстрее, чем вы в Фотошопе, поэтому можете не волноваться.
                                    </div> */}
                                    <div class="modal__nav">
                                        <button onClick={() => activeInp()} class="modal__btn m-btn m-btn-purple">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 17V19.25C3 19.8467 3.23705 20.419 3.65901 20.841C4.08097 21.2629 4.65326 21.5 5.25 21.5H18.75C19.3467 21.5 19.919 21.2629 20.341 20.841C20.7629 20.419 21 19.8467 21 19.25V17M16.5 12.5L12 17M12 17L7.5 12.5M12 17V3.5" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>Загрузить аватар</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ) : modalStep == 2 ? (
                            <div class="modal__inner">
                                <div class="img-input">
                                    {previewedAvatar != ''
                                        ? (
                                            <img src={previewedAvatar} alt="" />
                                        )
                                        : (
                                            <Shimmer width={'100%'} height={400} />
                                        )
                                    }
                                </div>
                                <div class="modal__info _big">
                                    <div class="text32 font2">
                                        Вы хотите сохранить эту фотографию как аватар профиля?
                                    </div>
                                    <div class="text16 lh150">
                                        Мы как и обещали обработали вашу фотографию и убрали задний, даже немного её улучшили в качестве, чтобы вы не могли себя узнать. Сохранем
                                    </div>
                                    <div class="modal__nav">
                                        <button disabled={!isloaded} class="modal__btn m-btn m-btn-purple" onClick={() => saveAvtar()}>
                                            <span>Сохранить</span>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5 12.75L11.75 15L15.5 9.75M21.5 12C21.5 13.1819 21.2672 14.3522 20.8149 15.4442C20.3626 16.5361 19.6997 17.5282 18.864 18.364C18.0282 19.1997 17.0361 19.8626 15.9442 20.3149C14.8522 20.7672 13.6819 21 12.5 21C11.3181 21 10.1478 20.7672 9.05585 20.3149C7.96392 19.8626 6.97177 19.1997 6.13604 18.364C5.30031 17.5282 4.63738 16.5361 4.18508 15.4442C3.73279 14.3522 3.5 13.1819 3.5 12C3.5 9.61305 4.44821 7.32387 6.13604 5.63604C7.82387 3.94821 10.1131 3 12.5 3C14.8869 3 17.1761 3.94821 18.864 5.63604C20.5518 7.32387 21.5 9.61305 21.5 12Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <button class="modal__btn m-btn m-btn-purple" onClick={() => closeModal()}>
                                            <span>Отменить</span>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.25 9.75L14.75 14.25M14.75 9.75L10.25 14.25M21.5 12C21.5 13.1819 21.2672 14.3522 20.8149 15.4442C20.3626 16.5361 19.6997 17.5282 18.864 18.364C18.0282 19.1997 17.0361 19.8626 15.9442 20.3149C14.8522 20.7672 13.6819 21 12.5 21C11.3181 21 10.1478 20.7672 9.05585 20.3149C7.96392 19.8626 6.97177 19.1997 6.13604 18.364C5.30031 17.5282 4.63738 16.5361 4.18508 15.4442C3.73279 14.3522 3.5 13.1819 3.5 12C3.5 9.61305 4.44821 7.32387 6.13604 5.63604C7.82387 3.94821 10.1131 3 12.5 3C14.8869 3 17.1761 3.94821 18.864 5.63604C20.5518 7.32387 21.5 9.61305 21.5 12Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ) : (<></>)}
                    </div>
                    <div className="dialog-overlay" onClick={() => closeModal()}></div>
                </div>
            </main>
        </>
    )
}

export default Settings;