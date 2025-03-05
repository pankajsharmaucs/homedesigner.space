// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom CSS
import './css/style.css';
import './css/media.css';
// Import responsive CSS
import './css/responsive.css';
 
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
