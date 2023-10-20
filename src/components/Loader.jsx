import './css/loader.css'

import { useSelector } from 'react-redux'

function Loader () {
    const activeLoading = useSelector((state) => state.loader.active)

    return (
        <>
            <section className={activeLoading ? "loader-section show" : "loader-section"}>
                <div className="loader-container">
                    <img src="img/logo.svg" alt="" />
                </div>
            </section>
        </>
    )
}

export default Loader