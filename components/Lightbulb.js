import React from 'react';

// xlinkHref

export default () =>
  <svg version="1.1" className="iconic iconic-lightbulb" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="714px" height="714px" viewBox="0 0 714 714" style={{ enableBackground: 'new 0 0 714 714' }} xmlSpace="preserve">
    <style>{`
      .iconic-lightbulb {
        cursor: pointer;
      }

      .iconic-lightbulb * {
        -webkit-transition: .4s;
        -moz-transition: .4s;
        transition: .4s;
      }

      .iconic-lightbulb .icon-container {
        fill: #fff;
        stroke-width: 6;
        stroke: #fff;

        -webkit-transition: .3s;
        -moz-transition: .3s;
        transition: .3s;
      }

      .iconic-lightbulb:hover .icon-container {
        fill: #fff8db;

        -webkit-transition: 2s;
        transition: 2s;
        -webkit-transition: 2s;
      }

      .iconic-lightbulb .iconic-lightbulb-light * {
        stroke-width: 16;
        stroke: #ddd;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .iconic-lightbulb:hover .iconic-lightbulb-light * {
        stroke: #fc0;
        stroke-width: 32;
      }

      .iconic-lightbulb .iconic-lightbulb-base {
        fill: #666;
      }

      .iconic-lightbulb .iconic-lightbulb-screws * {
        fill: none;
        stroke-width: 16;
        stroke: #333;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

    `}
    </style>
    <circle className="icon-container" cx="357" cy="357" r="330" strokeWidth="16" stroke="#000" fill="none" />
    <g className="iconic-lightbulb-screws">
      <defs>
        <clipPath id="iconic-lightbulb-screws-clip">
          <polygon points="304.333,511 433.667,511 430,521.5 281.667,547.167 280.333,521.5" />
        </clipPath>
      </defs>
      <line clipPath="url(#iconic-lightbulb-screws-clip)" x1="430" y1="505" x2="302" y2="529" />
      <line className="st4" x1="430" y1="537" x2="302" y2="561" />
      <line className="st4" x1="430" y1="569" x2="302" y2="593" />
      <line className="st4" x1="410" y1="605" x2="322" y2="621" />
    </g>

    <g className="iconic-lightbulb-light">
      <defs>
        <clipPath id="iconic-lightbulb-light-clip">
          <polygon points="514,329 436,369 436,436 299,436 293,360 489,280" />
        </clipPath>
      </defs>
      <g clipPath="url(#iconic-lightbulb-light-clip)">
        <line x1="330" y1="369" x2="330" y2="435" />
        <polyline points="478,313 402,349 402,435" />
      </g>
      <line x1="478" y1="129" x2="254" y2="233" />
      <line x1="354" y1="125" x2="254" y2="173" />
      <line x1="478" y1="189" x2="254" y2="293" />
      <line x1="478" y1="249" x2="254" y2="353" />
    </g>

    <path className="iconic-lightbulb-base" d="M292.431,505c0.863,4.314,5.169,7.845,9.569,7.845h128c4.4,0,8.706-3.53,9.569-7.845l12.861-64.311c0.863-4.314-2.03-7.845-6.431-7.845H286c-4.4,0-7.294,3.53-6.431,7.845L292.431,505z" />
  </svg>