import { useEffect, useRef } from "react";
import type { Location } from "react-router";


export function StatusBar({ route }: { route: Location<any> }) {
    var barRef = useRef<HTMLDivElement>(null);


    function slideBar(route: Location<any>) {
        if (barRef.current != null) {
            switch (route.pathname) {
                case "/":
                    barRef.current.style.animation = "basePosition 0.5s ease-in";
                    barRef.current.style.animationFillMode = "forwards";
                    break;
                case "/testing/1":
                    if (route.state != null) {
                        barRef.current.style.animation = "fromSecondToFirst 0.5s ease-out";
                        barRef.current.style.animationFillMode = "forwards";
                    } else {
                        barRef.current.style.animation = "firstPosition 0.5s ease-out";
                        barRef.current.style.animationFillMode = "forwards";
                    }
                    break;
                case "/testing/2":
                    barRef.current.style.animation = "secondPosition 0.5s ease-out";
                    barRef.current.style.animationFillMode = "forwards";
                    break;
                case "/result":
                    barRef.current.style.animation = "thirdPosition 0.5s ease-out";
                    barRef.current.style.animationFillMode = "forwards";
                    break;
            }
        }
    }

    useEffect(() => {
        slideBar(route);
    })

    return <div className="container__status-bar">
        {/* <div ref={barRef}></div> */}
        <div ref={barRef} className="container__status-bar-filler"></div>
    </div>

}