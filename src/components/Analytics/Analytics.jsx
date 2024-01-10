import React from 'react';
import { Helmet } from 'react-helmet';

const Analytics = () => {
  // Define a regular function here to handle gtag
  function gtag() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(arguments);
  }

  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HBJNKQ9VEK"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-HBJNKQ9VEK');
        `}
      </script>
    </Helmet>
  );
};

export default Analytics;
