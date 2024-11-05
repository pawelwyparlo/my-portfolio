import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App.tsx';
import { UtilityProvider } from './contexts/UtilityContext.tsx';
import './global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: { fontFamily: 'Poppins, sans-serif' },
        components: {
          Timeline: {
            itemPaddingBottom: 150,
          },
        },
      }}
    >
      <UtilityProvider>
        <App />
      </UtilityProvider>
    </ConfigProvider>
  </StrictMode>,
);
