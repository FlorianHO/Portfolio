import { useEffect } from "react";

const HomeEN = () => {
  useEffect(() => {
    document.documentElement.lang = "en-US";
  }, []);
  return <h1>EN</h1>;
};

export default HomeEN;
