import React from 'react';

interface RocketProps {
  width?: string;
  height?: string;
  fill?: string;
}

export const Rocket: React.FC<RocketProps> = ({
  width = '512px',
  height = '512px',
  fill = 'black',
}) => {
  return (
    <svg
      enableBackground="new 0 0 512 512"
      height={height}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path
            d="M383.224,128.756c-10.305-10.31-24.019-15.985-38.616-15.985c-14.593,0-28.307,5.675-38.613,15.985    c-10.322,10.315-16.002,24.033-16,38.628c0.003,14.588,5.686,28.299,15.99,38.604c10.314,10.33,24.04,16.017,38.646,16.017    c14.591,0,28.307-5.683,38.611-15.992c10.314-10.31,15.994-24.028,15.989-38.624C399.229,152.79,393.543,139.071,383.224,128.756z     M344.63,192.738c-6.781,0-13.151-2.637-17.947-7.438c-4.786-4.784-7.421-11.149-7.423-17.922c0-6.771,2.632-13.136,7.423-17.927    c4.781-4.779,11.146-7.413,17.925-7.413c6.778-0.003,13.144,2.632,17.928,7.413c4.788,4.794,7.431,11.164,7.431,17.945    c0.005,6.778-2.63,13.144-7.416,17.925C357.766,190.106,351.403,192.738,344.63,192.738z"
            fill={fill}
          />
          <path
            d="M86.343,425.654c-4.761-4.766-12.483-4.764-17.245-0.005l-53.446,53.438c-4.764,4.761-4.764,12.483-0.005,17.244    c4.761,4.765,12.484,4.765,17.245,0.006l53.448-53.438C91.102,438.139,91.102,430.416,86.343,425.654z"
            fill={fill}
          />
          <path
            d="M149.971,432.722c-4.764-4.761-12.486-4.761-17.245,0l-53.443,53.456c-4.762,4.764-4.762,12.48,0,17.244    c4.766,4.762,12.486,4.759,17.245-0.002l53.443-53.455C154.734,445.203,154.732,437.483,149.971,432.722z"
            fill={fill}
          />
          <path
            d="M79.275,362.021c-4.766-4.761-12.483-4.761-17.247,0.003L8.578,415.478c-4.761,4.764-4.761,12.483,0.005,17.244    c4.759,4.762,12.483,4.762,17.245-0.005l53.45-53.45C84.037,374.505,84.037,366.78,79.275,362.021z"
            fill={fill}
          />
        </g>
        <path
          d="M370.107,303.865C482.198,188.188,508.465,32.972,510.682,18.653c0.02-0.095,0.318-2.291,0.318-3.021   C511,7.552,504.448,1,496.37,1c-0.729,0-2.927,0.301-3.036,0.324c-14.458,2.236-169.6,28.533-285.206,140.554   c-26.053-1.407-114.469,1.285-202.827,89.639v0.005C2.644,234.17,1,237.831,1,241.88c0,5.2,2.734,9.739,6.823,12.334l0.005,0.045   l84.785,47.225c-2.804,5.09-5.561,10.138-8.238,15.098l0.005,0.022c-2.996,5.546-2.154,12.616,2.53,17.298l86.127,86.037   l5.07,5.165c4.824,4.823,12.172,5.558,17.785,2.236c0.022-0.01,0.052-0.013,0.075-0.022c2.03-1.101,11.082-6.029,14.551-7.939   l47.022,84.424l0.262,0.369c2.595,4.089,7.127,6.828,12.327,6.828c4.044,0,7.704-1.644,10.356-4.298   C368.843,418.344,371.517,329.915,370.107,303.865z M477.766,34.254c-4.074,18.079-11.615,46.617-24.32,79.892l-55.562-55.55   C431.153,45.896,459.687,38.341,477.766,34.254z M40.196,238.785c54.892-49,107.364-63.118,139.493-66.753   c-29.497,33.952-52.853,69.734-72.708,103.959L40.196,238.785z M191.127,396.648l-75.8-75.735   c27.051-49.538,60.171-105.096,108.604-153.541c44.874-44.876,97.522-75.753,144.653-96.686l72.774,72.755   c-20.929,47.083-51.813,99.689-96.751,144.62C296.252,336.432,240.688,369.567,191.127,396.648z M236.008,405.003   c34.241-19.864,70.026-43.223,103.948-72.702c-3.631,32.132-17.735,84.613-66.738,139.506L236.008,405.003z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
