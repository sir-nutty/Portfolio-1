import React from "react";

import Introduction from "../item/introduction";
import ResumeDownloadButton from "../item/resumeDownloadButton";

import "../../css/title-animation.css";

export default function Home(props) {
  const { id } = props;

  return (
    <section className="home grid" id={id}>
      <div className="home_container">
        <Introduction />
        <ResumeDownloadButton />
      </div>
    </section>
  );
}
