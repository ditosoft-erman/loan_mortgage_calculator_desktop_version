import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/app.route';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="E5E5E5">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
