import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx';
import '@fontsource/lexend-zetta/300.css';
import './styles/styles.ts'
import './libs/i18n/i18n.ts'
import { Suspense } from "react";
import { Toast } from '@@/Toast/Toast.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="Cargando traducciones...">
        <App />
      </Suspense>
    </BrowserRouter>
    <Toast />
  </React.StrictMode>,
)
