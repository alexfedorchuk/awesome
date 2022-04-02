import React from 'react';

import AppFailed from '@ui-lib/app-failed';
import Container from '@mui/material/Container';


type ErrorBoundaryState = {
  hasError: boolean;
  error: string;
};


class ErrorBoundary extends React.Component<unknown, ErrorBoundaryState> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.message };
  }

  /**
   * @todo log to Sentry
   */
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logComponentStackToMyService(info.componentStack);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Container
          maxWidth="md"
          sx={{ marginTop: 4, marginBottom: 4 }}
        >
          <AppFailed
            description="Current page is temporarily unavailable."
            error={error}
          />
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
