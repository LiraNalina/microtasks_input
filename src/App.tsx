import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';


function App() {

  const [goods, setGoods] = useState([
    { goods: '' }
  ])

  const addGoods = (title: string) => {
    let newItem = { goods: title }
    setGoods([newItem, ...goods])
  }

  return (
    <div className="App">
      <FullInput addGoods={addGoods} />

      {/* <Input setTitle={setTitle} title={title} />
      <Button name='+' callBack={callBackButtonHandler} /> */}

      {goods.map((el, index) => {
        return (
          <div key={index}>{el.goods}</div>
        )
      })}
    </div>
  );
}

export default App;
