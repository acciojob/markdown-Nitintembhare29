import React, { useState, useEffect } from 'react';
import marked from 'marked';
import './../styles/App.css';


const App = () => {
    const [markdownText, setMarkdownText] = useState('# Start typing your markdown here...');

    // Function to convert the markdown text to HTML
    const convertToHtml = () => {
      return marked(markdownText);
    };
  
    // Use useEffect to update the output when markdownText changes
    useEffect(() => {
      document.getElementById('output').innerHTML = convertToHtml();
    }, [markdownText]);
  
    // Handle changes in the textarea
    const handleInputChange = (e) => {
      setMarkdownText(e.target.value);
    };
  
    return (
      <div className="markdown-app">
        <div className="markdown-input">
          <h2>Markdown Input</h2>
          <textarea value={markdownText} onChange={handleInputChange}></textarea>
        </div>
        <div className="markdown-output">
          <h2>Markdown Output</h2>
          <div id="output"></div>
        </div>
      </div>
    );
}

export default App
