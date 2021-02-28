import logo from './logo.svg';
import './App.css';
import List from './containers/List'
import Navbar from './components/NavBar/NavBar'


function App() {
  return (
  <>
    <Navbar/>
   
   <main>
      <div className="container">
          <List/> 
      </div>
   </main>
   </>
  );
}

export default App;
