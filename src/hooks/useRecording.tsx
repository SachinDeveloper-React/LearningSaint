import React, {useEffect, useState} from 'react';
import {useMMKVBoolean} from 'react-native-mmkv';
import {recordingService} from '../services';

type Props = {
  batchID: number | string;
};

const useRecording = (props: Props) => {
  const [recording, setRecording] = useState({
    isLoading: false,
    isError: false,
    error: '',
    recording: [],
  });

  const [login, setLogin] = useMMKVBoolean('@login');
  const fetchRecording = async () => {
    setRecording({...recording, isLoading: true});
    const recordingResponse = await recordingService(props.batchID);

    if (recordingResponse == true) {
      setRecording({
        ...recording,
        isLoading: false,
        recording: [],
        isError: true,
        error: 'Batches Not Found',
      });
    } else {
      setRecording({
        ...recording,
        isLoading: false,
        recording: recordingResponse?.data?.recordings,
      });
    }
  };

  useEffect(() => {
    if (recording.recording.length === 0 && Boolean(login)) {
      fetchRecording();
    }
  }, []);

  return [recording];
};

export default useRecording;
