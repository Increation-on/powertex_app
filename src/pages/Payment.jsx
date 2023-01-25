import React from 'react';
import styles from './styles/payment.module.css';

const Payment = () => {
  return (
    <div className={styles.payment_wrapper}>
      <div className={styles.payment_bg}>
        <div className={styles.payment}>
          <h1 className={styles.payment_header}>Способы Оплаты</h1>
          <p>Оплата товара производится только в белорусских рублях.</p>
          <p className={styles.payment_description}>Безналичный расчет для юр лиц:
            <br />Вы можете зарезервировать и купить товар, позвонив или написав нам с указанием наименования и кол-ва товара.
            После оплаты наш менеджер свяжется с Вами для согласования доставки, либо самовывоза.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Payment;