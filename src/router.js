import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css'

import Header from './components/header'
import Home from './container/Home'
import About from './container/About'
import Redux from './container/Redux'
import Info from './components/Info'
import AboutInfo from './components/AboutInfo'


class App extends Component {
   render(){
       return (
         <Router>
            <Switch>
                <Route path="/" render={()=>
                    <Header> 
                        <Switch>          
                            <Route path="/" exact component={Home}/>   
                            <Route path="/home" component={Home}/>                                                                                                                
                            <Route path="/about" component={About}/>  
                            <Route path="/redux" component={Redux}/>                      
                            <Route path="/info/:infoId" component={Info}></Route>                                                      
                            <Route path="/aboutInfo" component={AboutInfo}></Route>                        
                        </Switch>                               
                    </Header>         
                } ></Route>
            </Switch> 
         </Router>
       )
   }
}


export default App;
ReactDOM.render(<App/>,document.getElementById("root"));
