import { useState, useEffect } from "react";

export default function useSocialsAPI() {
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    fetch("datastore/socials.json")
      .then((res) => res.json())
      .then((result) => {
        setSocials(result);
      });
  }, []);

  return {
    socials,
  };
}
