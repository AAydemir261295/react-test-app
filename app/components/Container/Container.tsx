import { ImageLoader } from "./ImageLoader/ImageLoader";

export function Container() {
    return <div className="container">
        <div className="container__status-bar">
            <div className="container__status-bar-filler"></div>
        </div>

        <ImageLoader></ImageLoader>
    </div>;
}