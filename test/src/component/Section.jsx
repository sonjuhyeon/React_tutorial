import React from "react";

const Section = ({ title, contents, articles }) => {
  console.log(articles);
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{contents}</p>
      <ul>
        {articles.map((article, idx) => (
          <li key={idx}>{article}</li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
