import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const ReviewStatistics = (props) => {
  const statisticData = {
    totalCompleted: 90,
    totalTask: 100,
  };
  return (
    <Card className='card-default'>
      <CardHeader>Statistics</CardHeader>
      <CardBody>
        <center>
          <h1>
            {statisticData.totalCompleted} / {statisticData.totalTask}
          </h1>
          <h1>in-completed task VS number of completed task</h1>
        </center>
      </CardBody>
    </Card>
  );
};

export default ReviewStatistics;
