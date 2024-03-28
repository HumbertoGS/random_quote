"use client";

import { useEffect } from "react";

import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";

import useFetch from "./customHooks/useFetch";
import useQuotes from "./customHooks/useQuotes";

import "./style/styles.css";

const RandomQuote = () => {
  const { quotes } = useFetch();
  const { data, changeText } = useQuotes(quotes);

  useEffect(() => {
    if (quotes) changeText();
  }, [quotes]);

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
          <div className="footer">by Humberto</div>
        </>
      )}
    </div>
  );
};

export default RandomQuote;
