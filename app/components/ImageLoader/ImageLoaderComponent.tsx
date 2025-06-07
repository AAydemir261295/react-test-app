export function ImageLoaderComponent() {

    var descriptions = ["Дом, дерево, человек", "Несуществующее животное", "Автопортрет"];

    var items = [];

    for (let q = 0; q < descriptions.length; q++) {
        const description = descriptions[q];
        items.push(
            <li className="upload-list__item">
                <figure className="upload-list__upload-wrapper">
                    <label className="upload-list__input-label" htmlFor="fileInput">
                        <img src="/assets/icons/upload-icon.svg" className="upload-list__upload-icon" width={64} height={64} id="icon" alt={`Загрузите фотографию: ${description}`} />
                    </label>
                    <input className="upload-list__upload-input" id="fileInput" type="file" />
                    <figcaption className="upload-list__upload-description">{description}</figcaption>
                </figure>
            </li>
        )

    }

    return <div className="image-loader">
        <header className="image-loader__header"> <h1 className="image-loader__header-text">Загрузите фотографии рисунков</h1> </header>
        <span className="image-loader__info-text">Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</span>
        <form action="">
            <ul className="nostyle-list upload-list">
                {items}
            </ul>
        </form>
        {/* <span> Шаг 1/3 </span> */}
    </div>
}