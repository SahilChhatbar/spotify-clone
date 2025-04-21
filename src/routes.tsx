import { createBrowserRouter } from 'react-router-dom';
import AppShellLayout from './layout/AppShellLayout';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <AppShellLayout />,
      children: [
        {
         
        },
      ],
    },
  ]);
  