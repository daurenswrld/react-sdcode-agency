const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Наши контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Расположение</h2>
                        <p>Astana, Kazakhstan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="https://wa.link/qcsiv2">+7 (706) 615-57-18</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:info@sdcode.kz">info@sdcode.kz</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;