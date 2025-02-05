
import React, { useState, useEffect } from "react";
const Cmp01 = () => {
    const [greeting, setGreeting] = useState('Full Stack Training with Rony');
// //   const[greeting,setGreeting] = useState('Full Stack Training with Rony')
// //   // Use useEffect to trigger the alert after the component has mounted
    useEffect(()=>{

    },[]);
    useEffect(() => {
        //alert(greeting); // Alert when the component renders
        }, [greeting]); // Runs when 'greeting' changes
    return(
      <div>
            <HeadLine headline={greeting}/>
            <Fady value={greeting} OnChangeInput={(e)=>{setGreeting(e.target.value)}}>
              BlaBlaBla
            </Fady>
      </div>
    )
}
const HeadLine = ({headline})=><h1>{headline}</h1>;

const Fady = ({value, onChangeInput, children})=>{
    return(<label>
      {children}<br />
      <input type="text" value={value} onChange={onChangeInput}/><br/>
      {children}<br />
    </label>
    );  
}
export default Cmp01;
//     const [name,setName] = useState('Rony')
//     const [greeting,f1] = useState('Ghassan')
//     const [count,setCount] = useState(1)  
//     const [obj,setObj] = useState({id:1, name:'Afif'})
//     const [arr,setArr] = useState([1,2,3,4,5])
//     const [data,setData] = useState(['Ghassan','Afif','Hiba'])
//   return (
//     <>
//       <input
//         type="text"
//         value={name} onChange={(e)=>{setName(e.target.value)}} />
//       <h1>{greeting} -{count}-{obj.name}</h1>
//       <button onClick={() => f1('Razan')}>Change my name</button>
//       <button onClick={() => {setCount(count +1)}}>Change count</button>
//       {/*<button onClick={() => {setObj()}}>Change Obj</button>
//       <button onClick={() => {setArr([1,2,3,4,5,])}}>Array</button>
//       <button onClick={() => {setData(['Ghassan','Afif','Hiba'])}}>Array of Names</button>*/}
//         {
//             data.map((entry) => {
//                 return(<h3>{entry}</h3>)
//             })
//         }
//     </>
//   )
// }

// export default Cmp01;


// //const Cmp01= ({value,p2})=>{return (<h1>{value}:{p2} </h1>)};


// // function test(a,b)
// // {
// //     return a+b;
// // }

// // function test2(obj)
// // {
// //     return obj.a + obj.b *obj.x;
// // }

// // function test3 ({fname, lname, email})
// // {

// // }
// // function test(f1,a,b)
// // {
// //     f1(a);
// //     console.log(a);
// //     console.log(b);
// // }
// // test((x)=>{alert(x),2.3});
// // // function betred function:
// // function test(a,b)
// // {
// //     return()=>{alert(a+b)}
// // }
// // let x = test(2,3)
// //  x(); // alert(5)
// //  test(2,3)()
// // //function array ma 3refet shou betred!!!
// // function test(a,b)
// // {
// //     return [a,b];
// // }
// // test(2,3);
// // function ma 3refet shou betred!!!
// function test(f1,a)
// {
//     return [f1,a];
// }

// let x = test((x)=>{alert(x)},2)