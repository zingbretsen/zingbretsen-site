import React from 'react';

import Image from 'next/image';

const Rightimage = ({ src, alt }) => (
  <div className="right">
    <Image src={src} alt={alt} />
  </div>
);

export default Rightimage;
