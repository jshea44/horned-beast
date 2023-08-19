import './App.css'
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';




class App extends React.Component {
  
  
 

  render() {
    return (
      
        <div>
          <Header />

          <Gallery />
          <Footer />
        </div>
        

    )
  }
}

export default App;
