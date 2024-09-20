import { useEffect, useState } from "react";
const useMethodGet = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const [data1, setData1] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json1) => setData1(json1));
  }, []);

  return { data, data1 };
};

export default useMethodGet;
