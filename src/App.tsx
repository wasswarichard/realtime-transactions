import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from './utils/theme';
import { Layout } from './components';
import RoutePaths from './Routes';

function App() {
   const { theme } = useTheme();

   return (
      <ThemeProvider theme={theme}>
         <Layout>
            <RoutePaths />
         </Layout>
      </ThemeProvider>
   );
}

export default App;
