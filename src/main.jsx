import isPropValid from '@emotion/is-prop-valid';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { StyleSheetManager } from 'styled-components';
import App from './App.jsx';
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';
import ErrorFallback from './ui/ErrorFallback.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <StyleSheetManager
        shouldForwardProp={isPropValid}
        disableVendorPrefixes={false}
      >
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </StyleSheetManager>
    </ErrorBoundary>
  </React.StrictMode>
);
