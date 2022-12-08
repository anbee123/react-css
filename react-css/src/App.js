
import './App.css';
import Button1 from './components/example-1-normal-css/Button'
import Button2 from './components/example-2-inline-css/Button'
import Button3 from './components/example-3-css-in-js/Button'
import Button4 from './components/example-4-styled-components/Button'
import Button5 from './components/example-5-css-modules/Button'
import Button6 from './components/example-6-sass/Button'

function App() {
  return (
    <div className="App">
      {/* Example 1 normal css - with a class passed in as props */}
     <Button1 buttonText="Example 1" theme="light"/>
     {/* example 2 inline css */}
     <Button2 buttonText="Example 2" bgcolor="pink" />
     {/* example 3 css in js */}
     <Button3 buttonText="Example 3" color="#24292e" bgcolor="#f7df1c" />
     {/* example 4 styled components */}
     <Button4 buttonText="Example 4" bgcolor="#86ba8a" />
     < Button5 buttonText="Example 5" />
     <Button6 buttonText="Example 6" />
    </div>
  );
}

export default App;