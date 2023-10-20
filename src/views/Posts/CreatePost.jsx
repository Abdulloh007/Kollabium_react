import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { createPost, deleteAPost, getAPost, updatePost } from "../../apis/posts"
import '../css/create-post.css'

function CreatePost() {

    const navigator = useNavigate()
    const { state } = useLocation()
    const [action, setAction] = useState('')

    const [validator, setValidator] = useState({})
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [is_wysiwyg, setIsWysiwyg] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const [tags, setTags] = useState([])
    const [close_comments, setCloseComments] = useState([])
    const [hide_comments, setHideComments] = useState([])

    useEffect(() => {
        if (state?.state) {
            setAction(state.state)
            getAPost(state.id).then(res => {
                setTitle(res.data.data.title)
                setContent(res.data.data.content)
                setIsWysiwyg(res.data.data.is_wysiwyg)
            })
        }
    }, [])

    function submit() {
        createPost({
            title: title,
            content: content,
            is_wysiwyg: is_wysiwyg
        }).then(res => navigator('/'))
            .catch(error => setValidator(error.response.data.errors))
    }
    
    function submitEdit() {
        updatePost(state.id, {
            title: title,
            content: content,
            is_wysiwyg: is_wysiwyg
        }).then(res => navigator('/'))
            .catch(error => setValidator(error.response.data.errors))
    }
    
    function submitDelete() {
        deleteAPost(state.id).then(res => navigator('/'))
            .catch(error => setValidator(error.response.data.errors))
    }
    
    return (
        <>
            <main class="content">

                <div class="auth">
                    <div class="container">
                        <div class="auth__inner">
                            <div class="auth__top">
                                <h1 class="text40 font2">
                                    {action == '' ? 'Создать' : action == 'edit' ? 'Редактировать' : action == 'delete' ? 'Удалить' : ''} пост
                                </h1>
                            </div>
                            {action == ''
                                ? (
                                    <form class="auth-form">
                                        <div class="auth-form__grid">
                                            <fieldset class="fg _required">
                                                <label>Название</label>
                                                <input type="text" name="title" onInput={e => setTitle(e.target.value)} />
                                                {validator?.title ? (
                                                    <p>{validator?.title[0]}</p>
                                                ) : ''}

                                            </fieldset>
                                            <fieldset class="fg _required">
                                                <label>Контент</label>
                                                <input type="text" name="content" onInput={e => setContent(e.target.value)} />
                                                {validator?.content ? (
                                                    <p>{validator?.content[0]}</p>
                                                ) : ''}

                                            </fieldset>
                                        </div>
                                        <div class="auth-form__nav">
                                            <button type="button" onClick={submit} class="auth-form__btn m-btn m-btn-purple">
                                                <span>Продолжить</span>
                                            </button>
                                        </div>
                                    </form>
                                )
                                : action == 'edit'
                                    ? (
                                        <form class="auth-form">
                                            <div class="auth-form__grid">
                                                <fieldset class="fg _required">
                                                    <label>Название</label>
                                                    <input value={title} type="text" name="title" onInput={e => setTitle(e.target.value)} />
                                                    {validator?.title ? (
                                                        <p>{validator?.title[0]}</p>
                                                    ) : ''}

                                                </fieldset>
                                                <fieldset class="fg _required">
                                                    <label>Контент</label>
                                                    <input value={content} type="text" name="content" onInput={e => setContent(e.target.value)} />
                                                    {validator?.content ? (
                                                        <p>{validator?.content[0]}</p>
                                                    ) : ''}

                                                </fieldset>
                                            </div>
                                            <div class="auth-form__nav">
                                                <button type="button" onClick={submitEdit} class="auth-form__btn m-btn m-btn-purple">
                                                    <span>Продолжить</span>
                                                </button>
                                            </div>
                                        </form>
                                    )
                                    : action == 'delete' ?
                                        (
                                            <form class="auth-form">
                                                <div class="auth-form__nav">
                                                    <button type="button" onClick={submitDelete} class="auth-form__btn m-btn m-btn-purple">
                                                        <span>Продолжить</span>
                                                    </button>
                                                    <Link to="/" class="auth-form__btn m-btn m-btn-purple">
                                                        <span>Отмена</span>
                                                    </Link>
                                                </div>
                                            </form>
                                        )
                                        : (<></>)
                            }


                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default CreatePost