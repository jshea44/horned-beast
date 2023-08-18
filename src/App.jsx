import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import SortingForm from './Components/Form';


function App() {
  
  
  // const filterByHorns = (selectedHorns) => {
    
  // };

  return (
    
      <div>
        <Header />
        <SortingForm /> {/* Pass down the function */}
        <Gallery />
        <Footer />
      </div>
      
  
  )
}

export default App;
