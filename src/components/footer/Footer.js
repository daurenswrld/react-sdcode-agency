import './style.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    {/* <ul className="social">
                        <li className="social__item"><a href="https://vk.com/daurenswrld" target="blank"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/sdcode.kz/" target='blank'><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://twitter.com/daurenswrld" target='blank'><img src={twitter} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/daurenswrld" target='blank'><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/daurenswrld/" target='blank'><img src={linkedIn} alt="Link" /></a></li>
                    </ul> */}
                    <div className="copyright">
                        <p>© 2023  sdcode.kz</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;