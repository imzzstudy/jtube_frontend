import React from "react";
import "./App.css";
import VIcon from "components/atoms/Icon/Icon";
import Button from './components/atoms/Button/Button';
import Card from 'components/atoms/Card/Card';
import { DiAtom } from "react-icons/di";
import Label from 'components/atoms/Label/Label';
import AvaTar from 'components/atoms/Avatar/Avatar';
import Title from 'components/atoms/Title/Title';

const App: React.FC = () => {
  const onClickHandler = (event?:React.MouseEvent) => {
    console.log('Click Button')
  }

  return (
    <div>
      <h2>Hi typescript!</h2>
      <VIcon></VIcon>
      <Button 
        primary
        size='large'
        onClick={onClickHandler}
      >
        <DiAtom size="24px" spacing="4"/> <p>Button</p> <img width="24px" alt='cat' src="https://i.ibb.co/3493r17/cat.jpg"/>
      </Button>
      <Button 
        background='#11AE3B'
        size='medium'
        onClick={onClickHandler}
      >
        <DiAtom size="24px" spacing="4"/> <p>Button</p> <img width="24px" alt='cat' src="https://i.ibb.co/3493r17/cat.jpg"/>
      </Button>
      <Button 
        size='small'
        onClick={onClickHandler}
      >
        <DiAtom size="24px" spacing="4"/> <p>Button</p> <img width="24px" alt='cat' src="https://i.ibb.co/3493r17/cat.jpg"/>
      </Button>
      
      <Card>
        <button>asd</button>
      </Card>
      <Label htmlFor='asd'>asd</Label>
      <input id="asd" type="text" />
      <AvaTar src="https://i.ibb.co/3493r17/cat.jpg"/>
      <Title
        bold
        size='24px'
      >asd</Title>
    </div>
  );
};

export default App;
