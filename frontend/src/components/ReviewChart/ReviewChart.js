import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

import FlotChart from './Flot';

const ReviewChart = (props) => {
  const chartOption = {
    series: {
      pie: {
        show: true,
        innerRadius: 0,
        label: {
          show: true,
          radius: 0.8,
          formatter: function (label, series) {
            return (
              '<div class="flot-pie-label">' +
              //label + ' : ' +
              Math.round(series.percent) +
              '%</div>'
            );
          },
          background: {
            opacity: 0.8,
            color: '#222',
          },
        },
      },
    },
  };

  const chartData = [
    {
      color: '#ff3e43',
      data: 80,
      label: 'Completed Task',
    },
    {
      color: '#937fc7',
      data: 20,
      label: 'In-completed task',
    },
  ];

  return (
    <Card className='card-default'>
      <CardHeader>Donut Chart</CardHeader>
      <CardBody>
        <FlotChart options={chartOption} data={chartData} className='flot-chart' height='250px' />
      </CardBody>
    </Card>
  );
};

export default ReviewChart;
