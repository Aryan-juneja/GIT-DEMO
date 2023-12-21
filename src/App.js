import './App.css';
import Nav from './Components/Nav';
import Shop from './Components/Shop';
function App() {
  return (
    <>
    <Nav Title = 'Bank' about = 'About Us'/>
    <div className='container'>
      <Shop/>
    </div>
  
    </>
  );
}

export default App;
