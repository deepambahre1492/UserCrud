import React from 'react';
import TodoList from './TodoList';

import PageSize from './PageSize';

const Dashboard = () => {
  return (
    <>
      <div className="d-flex ">
        <PageSize />
      </div>
      <TodoList />
    </>
  );
};

export default Dashboard;
