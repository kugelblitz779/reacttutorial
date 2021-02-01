import './App.css';
import UseeffectCounter from './components/UseeffectCounter';
import UseEffectOnce from './components/UseEffectOnce';
import UseStateCounter from './components/UseStateCounter';
import UseStateobject from './components/UseStateobject';
import UseStateprev from './components/UseStateprev';

function App() {
  return (
    <div className="App">
      {/* <UseStateCounter /> */}
      {/* <UseStateprev /> */}
      {/* <UseStateobject /> */}
      {/* <UseeffectCounter /> */}

      <UseEffectOnce />
    </div>
  );
}

export default App;
