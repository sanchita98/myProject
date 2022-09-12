import React from "react";
import Container from "@mui/material/Container";
import "../NewsContent/NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsResults, newsArray, setLoadMore, loadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="img" />
          <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="img" />
        </div>

        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
