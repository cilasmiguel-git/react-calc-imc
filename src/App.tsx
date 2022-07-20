import { useState } from 'react';
import styles from '../src/App.module.css';
import poweredImage from '../src/assets/powered2.png';
import leftArrowImage from './assets/leftarrow.png'
import {levels,calculateimc, Level} from  './helpers/imc';
import { GridItem } from './components/GridItem';

function App() {
  const [heightField,setheightField] = useState<number>(0)
  const [weightField,setweightField] = useState<number>(0)
  const [toShow,setToShow] = useState<Level|null>(null);
  const handleCalculateButton = () => {
    if (heightField && weightField)
      {
        setToShow(calculateimc(heightField,weightField));console.log(calculateimc(heightField,weightField))
      }
      else
      {
        alert("Digite todos os campos !")
      }
  }
  const handleBackButton = () =>{
    setToShow(null)
    setheightField(0)
    setweightField(0)

  }
  return (
    <div className={styles.main}>
      <header >
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>calcule o seu IMC.</h1>
          <p>O IMC é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura. Também conhecido como Índice de Massa Corporal, o IMC é uma fórmula utilizada por vários profissionais de saúde, incluindo médicos, enfermeiros e nutricionistas, para saber, de uma forma rápida, se a pessoa precisa ganhar ou perder peso.</p>
          <input 
          type="number" 
          placeholder='digite a sua altura.ex:1,5(em metros)' 
          value={heightField > 0 ? heightField : ''} 
          onChange={e => setheightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          <input 
          type="number" 
          placeholder='digite seu peso.ex:73,3(em kg)' 
          value={weightField > 0 ? weightField : ''} 
          onChange={e => setweightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {
            levels.map(
              (item,key)=>(
                <GridItem item={item} key={key}/>
              )
            )
            }
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>

    </div>
  );
}

export default App;
