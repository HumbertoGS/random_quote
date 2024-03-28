import { useState } from "react";

const useQuotes = (quotes) => {
  const [data, setData] = useState(null);

  const generateHexaColor = () => {
    const letrasHex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeText = () => {
    changeColor();

    const index = Math.floor(Math.random() * quotes.length);
    const randomElement = quotes[index];

    setData(randomElement);
  };

  const changeColor = () => {
    const randomColor = generateHexaColor();

    const tmblrBg = document.getElementById("tmblr-quote");
    const tweetBg = document.getElementById("tweet-quote");
    const newBg = document.getElementById("new-quote");

    tmblrBg.style.background = randomColor;
    tweetBg.style.background = randomColor;
    newBg.style.background = randomColor;

    document.body.style.backgroundColor = randomColor;

    const quoteClr = document.getElementById("quote-box");
    quoteClr.style.color = randomColor;
  };

  return {
    data,
    changeText,
  };
};

export default useQuotes;
