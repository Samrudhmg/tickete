
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Questions from './Components/Questions';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <Questions/>
      <Footer/> 
    </div>
  );
}

export default App;
