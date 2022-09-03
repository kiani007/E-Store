import Header from './components/Header'
import Photos from './pages/photos'
import Cart from './pages/Cart'
import Footer from "./components/Footer"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className='App'>
        <Header />
      <Routes>

        <Route exact path='/' element={<Photos />} />
        <Route  path='/cart' element={<Cart />} />
        
      </Routes>
    
      {/* <Footer/> */}
    </div>
  )
}

export default App
