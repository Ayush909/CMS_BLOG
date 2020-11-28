import Mydashboard from './components/Mydashboard/Mydashboard';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import Footer from './components/Footer/Footer';
// import ImageUpload from './components/ImageUpload/ImageUpload';
// import Test from './components/ImageUpload/Test';
import SingleCategory from './components/SingleCategory/SingleCategory';

function App(props) {

  
  const pathname = window.location.pathname;
  

  return (
   <Router>
     
     {pathname === '/admin' ? null : <Header/>}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/admin" component={Mydashboard}/>
        <Route path="/post/:id" component={SinglePost}/>
        <Route path="/category/:id" component={SingleCategory}/>
        {/* <Route path="/image" component={ImageUpload}/> */}
        {/* <Route path="/test" component={Test}/> */}
      </Switch>
      <Footer/>
     
   </Router>

  );
}

export default App;
