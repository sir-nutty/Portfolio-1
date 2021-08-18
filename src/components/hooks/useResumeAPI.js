import { useState, useEffect } from "react";

export default function useResumeAPI() {
  const [resume, setResume] = useState({ path: null, file: null });

  useEffect(() => {
    fetch("datastore/resume.json")
      .then((res) => res.json())
      .then((result) => {
        setResume(result);
      });
  }, []);

  return {
    resume,
  };
}
