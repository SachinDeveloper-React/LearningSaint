import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
  } from 'react';
  import NetInfo from '@react-native-community/netinfo';
  import {NoInternetScreen} from '../Screens';
  type Props = {
    children: ReactNode;
  };
  
  export const NetworkContext = createContext<{
    isConnected: boolean;
    setIsConnected: Dispatch<SetStateAction<boolean>>;
  }>({
    isConnected: false,
    setIsConnected: () => null,
  });
  
  const NetworkProvider = (props: Props) => {
    const {children} = props;
    const [isConnected, setIsConnected] = useState(false);
    const [isOffline, setOfflineStatus] = useState(false);
    const [retry, setRetry] = useState(false);
    const value = {isConnected, setIsConnected};
  
    useEffect(() => {
      const removeNetInfoSubscription = NetInfo.addEventListener(state => {
        const offline = !(state.isConnected && state.isInternetReachable);
  
        setIsConnected(offline);
        setOfflineStatus(offline);
      });
      return () => removeNetInfoSubscription();
    }, [retry]);
  
    console.log(isOffline , isConnected)
    if (isOffline) {
      return <NoInternetScreen onRetry={() => setRetry(!retry)} />;
    }
  
    return (
      <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
    );
  };
  
  export default NetworkProvider;
  