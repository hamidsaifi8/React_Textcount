import React, { useState } from "react";
import "./textArea.css";

const TextArea = () => {
  const [newText, setNewText] = useState("");
  const handleuppercase = () => {
    let newWord = newText.toUpperCase();
    setNewText(newWord);
  };

  const handlelowercase = () => {
    let newWord = newText.toLowerCase();
    setNewText(newWord);
  };

  const handlewordcount = () => {
    if (newText.length === 0) {
      return 0;
    }
    let newWord = newText.split(" ").length;
    return newWord;
  };

  //   const handlecopy = () => {
  //     navigator.clipboard.writeText(newText);
  //     alert("Text Copied to Clipboard");
  //   };
  // const handleExtraSpaces = () => {
  // let newWord = newText.split(/[ ]+/);
  // setNewText(newWord.join(" "));
  // };

  const handleReset = () => {
    setNewText("");
  };
  const handlechange = (e) => {
    setNewText(e.target.value);
  };

  return (
    <div className="Container font-serif bg-gray-400 h-screen flex items-center justify-center px-4">
      <div className="w-full p-4 px-12 rounded-lg shadow-md mb-4 bg-gray-600">
        <label
          htmlFor="textarea"
          className="block mb-3 text-lg font-bold text-neutral-800 dark:text-white "
        >
          Enter Text Here
        </label>
        <textarea
          name="message"
          id="message"
          className="block border bg-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-44 p-2.5 font-serif "
          rows="4"
          cols="50"
          placeholder="Type Here..."
          value={newText}
          onChange={handlechange}
        ></textarea>
        <div className="count">
          <span className="text-sm mt-2 text-neutral-800">
            Word Count: {handlewordcount()}
          </span>

          <span className="text-sm mt-2 ml-2 text-neutral-800">
            Character Count: {newText.length}
          </span>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded mt-2"
          onClick={handleuppercase}
        >
          To Upper Case
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded mt-2 ml-2"
          onClick={handlelowercase}
        >
          To Lower Case
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded mt-2 ml-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TextArea;
