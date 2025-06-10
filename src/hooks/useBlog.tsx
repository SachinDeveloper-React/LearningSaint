import React, {useEffect, useState} from 'react';
import {blogsService} from '../services';

type Props = {
  refreshing: boolean;
};

const useBlog = (props: Props) => {
  const {refreshing} = props;
  const [blogs, setBlogs] = useState({
    isError: false,
    isLoading: false,
    blog: [],
  });

  const fetchblogs = async () => {
    setBlogs({...blogs, isLoading: true});
    const responseBlog = await blogsService();
    if (!responseBlog.isError) {
      setBlogs({...blogs, isLoading: false, blog: responseBlog.data.blogs});
    } else {
      setBlogs({...blogs, isLoading: false, isError: true});
    }
  };
  useEffect(() => {
    fetchblogs();
  }, [refreshing]);
  return [blogs];
};

export default useBlog;
