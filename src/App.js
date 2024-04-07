import { useState } from "react";
import styles from './style.module.css'

function App() {

  const [inputState, setInputState] = useState({
    show: false,
    value: '',
  });

  const [deals, setDeals] = useState([]);


  function buttonAdd_onClick_showInput() {
    setInputState({ ...inputState, show: true })
  }

  function input_onChange(e) {
    setInputState({ ...inputState, value: e.target.value })
  }

  function buttonSave_onClick_saveInput() {
    setDeals([...deals, inputState.value])
    setInputState({ ...inputState, show: false, value:'' });
  }

  function buttonDel_onClick(index){
    const updatedDeals = deals.filter((_, i) => i !== index);
    setDeals(updatedDeals);
  }

  function ch(e, ind) {
    setDeals(prev=>prev.map((item,index)=>{
      if (ind===index){
        item=e.target.value
      }
      return item
    }
    ));
}

  const rDeals = deals.map((item,index)=>{
    return(
      <Deal
        item={item}
        index={index}
        buttonDel_onClick={buttonDel_onClick}
        ch={ch}
      />
    ) 
  })

  return (
    <div className={styles.container}>
      <div className={styles.deals}>
        {rDeals}
      </div>
      <div className={styles.work_space}>
        <button className={styles.buttonAdd} onClick={() => buttonAdd_onClick_showInput()}>Добавить</button><br />
        {inputState.show
          ? <div>
            <input className={styles.input} value={inputState.value} onChange={(e) => input_onChange(e)} /> <br />
            <button className={styles.buttonSave} onClick={() => buttonSave_onClick_saveInput()}>Сохранить</button>
          </div>
          : null}<br />

      </div>
    </div>
  )
}

function Deal({item, index, buttonDel_onClick,ch}){
  const [done, setDone] = useState(false);
  const [red, setRed] = useState(false);

  function buttonDone_onClick(){
    setDone(!done);
  }

  function click(){
    setRed(true);
  }

  function onBlur(){
    setRed(false);
  }

  return(
      <div key={index} className={styles.container2}>
        <div style={done?{textDecoration: 'line-through'}:{textDecoration: 'none'}} onClick={()=>click()}>
          {red
            ?<input value={item} onChange={(e)=>ch(e,index)} onBlur={()=>onBlur()}/>
            :item}
          </div>
        <div>
          <button className={styles.buttonDone} onClick={()=>buttonDone_onClick()}>done</button>
          <button className={styles.buttonDel} onClick={()=>buttonDel_onClick(index)}>x</button>
        </div>
      </div>
  )
}

export default App;