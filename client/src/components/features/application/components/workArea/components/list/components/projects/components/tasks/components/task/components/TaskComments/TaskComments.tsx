import React from "react";
import { Task } from "../../Task";

const Description = ({ assignee, creationDate }: Task) => {
  const today = new Date().getDate();
  console.log("Description -> today", today);

  const createdAt = new Date("1995-12-17T03:24:00").getDate();
  console.log("Description -> createdAt", createdAt);

  const daysEllapsed = today - createdAt;

  return (
    <div className=".container-fluid">
      <div className="row align-items-center pt-2 pl-2 pr-2 pb-4 border border-dark">
        <img
          className="mr-2"
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          src="https://cangeo-media-library.s3.amazonaws.com/s3fs-public/styles/web_article_slider_image/public/images/web_articles/article_images/3120/eastern_chipmunk.jpg?itok=vpESnz24"
        />
        <p className="h5 mb-0 mr-2">{assignee} created this task</p>
        <small className="text-muted">{daysEllapsed} days ago</small>
      </div>
      <div className="row align-items-center p-3 pl-5 border border-dark">
        <small className="text-muted mr-3">Collaborators</small>
        <img
          className="mr-1"
          style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          src="https://cangeo-media-library.s3.amazonaws.com/s3fs-public/styles/web_article_slider_image/public/images/web_articles/article_images/3120/eastern_chipmunk.jpg?itok=vpESnz24"
        />
        <img
          className="mr-1"
          style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          src="https://cangeo-media-library.s3.amazonaws.com/s3fs-public/styles/web_article_slider_image/public/images/web_articles/article_images/3120/eastern_chipmunk.jpg?itok=vpESnz24"
        />
        <div
          style={{ width: "25px", height: "25px" }}
          className="border border-dark rounded-circle  d-flex align-items-center justify-content-center"
        >
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default Description;
