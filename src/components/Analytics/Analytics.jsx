import React from 'react';
import { Helmet } from 'react-helmet';

const Analytics = () => {
  return (
    <Helmet>
      {/* Paste your Google Analytics script here */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HBJNKQ9VEK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-HBJNKQ9VEK');
</script>
    </Helmet>
  );
};

export default Analytics;
