import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useSearchParamsHook from "@hooks/useSearchParams";
import { AuthQuery } from "@type/index";
import { useAppSelector } from "@hooks/useRedux";

const useBlogsFeatures = () => {
  const { isAuthed } = useAppSelector(({ auth }) => auth);
  const navigate = useNavigate();
  const { setParam } = useSearchParamsHook();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); // Set to false after the initial auth state sync
  }, [isAuthed]);

  const handleCreateBlog = () => {
    if (isAuthed) {
      navigate("/blog/create");
    } else {
      setParam("auth", AuthQuery.SignIn);
    }
  };
  return { handleCreateBlog, isLoading };
};

export default useBlogsFeatures;
