import React from 'react';

const BackgroundSVG = props => {
  return (
    <div className="background">
      <svg width="100%" height="100%" viewBox="0 0 2 1">
        <rect fill="#77aa77" width="2" height="1" />
        <defs>
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop offset="0" stop-color="#77aa77" />
            <stop offset="1" stop-color="#4fd" />
          </linearGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0" stop-color="#cf8" stop-opacity="0" />
            <stop offset="1" stop-color="#cf8" stop-opacity="1" />
          </linearGradient>
          <linearGradient
            id="c"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="2"
            y2="2"
          >
            <stop offset="0" stop-color="#cf8" stop-opacity="0" />
            <stop offset="1" stop-color="#cf8" stop-opacity="1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" fill="url(#a)" width="2" height="1" />
        <g fill-opacity="0.5">
          <polygon fill="url(#b)" points="0 1 0 0 2 0" />
          <polygon fill="url(#c)" points="2 1 2 0 0 0" />
        </g>
      </svg>
    </div>
  );
};

export default BackgroundSVG;
