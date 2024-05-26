import { FC } from "react";
import "./RandomBackground.css";

export function RandomBackground(InnerComponent: FC): FC {

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    const style = {
        backgroundColor: getRandomColor()
    };

    return function (props: any) {
        return (
            <div className="RandomBackground" style={style}>
                <InnerComponent {...props} />
            </div>
        );
    };
}
