import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <div>
      <p>no route match for {location.pathname}</p>
    </div>
  );
}
