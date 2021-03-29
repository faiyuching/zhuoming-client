import React, { useState } from 'react';
import NotFound from '../NotFound';

const Response: React.FC = () => {
  const [responsing, setResponsing] = useState(true)
  if (responsing) {
    window.location.href = "/response/tasks"
  } else {
    window.location.href = "/response/history"
  }
  return (
    <NotFound />
  );
};

export default Response;
