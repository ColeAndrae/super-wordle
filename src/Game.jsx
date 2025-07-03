import { useEffect, useState } from "react";
import { Link } from "react-router";
import Tile from "./Tile";
import Key from "./Key";

export default function Game(props) {

  const wordLength = props.wordLength;

  const [row, setRow] = useState(0);

  const [col, setCol] = useState(0);

  function generateBoard() {

    let index = 0;
    let board = Array(wordLength).fill(0).map(tile => Array(wordLength).fill(0));

    for (let r = 0; r < wordLength; r++) {

      let row = [];

      for (let c = 0; c < wordLength; c++) {
        row[c] = <Tile id={index} key={[r, c]} size={350 / wordLength}></Tile>
        index++;
      }

      board[r] = <div key={r} className="flex w-100 space-x-1 justify-center">{row}</div>

    }

    return (board);

  }

  function isAlpha(string) {

    if (string.length != 1) return false;

    const code = Number(string.charCodeAt(0));
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

  }

  function handleKey(event) {

    let pos = col * wordLength + row;
    let currChar = (event.key ? event.key : event.target.textContent);
    let currTile = document.getElementById(pos);
    let prevTile = document.getElementById(pos - 1);

    if (currChar == '⏎') currChar = "Enter";
    if (currChar == '⌫') currChar = "Backspace";

    if (row < wordLength) {

      if (isAlpha(currChar)) {

        currTile.textContent = currChar.toLowerCase();
        setRow(r => r + 1);

      }

    } else {

      if (currChar == "Enter") {

        setRow(0);
        setCol(c => c + 1);

      }

    }

    if (currChar == "Backspace" && row > 0) {

      prevTile.textContent = "";
      setRow(r => r - 1);

    }

  }

  useEffect(() => {

    document.addEventListener("keydown", handleKey);

    return (() => {
      document.removeEventListener("keydown", handleKey)
    });

  }, [row, col]);

  return (
    <div className="flex flex-col w-100 mx-auto my-6 ">
      <h1 className="w-100 my-6 text-5xl text-center font-thin text-shadow-md/15">SUPER WORDLE</h1>
      <div className="flex flex-col space-y-1">
        {generateBoard()}
      </div>
      <div className="flex w-100 mt-12 space-x-1 justify-center">
        <Key onClick={handleKey} text="Q"></Key>
        <Key onClick={handleKey} text="W"></Key>
        <Key onClick={handleKey} text="E"></Key>
        <Key onClick={handleKey} text="R"></Key>
        <Key onClick={handleKey} text="T"></Key>
        <Key onClick={handleKey} text="Y"></Key>
        <Key onClick={handleKey} text="U"></Key>
        <Key onClick={handleKey} text="I"></Key>
        <Key onClick={handleKey} text="O"></Key>
        <Key onClick={handleKey} text="P"></Key>
      </div>
      <div className="flex w-100 mt-2 space-x-1 justify-center">
        <Key onClick={handleKey} text="A"></Key>
        <Key onClick={handleKey} text="S"></Key>
        <Key onClick={handleKey} text="D"></Key>
        <Key onClick={handleKey} text="F"></Key>
        <Key onClick={handleKey} text="G"></Key>
        <Key onClick={handleKey} text="H"></Key>
        <Key onClick={handleKey} text="J"></Key>
        <Key onClick={handleKey} text="K"></Key>
        <Key onClick={handleKey} text="L"></Key>
      </div>
      <div className="flex w-100 mt-2 space-x-1 justify-center">
        <Key onClick={handleKey} text="⏎"></Key>
        <Key onClick={handleKey} text="Z"></Key>
        <Key onClick={handleKey} text="X"></Key>
        <Key onClick={handleKey} text="C"></Key>
        <Key onClick={handleKey} text="V"></Key>
        <Key onClick={handleKey} text="B"></Key>
        <Key onClick={handleKey} text="N"></Key>
        <Key onClick={handleKey} text="M"></Key>
        <Key onClick={handleKey} text="⌫"></Key>
      </div>
      <Link className="w-80 h-10 mx-10 my-12 text-3xl text-center border-1 rounded-md text-white bg-green-400 hover:bg-green-500 cursor-grab" to="/">BACK</Link>
    </div>
  );

}


