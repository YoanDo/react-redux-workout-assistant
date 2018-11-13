import React from 'react';
import Display from './display';
import Controller from './controller';
import Runner from './runner';

export default () => (
  <div className="flex-column">
    <Display />
    <div className="flex-row ctrl-board">
      <Controller min={5} max={120} label="time" />
      <Controller min={1} max={30} label="serie" />
      <Controller min={5} max={360} label="rest" />
      <Controller min={1} max={20} label="loop" />
    </div>
    <Runner />
  </div>
);
