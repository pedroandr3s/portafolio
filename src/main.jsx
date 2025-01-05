import { BrowserRouter } from 'react-router-dom';
import App from './App';

function Root() {
  return (
    <BrowserRouter basename="/portafolio">
      <App />
    </BrowserRouter>
  );
}

export default Root;
