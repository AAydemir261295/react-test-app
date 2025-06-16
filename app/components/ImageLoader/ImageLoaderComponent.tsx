import { useRef, useState, type RefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { refreshImage, saveImages, updateIcon } from "~/store/reducers/imageReducer";

const icons = {
    upload: "/assets/icons/upload-icon.svg", refresh: "/assets/icons/refresh-icon.svg"
}

export function ImageLoaderComponent() {
    var dispatch = useDispatch();
    var navigate = useNavigate();
    var imagesSrc = useSelector(state => state.images);
    var [uploadCount, setUploadCount] = useState(imagesSrc.uploadCount);
    var [uploadIcons, setUploadIcons] = useState([icons[imagesSrc.icons[0]], icons[imagesSrc.icons[1]], icons[imagesSrc.icons[2]]]);
    var [nextBtnRefCss, setNextBtnRefCss] = useState("image-loader__btn-next btn btn--next btn--disabled nostyle-btn");

    var descriptions = ["Дом, дерево, человек", "Несуществующее животное", "Автопортрет"];

    var items = [];

    var previewRefs = useRef([]);


    function activateButton() {
        if (uploadCount >= 2) {
            setNextBtnRefCss(nextBtnRefCss + " btn--active")
        }
    }


    function onChange(e: React.ChangeEvent<HTMLInputElement>, idx: number, previewEle: HTMLImageElement) {
        if (!e.target.files) {
            return;
        }
        var file = e.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            previewEle.src = reader.result == null ? "" : reader.result as string;
            let update: { [t: number]: string } = {};
            update[idx] = "refresh";
            const t = uploadIcons.map((v, i) => i == idx ? icons.refresh : v);
            setUploadIcons(t);
            dispatch(updateIcon(update))
            setUploadCount(uploadCount + 1);
            activateButton();
        };
    }


    function uploadImages(formData: FormData) {
        dispatch(saveImages(
            { 0: previewRefs.current[0].src, 1: previewRefs.current[1].src, 2: previewRefs.current[2].src })
        );
        navigate("/testing/2", { state: { previous: "/testing/1" } });
    }

    for (let q = 0; q < 3; q++) {
        const description = descriptions[q];
        items.push(
            <li key={q} className="upload-list__item">

                <figure className="upload-list__upload-wrapper">

                    <div className="upload-list__preview-fit">
                        <img ref={(ele) => { previewRefs.current[q] = ele; }}
                            className="upload-list__upload-preview"
                            src={imagesSrc.images[q]} alt="" />
                    </div>

                    <label className="upload-list__input-label" htmlFor={`fileInput${q}`}>
                        <img src={uploadIcons[q]}
                            className="upload-list__upload-icon"

                            alt={`Загрузите фотографию: ${description}`} />
                    </label>


                    <input onChange={(e) => onChange(e, q, previewRefs.current[q])}
                        className="upload-list__upload-input"
                        id={`fileInput${q}`} name={`img-upload-${q}`} type="file" />


                    <figcaption className="upload-list__upload-description">{description}</figcaption>

                </figure>

            </li>
        )
    }


    return <div className="image-loader">
        <header className="image-loader__header">
            <h1 className="image-loader__header-title">Загрузите фотографии рисунков</h1>
            <div className="image-loader__header-info-container">
                <img className="image-loader__header-info-icon" alt="" />
                <p className="image-loader__header-info-text">
                    Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб
                </p>
            </div>
        </header>

        <form action={uploadImages} className="image-loader__form">
            <ul className="nostyle-list upload-list">
                {items}
            </ul>
            <div className="image-loader__btn-wrapp">
                <button className={nextBtnRefCss} type="submit">Далее</button>
            </div>
        </form>
        <span className="image-loader__stage stage">Шаг 1/3</span>
    </div>
}