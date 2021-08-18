import React from "react";

import useResumeAPI from "../hooks/useResumeAPI";

export default function ResumeDownloadButton() {
  const { resume } = useResumeAPI();

  return (
    <div className="resume_download">
      <a className="button" href={resume.path} download={resume.file}>
        Download Resume
      </a>
    </div>
  );
}
