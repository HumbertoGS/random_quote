"use client";

import { useEffect, useState } from "react";

import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";

import "./styles.css";

const randomQuote = () => {
  const [data, setData] = useState(null);
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((x) => x.json())
        .then((data) => setQuotes(data?.quotes))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (quotes) changeText();
  }, [quotes]);

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

    const contentBg = document.getElementById("content");
    const tmblrBg = document.getElementById("tmblr-quote");
    const tweetBg = document.getElementById("tweet-quote");
    const newBg = document.getElementById("new-quote");

    contentBg.style.background = randomColor;
    tmblrBg.style.background = randomColor;
    tweetBg.style.background = randomColor;
    newBg.style.background = randomColor;

    document.body.style.backgroundColor = randomColor;

    const quoteClr = document.getElementById("quote-box");
    quoteClr.style.color = randomColor;
  };

  return (
    <div id="content">
      {quotes && (
        <>
          <div id="quote-box">
            <p id="text">
              <FaQuoteLeft /> {data?.quote}
            </p>
            <p id="author">- {data?.author}</p>

            <div className="content-btns">
              <div className="content-icons">
                <a
                  id="tweet-quote"
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${data?.quote}"${data?.author}`}
                >
                  <FaTwitter />
                </a>
                <a
                  id="tmblr-quote"
                  target="_blank"
                  href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes
                      &caption=${data?.author}&content=${data?.quote}
                      &canonicalUrl=https://www.tumblr.com&shareSource=tumblr_share_button
                  `}
                >
                  <FaTumblr />
                </a>
              </div>
              <button id="new-quote" onClick={changeText}>
                New quote
              </button>
            </div>
          </div>
          <div className="footer">by humber</div>
        </>
      )}
    </div>
  );
};

export default randomQuote;
