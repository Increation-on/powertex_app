import styles from './styles/main.module.css';
import { Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './../UI/Loader';
import MainProductCardFallback from './MainProductCardFallback';
import { Helmet } from 'react-helmet';

const LazyProductCard = React.lazy(() => import('./MainProductCard'));


const Main = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {

    axios.get('/mocks/products.json').then(response => {
      const data = response.data;
      setProducts(data);
    }).catch(err => console.log(err));

  }, []);


  return (
    <>
     <Helmet>
        <title>Powertex</title>
        <meta name="description" content="Приобрести в Минске гидроизоляцию, ветрозащиту, пароизоляцию, гидро-ветрозащитную мембрану для защиты элементов кровли, утеплителя от влаги, пара, конденсата" />
      </Helmet>
      <main className={styles.main}>
        <div className={styles.main_wrapper}>
          <div className={styles.animation_top}></div>
          <div className={styles.animation_left}>Сильная изоляция</div>
          <div className={styles.animation_right}>Для вашего дома</div>
        </div>
        <div className={styles.main_wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,266.7C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
        <div className={styles.about_description}>
          <h1>О НАС</h1>
          <p>
            Брэнд Powertex был ос&shy;но&shy;ван в 2016 го&shy;ду и за это вре&shy;мя
            про&shy;де&shy;мон&shy;стри&shy;ро&shy;вал се&shy;бя, как ди&shy;на&shy;мич&shy;но раз&shy;ви&shy;ва&shy;ю&shy;щий&shy;&shy;ся.
            Ре&shy;а&shy;ли&shy;зу&shy;е&shy;мая на&shy;ми про&shy;дук&shy;ция вклю&shy;ча&shy;ет в се&shy;бя
            теп&shy;ло&shy;изо&shy;ля&shy;ци&shy;он&shy;ные ма&shy;те&shy;ри&shy;а&shy;лы, гид&shy;ро&shy;изо&shy;ля&shy;ци&shy;он&shy;ные ма&shy;те&shy;ри&shy;а&shy;лы,
            и па&shy;ро-гид&shy;ро&shy;изо&shy;ля&shy;ци&shy;он&shy;ные ма&shy;те&shy;ри&shy;а&shy;лы для внут&shy;рен&shy;ней и на&shy;руж&shy;ной от&shy;дел&shy;ки.
            Мы стре&shy;мим&shy;ся предо&shy;ста&shy;вить на&shy;шим кли&shy;ен&shy;там наи&shy;луч&shy;шее ка&shy;че&shy;ство по разумной цене.
            На&shy;ши про&shy;дук&shy;ты про&shy;шли стро&shy;гие ис&shy;пыта&shy;ния и по&shy;лу&shy;чи&shy;ли сер&shy;ти&shy;фи&shy;ка&shy;ты ка&shy;че&shy;ства.
          </p>
          <p>
            Без&shy;услов&shy;ным пре&shy;иму&shy;ще&shy;ством мы счи&shy;та&shy;ем на&shy;ших со&shy;труд&shy;ни&shy;ков. На&shy;ши со&shy;труд&shy;ни&shy;ки —
            это вы&shy;со&shy;ко&shy;ква&shy;ли&shy;фи&shy;ци&shy;ро&shy;ван&shy;ные спе&shy;ци&shy;а&shy;ли&shy;сты, зна&shy;ю&shy;щие и лю&shy;бя&shy;щие свое де&shy;ло. Мы
            все&shy;гда ста&shy;ра&shy;ем&shy;ся от&shy;вет&shy;ствен&shy;но под&shy;хо&shy;дить  к сво&shy;е&shy;му тру&shy;ду.
          </p>
          <p>
            Мы ра&shy;ды вме&shy;сте с Ва&shy;ми рас&shy;смот&shy;реть и по&shy;ду&shy;мать над все&shy;ми
            по&shy;же&shy;ла&shy;ни&shy;я&shy;ми и ню&shy;ан&shy;са&shy;ми, про&shy;кон&shy;сульти&shy;ро&shy;вать, по&shy;со&shy;ве&shy;то&shy;вать,
            по&shy;мочь опре&shy;де&shy;лить&shy;ся с вы&shy;бо&shy;ром, для то&shy;го, что&shy;бы сде&shy;лав один раз, Вы как мож&shy;но доль&shy;ше
            не воз&shy;вра&shy;ща&shy;лись к этим во&shy;про&shy;сам.
            Глав&shy;ное для нас – это
            до&shy;ве&shy;рие и ува&shy;же&shy;ние к на&shy;шим кли&shy;ен&shy;там и по&shy;ку&shy;па&shy;те&shy;лям!
          </p>
          <Link className={styles.main_about_description_button} to='/about'>Узнать больше</Link>
        </div>


        <div className={styles.main_products}>
          <h1>Наша продукция</h1>
          <div className={styles.products_wrapper}>
            {products ? products.map(product => {
              return (
                product.id <= 4 ? <Suspense key={product.id} fallback={<MainProductCardFallback key={product.id} product={product} />}>
                  <LazyProductCard key={product.id} product={product} />
                </Suspense> : null
              )
            }) : <Loader />}
          </div>
          <Link className={styles.main_about_description_button} to='/products'>Узнать больше</Link>
        </div>

      </main>

    </>



  )
}

export default Main;