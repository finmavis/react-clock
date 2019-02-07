import { useState, useEffect } from 'react';

const useDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // This will run on componentDidMount and ComponentDidUpdate
    let timerInterval = setInterval(() => setDate(new Date()), 1000);
    // This will run on componentWillUnmount
    // React will cleanup if we return a function
    return () => clearInterval(timerInterval);
    // Why we pass empty array ?
    // In this way we tell react that we skip updating phase
    // In other word is just render when ComponentDidMount
    // Cleanup after ComponentWillUnmount
    // And skip on ComponenDidupdate
  }, []);

  return { date };
};

export default useDate;
