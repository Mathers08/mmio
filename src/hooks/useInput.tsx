import React, { ChangeEvent, useState } from 'react';

const useInput = (initialValue?: string | number) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value);

  return {
    value,
    onChange
  };
};

export default useInput;