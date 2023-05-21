import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Cloud Palace | ${title} `;
  }, [title]);
};

export default useTitle;
