import React from 'react';
import styles from './styles/payment.module.css';
import { Helmet } from 'react-helmet';

const Payment = () => {
  return (
    <>
     <Helmet>
        <title>Powertex</title>
        <meta name="description" content="Вы можете зарезервировать и купить товар Powertex, позвонив или написав нам с указанием наименования и кол-ва товара. После оплаты наш менеджер свяжется с Вами для согласования доставки, либо самовывоза." />
      </Helmet>
     <div className={styles.payment_wrapper}>
      <div className={styles.payment_bg}>
        <div className={styles.payment}>
          <h1 className={styles.payment_header}>Способы Оплаты</h1>
          <p>Оплата товара производится только в белорусских рублях.</p>
          <p className={styles.payment_description}>Безналичный расчет для юр лиц:
            <br />Вы можете зарезервировать и купить товар, позвонив или написав нам с указанием наименования и кол-ва товара.
            После оплаты наш менеджер свяжется с Вами для согласования доставки, либо самовывоза.
          </p>
          <p><b>Банковские реквизиты:</b>
            <br />
            <br />УНП: 193620401, р/c: BY 40 PJCB 3012 0717311000000 933 в Приорбанк ОАО
            <br />
            <br />БИК: PJCBBY2X
          </p>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Payment;