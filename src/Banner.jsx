import React from 'react';

function Banner({ title, description }) {
  return (
    <div>
      <hr />
      <h2>
        {title} | {description}
      </h2>
      <hr />
    </div>
  );
}

export default Banner;
