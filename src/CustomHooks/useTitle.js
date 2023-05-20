import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Cloud Palace`;
  }, [title]);
};

export default useTitle;
