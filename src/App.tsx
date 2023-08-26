import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getImages } from "./apis/getImages";

function App() {
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bruno Morales' Coding Challenge</h1>
        <p className="App-link">Frontend - Image gallery with filters</p>
      </header>
      <div>
        <h2>Instructions:</h2>
        <p>Implement a simple web app that allows browsing the Imgur gallery</p>
        <ul>
          <li>consume the Imgur API: https://api.imgur.com/ (check documentation for the api https://apidocs.imgur.com)</li>
          <li>show gallery images in a grid of thumbnails;</li>
          <li>show image description in the thumbnail, top or bottom;</li>
          <li>allow selecting the gallery section: hot, top, user;</li>
          <li>allow including / excluding viralimages from the result set;</li>
          <li>allow specifying window and sort parameters;</li>
          <li>when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.</li>
          <li>pagination is a plus</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
