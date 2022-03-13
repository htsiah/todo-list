import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const ReviewStatistics = (props) => {
  const [statistic, setStatistic] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(process.env.REACT_APP_BACKEND_URL + '/todolist/getreviewstatictic');
        const responceData = await responce.json();
        setStatistic(responceData);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <Card className='card-default'>
      <CardHeader>Statistics</CardHeader>
      <CardBody>
        <center>
          <h1>
            {statistic.totalCompleted} / {statistic.totalTask}
          </h1>
          <h2>Completed task vs number of task</h2>
        </center>
      </CardBody>
    </Card>
  );
};

export default ReviewStatistics;
