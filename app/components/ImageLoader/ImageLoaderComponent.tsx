import { useRef, useState, type RefObject } from "react";
import { Link, useNavigate } from "react-router";

export function ImageLoaderComponent() {
    let navigate = useNavigate();

    var descriptions = ["Дом, дерево, человек", "Несуществующее животное", "Автопортрет"];

    var items = [];

    var previewRefs = useRef([]);
    var uploadShareIconRefs = useRef([]);

    var icons = { upload: "/assets/icons/upload-icon.svg", refresh: "/assets/icons/refresh-icon.svg" }

    var uploadCount = 0;

    function onChange(e: React.ChangeEvent<HTMLInputElement>, idx: number, previewEle: HTMLImageElement, switchIcon: HTMLImageElement) {
        if (!e.target.files) {
            return;
        }
        var file = e.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            previewEle.src = reader.result == null ? "" : reader.result as string;
            switchIcon.src = icons.refresh;
            ++uploadCount;
        };
    }

    function refreshImg(previewEle: HTMLImageElement) {
        previewEle.src = "";
    }


    for (let q = 0; q < 3; q++) {
        const description = descriptions[q];
        items.push(
            <li key={q} className="upload-list__item">
                <figure className="upload-list__upload-wrapper">
                    <img ref={(ele) => { previewRefs.current[q] = ele; }} className="upload-list__upload-preview" src="null" alt="" />
                    <label className="upload-list__input-label" htmlFor={`fileInput${q}`}>
                        <img ref={(ele1) => { uploadShareIconRefs.current[q] = ele1 }} src={icons.upload} className="upload-list__upload-icon" width={64} height={64} alt={`Загрузите фотографию: ${description}`} onClick={() => { refreshImg(previewRefs.current[q]) }} />
                    </label>
                    <input onChange={(e) => onChange(e, q, previewRefs.current[q], uploadShareIconRefs.current[q])} className="upload-list__upload-input" id={`fileInput${q}`} type="file" />
                    <figcaption className="upload-list__upload-description">{description}</figcaption>
                </figure>
            </li>
        )
    }



    return <div className="image-loader">
        <header className="image-loader__header">
            <h1 className="image-loader__header-title">Загрузите фотографии рисунков</h1>
            <span className="image-loader__header-info-text">Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</span>
        </header>

        <form className="test" action="">
            <ul className="nostyle-list upload-list">
                {items}
            </ul>
        </form>
        <footer className="image-loader__footer">
            <span className="stage">Шаг 1/3</span>
            <button className="image-loader__footer-btn btn btn--disabled nostyle-btn" onClick={() => { if (uploadCount >= 3) { navigate("/testing/2", { state: { previous: "/testing/1" } }) } }}>Далее</button>
        </footer>
    </div>
}