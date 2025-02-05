// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const[id,setId] = useState(0);
//   const[name,setName]=useState('')
//   const [data, setData] = useState([
//     { id: 1, name: 'Osman', grade: 10, isHonor: true },
//     { id: 2, name: 'Perla', grade: 11, isHonor: false },
//     { id: 3, name: 'Razan', grade: 12, isHonor: false },
//     { id: 4, name: 'Maria', grade: 13, isHonor: false },
//     { id: 5, name: 'Michel', grade: 14, isHonor: true },
//   ]);
//   const [title, setTitle] = useState('Razan');
//   const getData=()=>{
//     axios
//     .get('http://localhost:3000/students') // Make sure to use HTTP (not HTTPS)
//     .then(function(response) {
//       console.log(response.data);  // Log the response data
//       let _server_data = response.data.map(student => ({
//         id: student.id,
//         name: student.name,
//         isHonor: student.isHonor, // use data from API (set isHonor dynamically)
//       }));
//       setData(_server_data);
//     })
//     .catch(function(error)  {
//       console.error(error);
//     })
//     .catch(function(error){
//       console.log(error);
//     })
//     .finally(function(){
//     });
//   }

//   // Fetch data from API
//   useEffect(() => {
//     getData();
//   }, []);  // Empty dependency array to call this effect only once when component mounts

//   // Function to clear data
//   const clearData = () => {
//     setTitle('Rony');
//     setData([]);
//   };

//   const createStudent = ()=>{
//       fetch('http://localhost:3000/createStudent',{
//         method:'POST',
//         headers:{
//           'Content-Type':'application/json'
//           },
//           body:JSON.stringify({
//             id:id,
//             name:name,
//           })
//       })
//       .then(response =>{ 
//         setId(0);
//         setName('');
//         getData();
//       })
//       .then(data => console.log(data))
//       .catch(error => console.error('Error:', error));
//   }
//   return (
//     <>
//       <button 
//       onClick={()=>{
//         clearData();
//       }}
//       >
//         clear Data
//       </button>
//       <input type='text'value={id} onChange={(e)=>{setId(e.target.value)}}/>
//       <input type='text'value={id} onChange={(e)=>{setName(e.target.value)}}/>
//       <button onclick={()=>{createStudent}} disabled={name == ''|| id == 0}>Create Student</button>
//       <ul>
//         {data.map((student) => {
//           return <li key={student.id}>{student.name}</li>;
//         })}
//       </ul>
//     </>
//   );
// };

// export default App;
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './style.css';

const App = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get('http://localhost:3000/students')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const createStudent = () => {
    fetch('http://localhost:3000/createStudent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name }),
    })
      .then(() => {
        setId(0);
        setName('');
        getData();
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="app-container">
      <button className="clear-btn" onClick={() => setData([])}>Clear Data</button>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
        placeholder="Enter ID"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <button
        onClick={createStudent}
        disabled={name === '' || id === 0}
      >
        Create Student
      </button>
      <ul>
        {data.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
