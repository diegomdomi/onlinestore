// import './App.css';
import { BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';


import LoginStore from '../src/Components/FakeStore/LoginStore.jsx';
import NavBarStore from './Components/FakeStore/NavBarStore.jsx';

function App() {
  return (
    <> 
      <BrowserRouter>

        <NavBarStore></NavBarStore>
        <LoginStore></LoginStore>
      </BrowserRouter>
    </>
  );
}

export default App;
