import { useEffect, useState } from "react";
import "./Clock.css";
import DayPartIcon from "../DayPartIcon/DayPartIcon";

export function Clock(): JSX.Element {

    const [time, setTime] = useState<string>();

    useEffect(() => {
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div className="Clock">
            <span>{time}</span>
            <DayPartIcon hour={new Date().getHours()} />
        </div>
    );
}
