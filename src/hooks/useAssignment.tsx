import React, {useEffect, useState} from 'react';
import {useMMKVBoolean} from 'react-native-mmkv';
import {assignmentsService} from '../services';

type Props = {
  batchID: number | string;
};

const useAssignment = (props: Props) => {
  const [assignment, setAssignment] = useState({
    isLoading: false,
    isError: false,
    error: '',
    assignment: [],
  });

  const [login, setLogin] = useMMKVBoolean('@login');
  const fetchAssignment = async () => {
    setAssignment({...assignment, isLoading: true});
    const assignmentResponse = await assignmentsService(props.batchID);

    if (assignmentResponse == true) {
      setAssignment({
        ...assignment,
        isLoading: false,
        assignment: [],
        isError: true,
        error: 'Batches Not Found',
      });
    } else {
      setAssignment({
        ...assignment,
        isLoading: false,
        assignment: assignmentResponse?.data?.assignments,
      });
    }
  };

  useEffect(() => {
    if (assignment.assignment.length === 0 && Boolean(login)) {
      fetchAssignment();
    }
  }, []);

  return [assignment];
};

export default useAssignment;
