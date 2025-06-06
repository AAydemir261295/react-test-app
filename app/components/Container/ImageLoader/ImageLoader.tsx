function Form() {

    function onchange() {

    }

    return <form action="">
        <ul className="nostyle-list">
            <li> <input type="file" /> </li>
            <li> <input type="file" /> </li>
            <li> <input type="file" /> </li>

        </ul>
    </form>;
}


export function ImageLoader() {
    return <div className="image-loader">
        <header className="image-loader__header"> <h1 className="image-loader__header-text">Загрузите фотографии рисунков</h1> </header>
        {/* !!!!! */}
        <span className="image-loader__info-text">Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</span>
        {/* !!!! */}
        {/* <Form></Form> */}
        {/* <span> Шаг 1/3 </span> */}
    </div>
}