import { useEffect } from 'react';


type Callback = () => void;

export const useWillUnmount = (callback: Callback) => {
  useEffect(() => {
    return callback;
  }, []);
};
