import React, { useState } from 'react';
import ResponseTasks from './response/ResponseTasks';
import ResponseHistory from './response/ResponseHistory';

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
