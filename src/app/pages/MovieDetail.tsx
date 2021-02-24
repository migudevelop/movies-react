import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

function MovieDetail() {
  const location = useLocation();
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    if (location.state != null) setState(location.state);
  }, [location]);

  return (
    <Layout>
      <div className="moviedetail-wrapper m-5">
        <div>
          <img src={state?.image} className="img-fluid img-thumbnail" alt={state?.name} />
        </div>
        <div>
          <h1>{state?.name}</h1>
          <article>{state?.description}</article>
        </div>
      </div>
    </Layout>
  );
}

export default MovieDetail;
