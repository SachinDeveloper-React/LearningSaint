import React, {useEffect, useState} from 'react';
import {classesService} from '../services';

type Props = {
  batchID: number | string;
};

const useClasses = (props: Props) => {
  const [classes, setClasses] = useState({
    isLoading: true,
    isError: false,
    error: '',
    classes: [],
    batchID: props.batchID,
  });

  const fetchClasses = async () => {
    setClasses({...classes, isLoading: true});
    const classesResponse = await classesService(props.batchID);
    if (classesResponse == true) {
      setClasses({
        ...classes,
        isLoading: false,
        classes: [],
        isError: true,
        error: 'Classes Not Found',
      });
    } else {
      setClasses({
        ...classes,
        isLoading: false,
        isError: false,
        error: '',
        classes: classesResponse?.data?.classes,
      });
    }
  };

  useEffect(() => {
    if (classes.classes.length === 0) {
      fetchClasses();
    }
  }, []);

  return [classes];
};

export default useClasses;
