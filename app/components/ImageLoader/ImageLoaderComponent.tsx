import { useRef, useState } from "react";

export function ImageLoaderComponent() {
    var descriptions = ["Дом, дерево, человек", "Несуществующее животное", "Автопортрет"];

    var items = [];

    var previewRefs = useRef([]);

    var icons = { upload: "/assets/icons/upload-icon.svg", refresh: "" }


    function onChange(e: React.ChangeEvent<HTMLInputElement>, idx: number, previewEle: HTMLImageElement) {
        var file = e.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            previewEle.src = reader.result == null ? "" : reader.result;
        };
    }


    for (let q = 0; q < 3; q++) {
        const description = descriptions[q];
        items.push(
            <li key={q} className="upload-list__item">
                <figure className="upload-list__upload-wrapper">
                    <img ref={(ele) => { previewRefs.current[q] = ele; }} className="upload-list__upload-preview" src="null" alt="" />
                    <label className="upload-list__input-label" htmlFor={`fileInput${q}`}>
                        <img src={icons.upload} className="upload-list__upload-icon" width={64} height={64} id="icon" alt={`Загрузите фотографию: ${description}`} />
                    </label>
                    <input onChange={(e) => onChange(e, q, previewRefs.current[q])} className="upload-list__upload-input" id={`fileInput${q}`} type="file" />
                    <figcaption className="upload-list__upload-description">{description}</figcaption>
                </figure>
            </li>
        )
    }



    return <div className="image-loader">
        <header className="image-loader__header"> <h1 className="image-loader__header-text">Загрузите фотографии рисунков</h1> </header>
        <span className="image-loader__info-text">Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</span>
        <form className="test" action="">
            <ul className="nostyle-list upload-list">
                {items}
                {/* <li className="upload-list__item">
                    <figure className="upload-list__upload-wrapper">
                        <label className="upload-list__input-label" htmlFor="fileInput">
                            <img ref={(ele) => { previewRefs.current[0] = ele; console.log(ele) }} src="/assets/icons/upload-icon.svg" className="upload-list__upload-icon" width={64} height={64} id="icon" alt={`Загрузите фотографию: ${descriptions[0]}`} />
                        </label>
                        <input onChange={(e) => onChange(e, 0)} className="upload-list__upload-input" id="fileInput" type="file" />
                        <figcaption className="upload-list__upload-description">{descriptions[0]}</figcaption>
                    </figure>
                </li>
                <li className="upload-list__item">
                    <figure className="upload-list__upload-wrapper">
                        <label className="upload-list__input-label" htmlFor="fileInput1">
                            <img ref={(ele) => { previewRefs.current[1] = ele; console.log(ele) }} src="/assets/icons/upload-icon.svg" className="upload-list__upload-icon" width={64} height={64} id="icon" alt={`Загрузите фотографию: ${descriptions[1]}`} />
                        </label>
                        <input onChange={(e) => onChange(e, 1)} className="upload-list__upload-input" id="fileInput1" type="file" />
                        <figcaption className="upload-list__upload-description">{descriptions[1]}</figcaption>
                    </figure>
                </li>
                <li className="upload-list__item">
                    <figure className="upload-list__upload-wrapper">
                        <label className="upload-list__input-label" htmlFor="fileInput2">
                            <img ref={(ele) => { previewRefs.current[2] = ele; console.log(ele) }} src="/assets/icons/upload-icon.svg" className="upload-list__upload-icon" width={64} height={64} id="icon" alt={`Загрузите фотографию: ${descriptions[2]}`} />
                        </label>
                        <input onChange={(e) => onChange(e, 2)} className="upload-list__upload-input" id="fileInput2" type="file" />
                        <figcaption className="upload-list__upload-description">{descriptions[2]}</figcaption>
                    </figure>
                </li> */}
            </ul>
        </form>
        <footer className="image-loader__footer">
            <span className="stage">Шаг 1/3</span>
            <button className="image-loader__footer-btn btn btn--disabled nostyle-btn">Далее</button>
        </footer>
    </div>
}