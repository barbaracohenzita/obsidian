import React from 'react';

const Preview = ({ color }) => {
  const previewStyle = {
    backgroundColor: color,
    width: '100%',
    height: '200px',
    marginTop: '20px'
  };

  return (
    <div style={previewStyle}>
      <p>Preview Area</p>
    </div>
  );
};

export default Preview;
