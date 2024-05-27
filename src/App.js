import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accommodation from './Page/Accomodation/Accomodation';
import { Provider } from "react-redux";
import store from './Store/Store';
function App() {
  return (
    <Provider  store={store}>
      <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Accommodation/> } />
        </Routes> 
      </BrowserRouter>
      </Provider>
  );
}

export default App;