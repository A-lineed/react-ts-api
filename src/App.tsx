import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu'
import MainRoutes from './routes';



function App() {
  return (
  <BrowserRouter>
  <Menu />
  <MainRoutes/>
  <Menu />
  </BrowserRouter>
  );
}

export default App;
