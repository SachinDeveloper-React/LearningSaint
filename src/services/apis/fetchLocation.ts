import {GEOIPLOCATION, instance_location} from '../domains';

export const fetchLocationService = async () => {
  try {
    const location = await instance_location.get(GEOIPLOCATION);
    return {
      data: location?.data,
      error: '',
      isError: true,
      message: 'Successfully fetch location',
    };
  } catch (err) {
    return {
      data: {},
      error: err,
      isError: true,
      message: 'Failed to fetch location',
    };
  }
};
