import React from 'react';
import Display from './display';
import Control from './control';
import Runner from './runner';
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_fr from 'react-intl/locale-data/fr';

addLocaleData([...locale_en, ...locale_fr]);

export default () => (
  <div className="flex-column">
    <Display />
    <div className="flex-row ctrl-board">
      <Control min={5} max={120} label="time" />
      <Control min={1} max={30} label="serie" />
      <Control min={5} max={360} label="rest" />
      <Control min={1} max={20} label="loop" />
    </div>
    <Runner />
  </div>
);
