import React, { useEffect, useState } from "react";
import { useMemo } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    // console.log(words[Math.floor(words.length * Math.random())]);
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
  //   console.log(ALL_WORDS);
}
console.log(ALL_WORDS.length, "========normal");

export function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");
  const [counter, setCounter] = useState(0);

  const filteredSentences = useMemo(() => {
    const newSentences = sentences.filter((x) => x.includes(filter));
    console.log(newSentences.length, "==========filtered");
    console.log(newSentences, "==========filtered");
    return newSentences;
  }, [filter, sentences]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      {filteredSentences.map((word) => (
        <div>{word}</div>
      ))}
      <button onClick={() => setCounter(counter + 1)}>
        Click Me!{counter}
      </button>
    </div>
  );
}
