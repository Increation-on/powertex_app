import React from 'react';
import styles from './styles/delivery.module.css';
import { Helmet } from 'react-helmet';

const Delivery = () => {
  return (
    <>
      <Helmet>
        <title>Powertex - Доставка</title>
        <meta name="description" content="Осуществляем доставку, условия доставки договорные. Индивидуальный поход к каждому клиенту." />
      </Helmet>
      <div className={styles.delivery_wrapper}>
        <div className={styles.delivery_bg}>
          <div className={styles.delivery}>
            <h1 className={styles.delivery_header}>Доставка</h1>
            <p>Осуществляем доставку, условия доставки договорные.
              Индивидуальный поход к каждому клиенту.</p>
            <p className={styles.delivery_description}>
              Вывоз товара со склада осуществляется после оформления заказа у Вашего менеджера в рабочее время:
              <br /> <span>ПН-ПТ: с 9:00 до 17:00</span>
              <br /> по адресу:<span> г. Минск ул. Cелицкого 113/2</span>
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Delivery