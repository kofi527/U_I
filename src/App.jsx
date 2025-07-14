import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="font-bold underline text-black">HELLO kenny that is fine job WORLD</h1>
        <button className="rounded-full bg-red-600 px-6 py-2 text-black font-bold">Subscribe</button>
      </div>
    </div>
  );
}

export default App;
