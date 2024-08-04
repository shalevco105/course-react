import { useEffect } from "react";
import { TestAuth } from "../TestAuth/TestAuth";
import "./Home.css";
import { useTitle } from "../../../Utils/UseTitle";
import { Vat } from "../Vat/Vat";
import { chatGptService } from "../../../Services/ChatGptService";

export function Home(): JSX.Element {

    useTitle("Shalev's App Home");

    useEffect(()=>{

        // chatGptService.chat("Tell me a programming joke")
        //     .then(completion => console.log(completion))
        //     .catch(err => console.log(err));

    }, []);

    return (
        <div className="Home">
            <TestAuth />

            <Vat />

        </div>
    );
}
