import { useRef } from "react";


export function StatusBar({ route }: { route: string }) {
    var barRef = useRef<HTMLDivElement>(null);

    function slideBar(value: string) {
        if (barRef.current != null) {
            switch (value) {
                case "/":
                    barRef.current.style.animation = "basePosition 0.5s ease-in";
                    barRef.current.style.animationFillMode = "forwards";
                    break;
                case "/testing":
                    barRef.current.style.animation = "firstPosition 0.5s ease-out";
                    barRef.current.style.animationFillMode = "forwards";
                    break;
            }
        }
    }

    slideBar(route);


    return <div className="container__status-bar">
        {/* <div ref={barRef}></div> */}
        <div ref={barRef} className="container__status-bar-filler"></div>
    </div>

}