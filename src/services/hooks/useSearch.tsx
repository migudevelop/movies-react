import React, { useState } from 'react';

const useSearch = () => {
  const [textSearch, setTextSearch] = useState<string>('');

  const setSearch = React.useCallback((value: string): void => {
    setTextSearch(value);
  }, []);

  return {
    textSearch,
    setSearch,
  };
};

export default useSearch;
