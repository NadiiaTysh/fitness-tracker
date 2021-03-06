import React from 'react';

import Styles from '../dashboard/styles/index.module.scss';

import { useDashboard } from '../dashboard/hooks/useDashboard';
import { Sidebar } from '../components/sidebar/index';
import { Header } from '../components/header/indexLinkToMain';
import { Question1 } from '../components/question1/index';
import { Widget } from '../components/widget/index';

export const Breakfast = () => {
  const {
    handleClick,
    dataReceived,
    data,
    handleLogout,
  } = useDashboard();
  
  return (
    <section className={Styles.dashboard}>
      <Sidebar dataReceived={dataReceived} data={data} />
      <div className={Styles.wrap}>
        <Header
          handleClick={handleClick}
          handleLogout={handleLogout}
          data={data}
          dataReceived={dataReceived}
        />
        <div className={Styles.content}>
          <Question1
            label="Ты сегодня завтракал?"
            name="breakfast"
            options={[
              {value: "none", name: "Я не завтракал"},
              {value: "light", name: "У меня был легкий завтрак"},
              {value: "heavy", name: "Я очень плотно покушал"}
            ]}
          />
          <Widget />
        </div>
      </div>
    </section>
  );
};
