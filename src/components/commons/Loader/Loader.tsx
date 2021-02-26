import React, { useContext } from 'react';
import { CommonContext } from 'services/context/commonContext';
import { Backdrop, CircularProgress } from '@material-ui/core';

function Loader() {
  const { loading } = useContext(CommonContext);
  const backRef = React.useRef(null);
  const circleRef = React.useRef(null);

  return (
    <>
      <Backdrop ref={backRef} style={{ zIndex: 1 }} open={loading}>
        <CircularProgress ref={circleRef} color="primary" size={70} />
      </Backdrop>
    </>
  );
}

export default Loader;
