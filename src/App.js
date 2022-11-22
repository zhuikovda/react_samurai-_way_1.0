import logo from './logo.svg';
import './App.css';

const App = () => {
  return  <div>
    <Header />
    <Tehnologies />  
    </div>;
}


const Header = () => {
  return  <div>
      <a href="#s">Home</a>
      <a href="#s">New Feed</a>
      <a href="#s">Messages</a>
    </div>;
}

const Tehnologies = () => {
  return <div className="App">
  <ul>
    <li>css</li>
    <li>html</li>
    <li>js</li>
    <li>dima</li>
  </ul>
</div>
}

export default App;
