import React, {useEffect, useState} from 'react';
import {useMMKVBoolean} from 'react-native-mmkv';
import {eBookService} from '../services';

type Props = {
  batchID: number | string;
};

const useEbook = (props: Props) => {
  const [ebook, setebook] = useState({
    isLoading: false,
    isError: false,
    error: '',
    ebook: [],
  });

  const [login, setLogin] = useMMKVBoolean('@login');
  const fetchAssignment = async () => {
    setebook({...ebook, isLoading: true});
    const ebookResponse = await eBookService(props.batchID);

    if (ebookResponse == true) {
      setebook({
        ...ebook,
        isLoading: false,
        ebook: [],
        isError: true,
        error: 'Ebook Not Found',
      });
    } else {
      setebook({
        ...ebook,
        isLoading: false,
        ebook: ebookResponse?.data?.ebooks,
      });
    }
  };

  useEffect(() => {
    if (ebook.ebook.length === 0 && Boolean(login)) {
      fetchAssignment();
    }
  }, []);

  return [ebook];
};

export default useEbook;
