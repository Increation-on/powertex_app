import React from 'react';
import styles from './styles/product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import axios from 'axios';
import membrane from './../images/C80.jpg';

const Product = () => {

  const params = useParams();
  const paramsId = Number(params.id);
  const productID = paramsId - 1;

  const [detailedProducts, setDetailedProducts] = useState();

  useEffect(() => {
    axios.get('/mocks/DetailedProducts.json').then(response => {
      const data = response.data;
      setDetailedProducts(data);
    }).catch(err => console.log(err));
  }, []);



  return (
    <div className={styles.product_main}>
      <div className={styles.product_wrapper}>
        <h1 className={styles.product_title}>Powertex M</h1>
        <p className={styles.product_description_short}>Гидро-ветрозащита</p>
        <img src={membrane} alt="membrane" className={styles.product_img} />
        <div className={styles.product_tabs}>
          <Tabs disableUpDownKeys={true}>
            <TabList>
              <Tab defaultfocus="true"><div className={styles.tabs_header}>Описание</div></Tab> 
              <Tab><div className={styles.tabs_header}>Применение</div></Tab>
              <Tab><div className={styles.tabs_header}>Технические характеристики</div></Tab>
            </TabList>
            <TabPanel>
              <div className={styles.product_description_wrapper}>
                <div className={styles.product_description_title}>
                  <h1>Супердиффузионная мембрана</h1>
                  <h1>премиум класса POWERTEX M</h1>
                </div>
                <p className={styles.product_description}>
                  <b>Супердиффузионная мембрана </b>— одна из современных и востребованных разновидностей гидро-ветрозащитных мембран. Основная функция — защита утеплителя в конструкции кровли и фасадов от
                  разрушающего влияния внешних факторов (протечки кровли или фасада) и вывода излишков пара из
                  конструкции здания. Мембрана выпускается поверхностной плотностью от 60 до 180г/м?. Стандартная
                  ширина материала 1500 мм.Рабочие температуры эксплуатации от -40<sup>o</sup> до +80<sup>o</sup>, состав материала
                  100% полипропилен.
                </p>
                <p className={styles.product_description}><b></b>
                  <b>Супердиффузионная мембрана По структуре мембрана представляет собой</b> - внешние два слоя нетканого материала (с УФ-стабилизатором) защищают внутренний слой паропроницаемой пленки (функциональная полипропиленовая
                  «дышащая» пленка, придающая мембране свойства высокой паропроницаемости и гидроизоляции)
                  дублируются ультразвуковым способом скрепления — это и есть структура супердиффузионных
                  мембран. Как показывает практика реально паропроницаемость мембран POWERTEX, составляет 2300-
                  3500 г/м<sup>2</sup>/сутки, а в совокупности с высоким показателем гидроизоляции (более 2300 мм.вод.столба)
                  обеспечивает 100% защиту утеплителя от промокания и тем самым исключает потерю теплоизоляци-
                  онных свойств последнего, дополнительно защищая всю конструкцию здания от образования гнили и
                  плесени!
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.schema}> <h1>Применение материала <span>Powertex A</span></h1></div>
            </TabPanel>
            <TabPanel>
              <h2>SpeciFICATIONS</h2>
            </TabPanel>
          </Tabs>
        </div>

      </div>
    </div>
  )
}

export default Product;