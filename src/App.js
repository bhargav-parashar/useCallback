import {useState, memo, useMemo, useCallback} from 'react';

const calculateMultipliedCount1 = (value) =>{
  console.log("Calculating multipliedCount1");
  return value * 2;
}

const calculateMultipliedCount2 = (value) =>{
  console.log("Calculating multipliedCount2");
  return value * 3;
}

const ShowMultipliedCount = ( {count1, count2,incrementCount1} ) =>{
  console.log("rendered showMultipliedCount"); //THIRD
  
  //useMemo(callback,[])

  const multipliedCount1 = useMemo(()=>calculateMultipliedCount1(count1),[count1]) ;
  const multipliedCount2 = useMemo(()=>calculateMultipliedCount2(count2),[count2]) ;

  return(
    <>
      <p>Multiplied Count1 : {multipliedCount1} </p>
      <p>Multiplied Count2 : {multipliedCount2} </p>
    </>
    
  )
};

//memo
const MemoisedShowMultipliedCount = memo(ShowMultipliedCount);

console.log("rendered file App.js");  //FIRST

function App() {
  console.log("rendered App");  //SECOND

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // const incrementCount1 = ()=>setCount1((prev)=>prev+1);

  //USECALLBACK
     const incrementCount1 = useCallback( ()=>setCount1((prev)=>prev+1), [setCount1])  ;

  return (
    <>
      <h2>Hello From App.js</h2>
      <h2>useCallback</h2>
      <button onClick={incrementCount1}>{`Count 1 : ${count1}`}</button>
      <button onClick={()=>setCount2((prev)=>prev+1)}>{`Count 2 : ${count2}`}</button>
      <button onClick={()=>setCount3((prev)=>prev+1)}>{`Count 3 : ${count3}`}</button>
      <MemoisedShowMultipliedCount count1 = {count1} count2={count2} incrementCount1={incrementCount1} />
    </>
  );
}

export default App;
