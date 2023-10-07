import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="footer__inner">
                        <a href="" class="footer__logo">
                            <img src="img/logo2.svg" alt=""/>
                        </a>
                        <Link to="/terms" class="footer__conf">
                            <span class="text16 text14-mob">Политика конфиденциальности</span>
                        </Link>
                        <div class="footer__rights">
                            <span class="text16 text12-mob">All rights is reserved. 2023</span>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;