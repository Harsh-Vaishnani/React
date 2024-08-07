import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Header from './Components/Props_and_state/Header';
// import UseContext from './Components/useContext/UseContext';
import FunctionalHeader3 from './Components/Hooks/FunctionalHeader3'
import SignInPage from './Components/SignInPage/SignInPage';
import TodoList from './Components/To_Do_List/TodoList';
import ApiCalling from './Components/PokemonApi/ApiCalling';
import Navbar from './Components/Navbar/Navbar';
import SearchFilter from './Components/SearchFilter/SearchFilter';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <div className="App">
      
      
      <Navbar/>
      
      <Routes>

          <Route  path="/" element={<Header/>}/>
          <Route  path="/functionalheader3" element={<FunctionalHeader3/>}/>
          <Route  path="/todolist" element={<TodoList/>}/>
          <Route  path="/signinpage" element={<SignInPage/>}/>
          <Route  path="/apicalling" element={<ApiCalling/>}/>
          <Route  path="/searchfilter" element={<SearchFilter/>}/>
          
      </Routes>
   
     
     {/* 
     <UseContext/> */}
     
     

 
    
    
     
     

    
    </div>
  );
}

export default App;
