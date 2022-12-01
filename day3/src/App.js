import './App.css';
import Header from './components/Header';
import BasicForm from './components/Form';
import BasicForm2 from './components/Form/form2';

function App() {
  return (
    <div className="App">
      <Header />
      <br /><br /><br />
      <BasicForm2 />
      <br /><br /><br />
      <BasicForm />
    </div>
  );
}

export default App;