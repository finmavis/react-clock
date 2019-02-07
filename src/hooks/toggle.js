import { useState } from 'react';

const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);

  return {
    show: value,
    toggle,
  };
};

export default useToggle;
