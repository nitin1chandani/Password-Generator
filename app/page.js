"use client";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Image from "next/image";
import react, { useState, useCallback, useEffect } from "react";


export default function Home() {
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [ischarAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) {
      str += "0123456789";
    }
    if (ischarAllowed) {
      str += "!@#$%^&*()";
    }
    for(let i =0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length))
    }
    console.log(pass);
    setPassword(pass);
  }, [isNumberAllowed, ischarAllowed, length]);

  useEffect(()=>{
    passwordGenerator()
  },[isNumberAllowed, ischarAllowed, length])

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-md bg-gray-800 mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 shadow-md ">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>
          copy
        </button>
      </div>
      {isCopied && (
        <p className="text-green-500 items-center">Password Copied!</p>
      )}
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div className="flex">
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="number"> Numbers </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={ischarAllowed}
            onChange={(e) => setCharAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor=""> Characters</label>
        </div>
      </div>
    </div>
  );
}
