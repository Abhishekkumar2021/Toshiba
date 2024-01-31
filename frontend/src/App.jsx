import './styles/App.scss'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
