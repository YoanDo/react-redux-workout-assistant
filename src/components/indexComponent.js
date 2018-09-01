import React from 'react';
import Display from './display';
import Button from './button';
import Timer from './timer';
import Runner from './runner';

export default () => (
  <div>
    <Timer min="5" max="120" defaultValue="30" label="time"/>
    <Timer min="1" max="12" defaultValue="3" label="serie"/>
    <Timer min="5" max="360" defaultValue="30" label="rest"/>
    <Timer min="1" max="20" defaultValue="6" label="loop"/>
    <Runner/>


    /////////
    <Display />
    <Button label="C" domain="clear" />
    <Button label="±" domain="toggle" />
    <Button label="%" domain="percent" />
    <Button label="÷" domain="operation" />
    <Button label="7" domain="number" />
    <Button label="8" domain="number" />
    <Button label="9" domain="number" />
    <Button label="x" domain="operation" />
    <Button label="4" domain="number" />
    <Button label="5" domain="number" />
    <Button label="6" domain="number" />
    <Button label="−" domain="operation" />
    <Button label="1" domain="number" />
    <Button label="2" domain="number" />
    <Button label="3" domain="number" />
    <Button label="+" domain="operation" />
    <Button label="0" domain="number" />
    <Button label="●" domain="dot" />
    <Button label="=" domain="operation" />
  </div>
);
