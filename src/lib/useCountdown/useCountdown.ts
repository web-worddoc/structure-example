import * as React from 'react';


type Time = {
  sec: number;
  min: number;
  hours: number;
}

export const useCountdown = (utc: string, cb?: Function) => {
  const [time, setTime] = React.useState<Time | null>(null);
  let msDest = new Date(utc).getTime();

  let updateTime = () => {
    return new Promise((resolve, reject) => {
      let msDiff = msDest - new Date().getTime();
      let newTime: Date = new Date(msDiff);
  
      if (Math.sign(msDiff) === -1) {
        setTime(null);
        if (cb) {
          cb();
          reject();
        }
      } else {
        setTime({
          sec: newTime.getUTCSeconds(),
          min: newTime.getUTCMinutes(),
          hours: newTime.getUTCHours(),
        });
      }
    })
  }
  
  React.useEffect(() => {
    updateTime();
    const interval = setInterval(() => {
      updateTime().catch(() => {
        clearInterval(interval);
      })
    }, 1000)
  }, []);

  return time;
}
