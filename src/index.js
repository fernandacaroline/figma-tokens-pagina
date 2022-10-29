import '@elastic/eui/dist/eui_theme_light.css';
import ReactDOM from 'react-dom';
import React from 'react';
import createCache from '@emotion/cache';
import { EuiProvider } from '@elastic/eui';

import { Demo } from './demo';
import App from './App';

const cache = createCache({
  key: 'codesandbox',
  container: document.querySelector('meta[name="emotion-styles"]'),
});
cache.compat = true;

ReactDOM.render(
  <EuiProvider cache={cache} >
    <App />
  </EuiProvider>,
  document.getElementById('root')
);