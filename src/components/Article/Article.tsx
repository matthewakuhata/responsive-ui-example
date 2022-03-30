import React from "react";
import "./article.css";

type ArticleProps = {
  imgUrl: string;
  date: string;
  text: string;
};
const Article = ({ imgUrl, date, text }: ArticleProps) => {
  return (
    <div className="blog-container_article">
      <div className="blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
