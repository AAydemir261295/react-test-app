import { useRef, useState, type RefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { refreshImage, saveImages, updateIcon } from "~/store/reducers/imageReducer";

export function ImageLoaderComponent() {
    var icons = { upload: "/assets/icons/upload-icon.svg", refresh: "/assets/icons/refresh-icon.svg" }
    var dispatch = useDispatch();
    var navigate = useNavigate();
    var imagesSrc = useSelector(state => state.images);
    var [uploadCount, setUploadCount] = useState(imagesSrc.uploadCount);
    var [uploadIcons, setUploadIcons] = useState([icons[imagesSrc.icons[0]], icons[imagesSrc.icons[1]], icons[imagesSrc.icons[2]]]);

    console.log(uploadIcons);
    var descriptions = ["Дом, дерево, человек", "Несуществующее животное", "Автопортрет"];

    var items = [];

    var previewRefs = useRef([]);



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
        };
    }


    function uploadImages() {
        dispatch(saveImages(
            { 0: previewRefs.current[0].src, 1: previewRefs.current[1].src, 2: previewRefs.current[2].src })
        );
    }

    for (let q = 0; q < 3; q++) {
        const description = descriptions[q];
        items.push(
            <li key={q} className="upload-list__item">
                <figure className="upload-list__upload-wrapper">
                    <img ref={(ele) => { previewRefs.current[q] = ele; }} className="upload-list__upload-preview" src={imagesSrc.images[q]} alt="" />
                    <label className="upload-list__input-label" htmlFor={`fileInput${q}`}>
                        <img src={uploadIcons[q]} className="upload-list__upload-icon" width={64} height={64} alt={`Загрузите фотографию: ${description}`} />
                    </label>
                    <input onChange={(e) => onChange(e, q, previewRefs.current[q])} className="upload-list__upload-input" id={`fileInput${q}`} type="file" />
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

        <form className="test">
            <ul className="nostyle-list upload-list">
                {items}
            </ul>
        </form>
        <footer className="form-footer">
            <span className="form-footer__stage">Шаг 1/3</span>
            <button className="form-footer__btn form-footer__btn-next btn btn--next btn--disabled nostyle-btn"
                onClick={() => {
                    if (uploadCount >= 3) {
                        navigate("/testing/2", { state: { previous: "/testing/1" } });
                        uploadImages();
                    }
                }}>Далее</button>
        </footer>
    </div>
}