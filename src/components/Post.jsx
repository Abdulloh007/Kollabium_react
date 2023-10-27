import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Image, Shimmer } from 'react-shimmer';
import { createLike, deleteALike, getALike, getMyLike } from "../apis/likes";
import { createFavorite, deleteAFavorite, getMyFavorites } from "../apis/favorites";
import { createComment, deleteAComment, getComments, updateComment } from "../apis/comments";
import { useDispatch } from "react-redux";
import { setPost } from "../store/posts";
import { getPosts } from "../apis/posts";

function Post(props) {
    const dispatch = useDispatch()
    const [myId, setMyId] = useState(0)
    const [postComments, setPostComments] = useState([])
    const [selectedPost, setSelectedPost] = useState(0)
    const [comment, setComment] = useState('')

    useEffect(() => {
        setMyId(localStorage.getItem(btoa('id')))
    }, [])

    function dislikePost(id) {
        getMyLike('?target=post&target_id=' + id).then(res => {
            deleteALike(res.data.data[0].id).then(resL2 => {
                getPosts().then(resL3 => dispatch(setPost(resL3.data.data)))
            }).catch(error => console.log(error))
        })
            .catch(error => console.log('Some thing goes wrong!' + error.response.data.message))
        // .catch(error => deleteALike(id).then(res => setPosts(res.data.data)))
    }
    function likePost(id) {
        createLike({
            target: 'post',
            target_id: id
        }).then(res => getPosts().then(res => dispatch(setPost(res.data.data))))
            .catch(error => console.log('Some thing goes wrong!' + error.response.data.message))
        // .catch(error => deleteALike(id).then(res => setPosts(res.data.data)))
    }

    function favorPost(id) {
        createFavorite({
            target: 'post',
            target_id: id
        }).then(res => getPosts().then(res => dispatch(setPost(res.data.data))))
            .catch(error => console.log('Some thing goes wrong!' + error.response.data.message))
    }

    function disFavorPost(id) {
        getMyFavorites('?target=post&target_id=' + id).then(res => {
            deleteAFavorite(res.data.data[0].id).then(resL2 => {
                getPosts().then(resL3 => dispatch(setPost(resL3.data.data)))
            }).catch(error => console.log(error))
        })
            .catch(error => console.log('Some thing goes wrong!' + error.response.data.message))
    }

    function commentPost(id) {
        createComment({
            text: comment,
            target: 'post',
            target_id: id
        }).then(res => getPosts().then(res => {
            setComment('')
            getPostComment(selectedPost)
            dispatch(setPost(res.data.data))
        }))
            .catch(error => console.log('Some thing goes wrong!' + error.response.data.message))
    }

    function getPostComment(id) {
        if (selectedPost != id) setPostComments([])
        setSelectedPost(id)
        getComments('?target=post&target_id=' + id).then(res => setPostComments(res.data.data.reverse()))
    }

    function likeComment(id) {
        createLike({
            target: 'comment',
            target_id: id,
            weight: 1
        }).then(res => getPostComment(selectedPost))
            .catch(error => console.log('Some thing goes wrong!' + error.response.data.message))
        // .catch(error => deleteALike(id).then(res => setPosts(res.data.data)))
    }

    function unlikeComment(id) {
        deleteALike(id).then(res => getPostComment(selectedPost))
            .catch(error => console.log('Some thing goes wrong!' + error.response.data.message))
        // .catch(error => deleteALike(id).then(res => setPosts(res.data.data)))
    }

    function deleteTheComment(id) {
        deleteAComment(id).then(() => getPostComment(selectedPost))
    }

    function editThePost(e) {
        // console.dir(e.target.parentNode.previousElementSibling);
        e.target.parentNode.previousElementSibling.disabled = false
        e.target.parentNode.previousElementSibling.value = e.target.parentNode.previousElementSibling.placeholder
        e.target.parentNode.previousElementSibling.focus()
    }

    function updateTheComment(e, id) {
        if (e.key == 'Enter') updateComment(id, { text: e.target.value }).then(() => {
            e.target.disabled = true
            e.target.blur()
            getPostComment(selectedPost)
        })
    }
    return (
        <div class="feed-item">
            <div class="feed-item__top">
                <div class="feed-item__user">
                    <Link to="/user" state={{ id: props.data?.user_id }} class="avatar">
                        <img src={props.data.user_info.user_information?.profile_photo?.value ? props.data.user_info.user_information?.profile_photo?.value : props.data.user_info.avatar} alt="" />
                    </Link>
                    <div class="feed-item__user-info">
                        <div class="text20 text14-mob font2">
                            {props.data?.user_info.login}
                        </div>
                        <div class="text18 text10-mob">
                            @{props.data?.user_info.nick}
                        </div>
                    </div>
                </div>
                <div class="feed-item__action">
                    {props.data?.my_like
                        ? (
                            <button class="feed-item__btn anim-btn" onClick={() => dislikePost(props.data?.id)}>
                                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32 7.90909C32 3.54152 28.2684 0 23.6658 0C20.2258 0 17.2711 1.97903 16 4.80345C14.7289 1.97903 11.7742 0 8.33244 0C3.73333 0 0 3.54152 0 7.90909C0 20.5988 16 29 16 29C16 29 32 20.5988 32 7.90909Z" fill="#795AA0" />
                                </svg>
                                <span class="feed-item__btn-num">{props.data?.likes_count}</span>
                            </button>
                        )
                        : (
                            <button class="feed-item__btn anim-btn" onClick={() => likePost(props.data?.id)}>
                                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32 7.90909C32 3.54152 28.2684 0 23.6658 0C20.2258 0 17.2711 1.97903 16 4.80345C14.7289 1.97903 11.7742 0 8.33244 0C3.73333 0 0 3.54152 0 7.90909C0 20.5988 16 29 16 29C16 29 32 20.5988 32 7.90909Z" stroke="#795AA0" />
                                </svg>
                                <span class="feed-item__btn-num">{props.data?.likes_count}</span>
                            </button>
                        )
                    }
                    <button class="feed-item__btn anim-btn _comments" onClick={() => getPostComment(props.data?.id)}>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 39.2609C32.0444 39.2609 41 30.6951 41 20.1304C41 9.56579 32.0444 1 21 1C9.95556 1 1 9.56579 1 20.1304C1 25.0093 2.90889 29.4591 6.05111 32.8377C7.01111 33.8742 7.69556 35.2493 7.35333 36.6429C6.9786 38.1668 6.27728 39.582 5.30222 40.782C6.08254 40.9283 6.87386 41.0012 7.66667 41C10.5156 41 13.1556 40.0678 15.3222 38.4794C17.1222 38.9896 19.0289 39.2609 21 39.2609Z" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="feed-item__btn-num">{props.data?.comments_count}</span>
                    </button>
                    {props.data?.my_favorites
                        ? (
                            <button class="feed-item__btn anim-btn _saves" onClick={() => disFavorPost(props.data?.id)}>
                                <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.4403 1.68294C27.4936 1.95314 29 3.95641 29 6.29532V39L15 31.084L1 39V6.29532C1 3.95641 2.50453 1.95314 4.55973 1.68294C11.4966 0.772355 18.5034 0.772355 25.4403 1.68294Z" fill="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="feed-item__btn-num">{props.data?.favorites_count}</span>
                            </button>
                        )
                        : (
                            <button class="feed-item__btn anim-btn _saves" onClick={() => favorPost(props.data?.id)}>
                                <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.4403 1.68294C27.4936 1.95314 29 3.95641 29 6.29532V39L15 31.084L1 39V6.29532C1 3.95641 2.50453 1.95314 4.55973 1.68294C11.4966 0.772355 18.5034 0.772355 25.4403 1.68294Z" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="feed-item__btn-num">{props.data?.favorites_count}</span>
                            </button>
                        )
                    }

                </div>
            </div>


            <div class="gallery">
                <div class="gallery-item">
                    <div class="gallery-item__img">
                        <img src="img/gallery.png" alt="" />
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-item__img">
                        <img src="img/gallery2.png" alt="" />
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-item__img">
                        <img src="img/gallery3.png" alt="" />
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-item__img">
                        <img src="img/gallery4.png" alt="" />
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-item__img">
                        <img src="img/gallery5.png" alt="" />
                    </div>

                    <div class="gallery-item__count">
                        <span class="text24 bold-text">+45</span>
                    </div>
                </div>
            </div>

            <div class="feed-item__text">
                <div class="text18 text16-mob">
                    <span dangerouslySetInnerHTML={{ __html: props.data?.content.slice(0, 60) }}></span>...
                    {/* {props.data?.content.slice(0, 60)}... */}
                    <Link to='/post' state={{ id: props.data?.id }}>Ещё</Link>
                </div>
            </div>
            <div class="feed-item__tags">
                {props.data?.tags.map(item => (
                    <a href="" class="feed-item__tag"><span>#{item.slug}</span></a>
                ))}
            </div>
            <div className="feed-comments">
                <div className="fc-leave-comment">
                    <input type="text" value={comment} onInput={e => setComment(e.target.value)} placeholder="Напишите что нибудь..." />
                    <button className="badge anim-btn _small _btn" onClick={() => commentPost(props.data?.id)}>Опубликовать</button>
                </div>
                <button onClick={() => getPostComment(props.data?.id)}>Показать комментарии</button>
                {selectedPost == props.data?.id
                    ? (<div className="fc-list">
                        {postComments.map((item, idx) => item?.user_id == myId
                            ? (
                                <div key={idx} className="fcl-item">
                                    <input placeholder={item?.text} disabled onKeyDown={e => updateTheComment(e, item.id)} />
                                    <div className="fcli-action">
                                        <img className="fclia-item edit" src="/svg/pen.svg" onClick={e => editThePost(e)} />
                                        <img className="fclia-item delete" src="/svg/close.svg" onClick={() => deleteTheComment(item.id)} />
                                    </div>
                                </div>
                            )
                            : (
                                <div key={idx} className="fcl-item">
                                    <p>{item?.text}</p>
                                    <div className="fcli-action">
                                        {item?.my_like ? (
                                            <>
                                                <img className="fclia-item edit" src="/svg/likeFill.svg" onClick={() => unlikeComment(item?.id)} />
                                                {item?.likes_count}
                                            </>
                                        ) : (
                                            <>
                                                <img className="fclia-item edit" src="/svg/like.svg" onClick={() => likeComment(item?.id)} />
                                                {item?.likes_count}
                                            </>
                                        )}
                                    </div>
                                </div>
                            )
                        )
                        }
                    </div>)
                    : ('')}
            </div>
        </div >
    )
}

export default Post