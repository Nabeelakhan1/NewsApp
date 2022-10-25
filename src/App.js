
// import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})

  }
  
  render() {
    
    return (
      <>  
      
       
       
        {/* <NewsContainer setProgress={setProgress} pageSize={9} country="in" category="technology"/> */}
        
        <Router>
        <NavBar/>
        <LoadingBar
        color='red'
        progress={this.state.progress}
        
      />
        {/* <NewsContainer setProgress={setProgress} pageSize={9} country="in" category="general"/> */}
        <Routes>
        <Route  path="/" element={<NewsContainer setProgress={this.setProgress}  pageSize={9} country="us" category="general"/>}/>
          
          <Route  path="/general" element={<NewsContainer setProgress={this.setProgress} key="general" pageSize={9} country="us" category="general"/>}/>
          <Route exact path="/entertainment" element={<NewsContainer setProgress={this.setProgress} key="entertainment" pageSize={9} country="us" category="entertainment"/>}/>
          <Route exact path="/business" element={<NewsContainer setProgress={this.setProgress} key="business" pageSize={9} country="us" category="business"/>}/>
          <Route exact path="/health" element={<NewsContainer setProgress={this.setProgress} key="health" pageSize={9} country="us" category="health"/>}/>
          <Route exact path="/science" element={<NewsContainer setProgress={this.setProgress} key="science" pageSize={9} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<NewsContainer setProgress={this.setProgress} key="sports" pageSize={9} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<NewsContainer setProgress={this.setProgress} key="technology" pageSize={9} country="us" category="technology"/>}/>
                  
        </Routes>
     
     
    </Router>
         
     </>
    
        
        
    )
  }
}



