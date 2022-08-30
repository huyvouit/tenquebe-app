import {useEffect, useRef, useState} from 'react';

const usePagination = (apiModel, initialCursor, defaultParams) => {
  const isHookInitializing = useRef(true);
  const [cursor, setCursor] = useState(initialCursor || 0);

  function goNext() {
    setCursor(prev => prev + 1);
  }
  function goPrev() {
    setCursor(prev => prev - 1);
  }

  useEffect(() => {
    if (isHookInitializing.current) {
      isHookInitializing.current = false;
    } else {
      apiModel?.({...defaultParams, cursor});
    }
  }, [cursor]);

  return {cursor, goNext, goPrev, setCursor};
};

export default usePagination;
