import React from 'react';
import Button from "./components/Button/button";
// import Button, { ButtonType, ButtonSize } from "./components/Button/button";

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        Button组件
      </header>
      <Button disabled className='cust'>Button</Button>
      <Button btnType='primary' size='lg' onClick={(e) => { console.log(e) }}>TestButton</Button>
      <Button btnType='link' href='https://www.baidu.com' target='_blank'>baidu</Button>
    </div>
  );
}

export default App;
