import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import UserLists from './Pages/UserLists';


function App() {
  const Persons=[{
    id:1,
    name:'Hejer',
    age:26,
    Adress: 'Kairouan'
  },
  {
    id:2,
    name:'Mohamed',
    age:18,
    Adress: 'Tunis'
  },
  {
    id:3,
    name:'Mourad',
    age:27,
    Adress: 'Tunis'
  },
  {
    id:4,
    name:'Nour',
    age:26,
    Adress: 'Bizerte'
  }
]
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/Profile/:idUser' element={<Profile Persons={Persons}/>} />
        <Route path='/users' element={<UserLists Persons={Persons}/>} />
        <Route path='*' element={<ErrorPage/>} />

      </Routes>
      
    </Router>
  );
}

export default App;
