import { closeNewsDialog } from '../../store/dialogs';
import '../css/dialog.css';
import { useDispatch, useSelector } from 'react-redux';

function NewsDialog(props) {
    const active = useSelector((state) => state.dialog.newsActive)
    const dispatch = useDispatch()
    return (
        <>
            <div className={active ? "ss_wrap active": "ss_wrap"}>
                <div className="ss_overlay"></div>
                <div className="ss_content">
                    <div className="ss_backgroud">
                        <svg xmlns="http://www.w3.org/2000/svg" width="954" height="455" viewBox="0 0 954 455" fill="none">
                            <g filter="url(#filter0_d_72_87)">
                                <path d="M813 37H141C85.7715 37 41 81.7715 41 137V310C41 365.228 85.7715 410 141 410H728C748.987 410 766 392.987 766 372C766 339.139 792.639 312.5 825.5 312.5H869.4C893.48 312.5 913 292.98 913 268.9V137C913 81.7715 868.228 37 813 37Z" fill="white" shape-rendering="crispEdges" />
                                <path d="M813 36.5H141C85.4954 36.5 40.5 81.4954 40.5 137V310C40.5 365.505 85.4954 410.5 141 410.5H728C749.263 410.5 766.5 393.263 766.5 372C766.5 339.415 792.915 313 825.5 313H869.4C893.756 313 913.5 293.256 913.5 268.9V137C913.5 81.4954 868.505 36.5 813 36.5Z" stroke="url(#paint0_linear_72_87)" shape-rendering="crispEdges" />
                            </g>
                            <defs>
                                <filter id="filter0_d_72_87" x="0" y="0" width="954" height="455" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="20" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.270588 0 0 0 0 0.560784 0 0 0 0.4 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_87" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_87" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_72_87" x1="41" y1="37" x2="78.0988" y2="479.929" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F6F6F6" />
                                    <stop offset="0.166667" stop-color="#F6F6F6" stop-opacity="0" />
                                    <stop offset="0.333333" stop-color="#F6F6F6" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="#F6F6F6" />
                                    <stop offset="0.666667" stop-color="#F6F6F6" stop-opacity="0" />
                                    <stop offset="0.833333" stop-color="#F6F6F6" stop-opacity="0" />
                                    <stop offset="1" stop-color="#F6F6F6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="ss_text_wrap">
                        <div className="ss_poster">
                            <img src="/svg/pp4.svg" alt="" />
                        </div>
                        <div className="ss_text_wraper">
                            <h4>Данная функция недоступна</h4>
                            <p>Мы придумали интерактивно выводящуюся информацию, для удобности. Не все интерактивы пока работают, мы активно работает над выводом этих интерактивов.</p>
                            <p className="bold">Ожидайте новых обновлений</p>
                        </div>
                    </div>
                    <button className="ss_act_btn" onClick={() => dispatch(closeNewsDialog())}>Окей</button>
                </div>
            </div>
        </>
    )
}

export default NewsDialog;