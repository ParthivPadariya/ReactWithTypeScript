import './App.css';
import Child from './component/Child';
import { Greet } from './component/greet';
import Optinal from './component/Optinal';
import { Person } from './component/Person';
import PersonList from './component/PersonList';

function App() {
  const personName = {
    first : "Parthiv",
    last:"Padariya",
  }

  const nameList = [
    {
      first : "Parthiv",
      last:"Padariya",
    },
    {
      first : "Darsh",
      last:"Garala",
    },
    {
      first : "Umang",
      last:"Kaila",
    }
  ]
  return (
    <div className="App">
      {/* Pass Some Data */}
      <Greet name = {"Pathiv"} id = "21DCS062" isLoggedIn = {false}/>
      
      {/* Pass Object */}
      <Person name={personName}/>
      
      {/* Pass array of Object */}
      <PersonList name={nameList}/>


      {/* Optinal Data Pass */}
      <Optinal message={"Parthiv"} age={20}></Optinal>

      {/* Pass All Child of main */}
      <Child>
        <header>Hello I am Child of Child</header>
      </Child>
    </div>
  );
}

export default App;
