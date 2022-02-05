import React from 'react';

const Random = (props) => {
  let randomNum = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <p>
      Random number between {props.min} and {props.max} =&gt; {randomNum}
    </p>
  );
};

export default Random;
