import Ref from "./components/Ref";
import { useReducer, useCallback, useState } from "react";
import Button from "./components/ultilities/Button";
import buttonStyles from './styles/button-styles'
import FormattedBlocks from "./components/FormattedBlocks";
import Header from './components/Header'
import Description from "./components/Description";

function App() {
  const useForceUpdate = () => {
    const [, updateState] = useState();
    return useCallback(() => updateState({}), []);
  }
  
  let title = '30 Days of React'
  let name = 'Hexadecimal Colors'
  return (
    <div className="App">
      <Header message={title} />
      <Description message={name} />
      <Button text={'Generate'} style={buttonStyles} onClick={useForceUpdate()} />
      <FormattedBlocks />
      {/* <Ref /> */}
    </div>
  );
}

export default App;
