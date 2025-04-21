import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const App = () => {
  return (
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
  );
};

export default App;