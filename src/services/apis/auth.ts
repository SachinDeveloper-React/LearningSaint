import {instance, LOGINURL, REGISTERURL} from '../domains';

export const loginService = async (item: {email: string; password: string}) => {
  const {email, password} = item;
  try {
    let data = JSON.stringify({
      email: email,
      password: password,
    });

    const authLoginResponse = await instance.post(LOGINURL, data);

    return {
      msg: 'Successful',
      data: authLoginResponse.data,
      status: authLoginResponse.status,
      statusText: authLoginResponse.statusText,
      error: false,
    };
  } catch (err: any) {
    console.log('err', err);
    return {
      msg: err?.response?.data,
      data: err,
      status: 500,
      statusText: 'Some Error',
      error: true,
    };
  }
};
export const registerService = async (item: {
  name: string;
  email: string;
  password: string;
}) => {
  const {name, email, password} = item;
  try {
    let data = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    const authRegisterResponse = await instance.post(REGISTERURL, data);

    return {
      msg: 'Successful',
      data: authRegisterResponse.data,
      status: authRegisterResponse.status,
      statusText: authRegisterResponse.statusText,
      error: false,
    };
  } catch (err: any) {
    console.log('err', err);
    return {
      msg: err?.response?.data,
      data: err,
      status: 500,
      statusText: 'Some Error',
      error: true,
    };
  }
};
