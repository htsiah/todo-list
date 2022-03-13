import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

import FlotChart from './Flot';

const ReviewChart = (props) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(process.env.REACT_APP_BACKEND_URL + '/todolist/getreviewchart');
        const responceData = await responce.json();
        setChartData(responceData);
      } catch (err) {}
    };
    fetchData();
  }, []);

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

  return (
    <Card className='card-default'>
      <CardHeader>Donut Chart</CardHeader>
      <CardBody>
        <FlotChart options={chartOption} data={chartData} className='flot-chart' height='250px' />
        <center>
          <h2>Completed task vs incompleted task</h2>
        </center>
      </CardBody>
    </Card>
  );
};

export default ReviewChart;
