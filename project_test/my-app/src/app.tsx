import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

 function app() {


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 0
      },
      mutations: {
        retry: 0
      }
    }
  });

  const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

  return (
    <ThemeProvider theme={darkTheme}>
    <QueryClientProvider client={queryClient}>
      <ToastContainer position='top-right' hideProgressBar theme='colored' />
      <Header />
        <Outlet />
      <Footer />
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default app
