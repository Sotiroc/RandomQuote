import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomQuote.css';

const RandomQuote = () => {
  // State to hold the quote text and author name
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a random quote from the API
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'oEz/f9/wXOl6ZC+pqjDzug==QMflsEbeiWUdNdtc' },

      });
      // The API returns an array of quotes; we take the first one
      const data = response.data[0];
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching the quote:', error);
      // Optionally, set a default message in case of error
      setQuote("Oops, couldn't fetch a new quote. Please try again.");
      setAuthor('');
    }
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-card">
      <h2 className="quote">"{quote}"</h2>
      <hr className="divider" />
      <div className="footer">
        <span className="author">{author ? `- ${author}` : ''}</span>
        <button className="refresh-btn" onClick={fetchQuote}>
          <i className="icon">🔄</i>
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
