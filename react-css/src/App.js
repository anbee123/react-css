
import './App.css';
import Button1 from './components/example-1-normal-css/Button'
import Button2 from './components/example-2-inline-css/Button'

function App() {
  return (
    <div className="App">
      {/* Example 1 normal css - with a class passed in as props */}
     <Button1 buttonText="Example 1" theme="light"/>
     <Button2 buttonText="Example 2" bgcolor="pink" />
    </div>
  );
}

export default App;