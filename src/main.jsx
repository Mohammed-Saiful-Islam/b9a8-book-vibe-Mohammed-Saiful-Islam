import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from "./routes/Routes";
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router} />
  </div>
)
