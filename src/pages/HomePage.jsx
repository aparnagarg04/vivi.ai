import React from 'react';
import Sidebar from '../components/Sidebar';
import RightPane from '../components/RightPane';

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <RightPane isSidebarOpen={true} />
    </div>
  );
};

export default HomePage;
