import React from 'react';

export default function Clock(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path d="M11,2A10,10,0,1,0,21,12,10,10,0,0,0,11,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,11,20Zm3.1-7.37L12,11.42V7a1,1,0,0,0-2,0v5s0,.08,0,.12a.65.65,0,0,0,.05.2.89.89,0,0,0,.08.17.86.86,0,0,0,.1.16l.16.13.09.09,2.6,1.5a1,1,0,0,0,.5.13,1,1,0,0,0,.5-1.87Z" />
    </svg>
  );
}
