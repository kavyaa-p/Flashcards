import './App.css';
import Card from './components/Card';
import { flashcardList } from './data';

const App = () => {
  return (
    <>
      {/* Background div */}
      <div className="background"></div>

      {/* Main content */}
      <div className="App">
        <h1>The ultimate test to your geography skills!</h1>
        <h2>How good is your geography? Test your knowledge of countries and capitals here.</h2>
        <p>Total Number of Cards: {flashcardList.length}</p>
        
        <Card />
      </div>
    </>
  );
};

export default App;
