import React from 'react';

import Image from 'next/image';

const Rightimage = ({ src, alt }) => (
  <div className="md:float-right md:max-w-[350px] md:ml-5 p-4 rounded-[5em]">
    <Image src={src} alt={alt} />
  </div>
);

export default Rightimage;
