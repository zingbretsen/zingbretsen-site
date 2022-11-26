import React from 'react';

import Image from 'next/image';

const Rightimage = ({ src }) => (
  <div className="right">
    <Image src={src} />
  </div>
);

export default Rightimage;
