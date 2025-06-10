import React, {useEffect, useState} from 'react';
import {userDetailService} from '../services';
import {useMMKVObject} from 'react-native-mmkv';
type Props = {};

const useUserDetails = (props: Props) => {
  const [user, setUser] = useState({
    userDeatil: {},
    isLoading: false,
    isError: false,
    error: '',
  });

  const fetchUserDetails = async () => {
    setUser({...user, isLoading: true});
    const userDetailResponse = await userDetailService();
    if (userDetailResponse == true) {
      setUser({
        ...user,
        isLoading: false,
        userDeatil: {},
        isError: true,
        error: 'User not found',
      });
    } else {
      setUser({
        ...user,
        isLoading: false,
        userDeatil: userDetailResponse?.data,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      fetchUserDetails();
    }
  }, []);

  // userDetailService
  return [user];
};

export default useUserDetails;
