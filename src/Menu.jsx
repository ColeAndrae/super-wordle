import { useState } from "react";
import { Link } from "react-router";

export default function Menu() {

    const wordLengthInput = document.getElementById("wordLengthInput");
    const test = document.getElementById("test");

    const [route, setRoute] = useState("/5");

    function handleChange(event) {
        setRoute("/" + event.target.value);

    }

    return (
        <div className="flex flex-col w-100 mx-auto my-12">
            <h1 id="test" className="w-100 my-6 text-5xl text-center font-thin text-shadow-md/15">SUPER WORDLE</h1>
            <div className="flex my-12">
                <p className="w-40 h-10 mx-5 text-3xl">Word Size: </p>
                <input id="wordLengthInput" onInput={handleChange} className="w-40 h-10 mx-5 p-4 border-1 rounded-md" type="number"></input>
            </div>
            <Link className="w-80 h-10 mx-10 text-3xl text-center border-1 rounded-md text-white bg-green-400 hover:bg-green-500 cursor-grab" to={route}>START</Link>
        </div >
    );

}