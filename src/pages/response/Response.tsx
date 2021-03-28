import React, { useState } from 'react';
import ResponseTasks from './ResponseTasks';
import ResponseHistory from './ResponseHistory';

const Response: React.FC = () => {
  const [responsing, setResponsing] = useState(true)
  if (responsing) {
    // window.location=""
    return (
      <ResponseTasks />
    )
  } else {
    return (
      <ResponseHistory />
    );
  }
};

export default Response;
