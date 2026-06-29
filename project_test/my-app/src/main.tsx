import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';
import { router } from './routes/Routes';
import './theme/scss/app.scss';


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)
