import React from "react";
import "./style.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/c/c8/Very_Black_screen.jpg")`,
        backgroundPostion: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">Movie Name</h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">
          {truncate(
            `This is a test Banner DescriptionThis is a test Banner DescriptionThis
          is a test Banner DescriptionThis is a test Banner DescriptionThis is a
          test Banner DescriptionThis is a test Banner DescriptionThis is a test
          Banner DescriptionThis is a test Banner DescriptionThis is a test
          Banner DescriptionThis is a test Banner DescriptionThis is a test
          Banner DescriptionThis is a test Banner Description`,
            150
          )}
        </h1>
      </div>
      <div className="bannerFadeButton" />
    </header>
  );
}

export default Banner;
