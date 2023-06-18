import { useEffect, useState } from 'react'
import React from 'react'
import './style.css'

const Main = () => {

    const[quoteInfo, setQuoteInfo] = useState({})

    useEffect(()=>{
        getQuote();

    },[])

    const getQuote=()=>{
        fetch('https://api.quotable.io/random')
            .then((response)=>{return response.json()})
            .then((data)=>{
                setQuoteInfo({
                    text: data.content,
                    author: data.author,
                });
            });
    }


  return (
    <div>
        <div id="wrapper">
                <div id="quote-box">
            
                    <div class="quote-text">
                        <i class="fa fa-quote-left"></i><span id="text">{quoteInfo.text}</span>
                    </div>

                    <div class="quote-author"><span id="author">-{quoteInfo.author}</span>
                    </div>

                    <div class="buttons">
                        <a  
                            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text"
                            class="button"
                            id="tweet-quote"
                            title="Tweet this quote!"
                            target="_top"
                        >
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a
                            class="button"
                            id="tumblr-quote"
                            title="Post this quote on tumblr!"
                            target="_blank"
                        >
                            <i class="fa fa-tumblr"></i>
                        </a>
                        <button class="button" onClick={getQuote} id="new-quote">New quote</button>
                    </div>
                </div>
            
                
        </div>
    </div>
  )
}

export default Main