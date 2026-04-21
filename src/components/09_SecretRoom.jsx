import { useState } from "react";

export default function SecretRoom({ question, answer, handleAnswer }) {
  // สถานที่ที่สิ่งที่userพิมพ์มาเก็บไว

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-500 w-[90%]">
      <h1>SecretRoom</h1>
      <p>Message from outside</p>
      <span> {question ? question : "Waiting for a message....."}</span>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Typer your message here..."
      />
      <p className="text-green-300">
        Reply to the outside:
        <span className="text-yellow-300">
          {" "}
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>
      {/*  */}
    </div>
  );
}
