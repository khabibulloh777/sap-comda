import './App.css';
import HomePages from './pages/Home-pages/HomePages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './pages/Products/Products';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/BannerOne/Home';
function App() {
  return (
    <Router>
    <div className="app">
    <Header/>
      <Switch>
       <Route exact path="/" component={HomePages} />
        <Route exact path="/Products" component={Products}/>
         <Route exact path="/Customes" component={Products} />
        <Route exact path="/integrated" component={Home} /> 
        </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
