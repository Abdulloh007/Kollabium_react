import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authEmail } from "../../apis/users";
import { useDispatch } from 'react-redux'
import { ternOn, ternOff } from "../../store/loader";

function Auth() {
    const dispatch = useDispatch()
    
    const [validator, setValidator] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function submit() {
        dispatch(ternOn())
        authEmail(email, password).then(res => {
            localStorage.setItem(btoa('token'), btoa(res.data.token))
            dispatch(ternOff())
            window.location.href = '/'
        }).catch(err => {
            dispatch(ternOff())
            setValidator(err.response?.data?.errors)
        })
    }

    useEffect(() => {
        if (localStorage.getItem(btoa('token'))) return navigate('/')
    }, [])

    return (
        <>
            <main class="content">

                <div class="auth">
                    <div class="container">
                        <div class="auth__inner">
                            <div class="auth__top">
                                <h1 class="text40 font2">
                                    Вход
                                </h1>
                            </div>
                            <form class="auth-form">
                                <div class="auth-form__grid">
                                    <fieldset class="fg">
                                        <label>Email</label>
                                        <input name="login" type="email" required onInput={e => setEmail(e.target.value)}/>
                                        { validator?.login ? (
                                            <p>{validator?.login[0]}</p>
                                        ): ''}
                                    </fieldset>
                                    <fieldset class="fg _required _pass-field">
                                        <label>Ваш пароль</label>
                                        <input name="password" type="password" required onInput={e => setPassword(e.target.value)}/>
                                        <button type="button" class="pass-toggle">
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 1.5C8.97917 1.52083 8.05208 1.72917 7.21875 2.125C6.38542 2.5 5.64583 3 5 3.625C4.39583 4.1875 3.88542 4.77083 3.46875 5.375C3.07292 5.97917 2.76042 6.52083 2.53125 7C2.76042 7.47917 3.07292 8.02083 3.46875 8.625C3.88542 9.22917 4.39583 9.8125 5 10.375C5.64583 11 6.38542 11.5 7.21875 11.875C8.05208 12.2708 8.97917 12.4792 10 12.5C11.0208 12.4792 11.9479 12.2708 12.7812 11.875C13.6146 11.5 14.3542 11 15 10.375C15.6042 9.8125 16.1146 9.22917 16.5312 8.625C16.9271 8.02083 17.2396 7.47917 17.4688 7C17.2396 6.52083 16.9271 5.97917 16.5312 5.375C16.1146 4.77083 15.6042 4.1875 15 3.625C14.3542 3 13.6146 2.5 12.7812 2.125C11.9479 1.72917 11.0208 1.52083 10 1.5ZM3.96875 2.53125C4.71875 1.82292 5.59375 1.22917 6.59375 0.75C7.59375 0.270833 8.72917 0.0208333 10 0C11.2708 0.0208333 12.4062 0.270833 13.4062 0.75C14.4062 1.22917 15.2812 1.82292 16.0312 2.53125C16.7604 3.21875 17.3646 3.92708 17.8438 4.65625C18.3229 5.38542 18.6875 6.04167 18.9375 6.625C19.0417 6.875 19.0417 7.125 18.9375 7.375C18.6875 7.95833 18.3229 8.61458 17.8438 9.34375C17.3646 10.0729 16.7604 10.7812 16.0312 11.4688C15.2812 12.1771 14.4062 12.7708 13.4062 13.25C12.4062 13.7292 11.2708 13.9792 10 14C8.72917 13.9792 7.59375 13.7292 6.59375 13.25C5.59375 12.7708 4.71875 12.1771 3.96875 11.4688C3.23958 10.7812 2.63542 10.0729 2.15625 9.34375C1.67708 8.61458 1.32292 7.95833 1.09375 7.375C0.989583 7.125 0.989583 6.875 1.09375 6.625C1.32292 6.04167 1.67708 5.38542 2.15625 4.65625C2.63542 3.92708 3.23958 3.21875 3.96875 2.53125ZM10 9.5C10.7083 9.47917 11.3021 9.23958 11.7812 8.78125C12.2396 8.30208 12.4792 7.70833 12.5 7C12.4792 6.29167 12.2396 5.69792 11.7812 5.21875C11.3021 4.76042 10.7083 4.52083 10 4.5C9.97917 4.5 9.96875 4.5 9.96875 4.5C9.96875 4.5 9.95833 4.5 9.9375 4.5C9.97917 4.66667 10 4.83333 10 5C9.97917 5.5625 9.78125 6.03125 9.40625 6.40625C9.03125 6.78125 8.5625 6.97917 8 7C7.83333 7 7.66667 6.97917 7.5 6.9375C7.5 6.95833 7.5 6.96875 7.5 6.96875C7.5 6.96875 7.5 6.97917 7.5 7C7.52083 7.70833 7.76042 8.30208 8.21875 8.78125C8.69792 9.23958 9.29167 9.47917 10 9.5ZM10 3C10.7292 3 11.3958 3.17708 12 3.53125C12.6042 3.88542 13.0938 4.375 13.4688 5C13.8229 5.625 14 6.29167 14 7C14 7.70833 13.8229 8.375 13.4688 9C13.0938 9.625 12.6042 10.1146 12 10.4688C11.3958 10.8229 10.7292 11 10 11C9.27083 11 8.60417 10.8229 8 10.4688C7.39583 10.1146 6.90625 9.625 6.53125 9C6.17708 8.375 6 7.70833 6 7C6 6.29167 6.17708 5.625 6.53125 5C6.90625 4.375 7.39583 3.88542 8 3.53125C8.60417 3.17708 9.27083 3 10 3Z" fill="#2F2F2F" />
                                            </svg>
                                        </button>
                                        { validator?.password ? (
                                            <p>{validator?.password[0]}</p>
                                        ): ''}
                                    </fieldset>
                                    
                                </div>
                                <div class="auth-form__nav">
                                    <button type="button" onClick={submit} class="auth-form__btn m-btn m-btn-purple">
                                        <span>Продолжить</span>
                                    </button>
                                </div>
                            </form>
                            <br />
                            <p>Ещё нет акаунта? <Link to="/registration">Регистрация</Link></p>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Auth;