import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useSearchParamsHook from "@hooks/useSearchParams";
import useFollowersService from "@services/followers";
import { useAppSelector } from "@hooks/useRedux";
import useBlogsServices from "@services/blogs";
import { AuthQuery } from "@type/index";

const useHeaderFeatures = () => {
  const navigate = useNavigate();
  const { authorId, blogId } = useParams();
  const { setParam } = useSearchParamsHook();
  const { deleteBlogById } = useBlogsServices();
  const [loading, setLoading] = useState<boolean>(false);
  const { isAuthed } = useAppSelector(({ auth }) => auth);

  const { followUserMutation, unfollowUserMutation } = useFollowersService();

  const handleFollow = () => {
    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);
      return;
    }

    if(authorId) {
        followUserMutation(authorId)
    }

  };
  const handleUnFollow = () => {
    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);
      return;
    }

    if(authorId) {
        unfollowUserMutation(authorId)
    }
  };

  const handleEdit = () => {
    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);
      return;
    }

    if(authorId) {
      navigate(`/blog/edit/${blogId}`)
    }
  }

  const handleDelete = (blogId: any) => {
    try {
      setLoading(true);
      deleteBlogById(blogId);
      setLoading(false);
      navigate('/blog')
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { handleFollow, handleUnFollow, handleEdit, handleDelete, loading };
};

export default useHeaderFeatures;
