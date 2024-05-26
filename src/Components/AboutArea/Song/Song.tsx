import "./Song.css";
import audioSource from "../../../Assets/Audio/fade-into-you.mp3";
import { useRef } from "react";

export function Song(): JSX.Element {

    const audioRef = useRef<HTMLAudioElement>();

    function play() {
        audioRef.current.play(); 
    }

    function pause() {
        audioRef.current.pause();
    }

    function stop() {
        audioRef.current.load(); 
    }

    return (
        <div className="Song">

			<audio src={audioSource} id="myAudio" ref={audioRef} />

            <button onClick={play}>▶</button>
            <button onClick={pause}>⏸</button>
            <button onClick={stop}>⏹</button>

        </div>
    );
}
