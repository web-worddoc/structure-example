import * as React from 'react';
import { useDidMount } from './../useDidMount';

export const useDidUpdate = (callback: Function, conditions: any[]) => {
  const [isMounted, setMounted] = React.useState<boolean>(false);

  useDidMount(() => {
    setMounted(true);
  });

  React.useEffect(() => {
    if (isMounted) {
      callback();
    }
  }, conditions);
};
