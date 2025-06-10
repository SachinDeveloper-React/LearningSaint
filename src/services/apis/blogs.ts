import {
  api_token,
  GETBLOGS,
  GETBLOGSENDPONT,
  GETBLOGSENDPONTDETAIL,
  instance_crm,
  SITEID,
} from '../domains';

export const blogsService = async () => {
  try {
    const responseBlog = await instance_crm.get(GETBLOGS);
    return {
      data: responseBlog.data,
      error: '',
      isError: false,
      message: `Successfully Fetch blogs`,
    };
  } catch (err) {
    console.log(`DEBUG: Fatch to failed blogs -> ${err}`);
    return {
      data: err,
      error: '',
      isError: true,
      message: `Failed to fetch Blogs ${err}`,
    };
  }
};
export const blogsDetailService = async (url: string) => {
  try {
    const responseBlog = await instance_crm.get(
      `${GETBLOGSENDPONTDETAIL}/${url}/${SITEID}${api_token}`,
    );
    return {
      data: responseBlog.data,
      error: '',
      isError: false,
      message: `Successfully Fetch blogs`,
    };
  } catch (err) {
    console.log(`DEBUG: Fatch to failed blogs -> ${err}`);
    return {
      data: err,
      error: '',
      isError: true,
      message: `Failed to fetch Blogs ${err}`,
    };
  }
};
