import React, { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const showLoader = React.useCallback((): void => {
    setLoading(true);
  }, []);

  const hideLoader = React.useCallback((): void => {
    setLoading(false);
  }, []);

  return {
    loading,
    showLoader,
    hideLoader,
  };
  // return [
  //   loading ? (
  //     <>
  //       <Backdrop className="backdrop" open={loading}>
  //         <CircularProgress />
  //       </Backdrop>
  //     </>
  //   ) : null,
  //   () => setLoading(true),
  //   () => setLoading(false),
  // ] as const;
};

export default useLoading;
