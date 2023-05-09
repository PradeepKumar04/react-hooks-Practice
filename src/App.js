import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import DefaultPage from './components/DefaultPage'
import UseReducer from './components/UseReducer'
import UseContext from './components/UseContext/UseContext';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route  path="/" element={<DefaultPage/>} />
            <Route  path="/useReducer" element={<UseReducer/>} />
            <Route  path="/useContext" element={<UseContext/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
