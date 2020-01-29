import React from 'react';

function Error(props) {
  const { error } = props;
  
  return (
    <section>
      <p> {error} </p>
    </section>
  )
}

export default Error;
