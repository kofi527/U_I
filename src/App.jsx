import './index.css';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="mt-8">
        <AddEmployee />
      </div>
    </div>
     
  );
}

export default App;
