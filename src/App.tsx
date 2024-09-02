import './App.css'
import Products from './components/Products'
import DashBoard from "../src/components/DashBoard"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
    <div className='container'>
    <DashBoard />
     <Products />
    </div>
  )
}

export default App
