import React from 'react';

import ErrorBoundary from 'Components/common/error-boundary';


export const Page: React.FC = ({ children }) => (
  <ErrorBoundary>
    {children}
  </ErrorBoundary>
);

export default Page;
