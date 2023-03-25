import { useEffect, useState } from "react";

import TBody from "./TBody";
import THead from "./THead";


export default function App() {
    const columns =[
        { name: 'Name', getEl: obj => obj.name },
        { name: 'Username', getEl: obj => obj.username },
        { name: 'Email', getEl: obj => obj.email},
        { name: 'Address city', getEl: obj => obj.address?.city },
        { name: 'Companys name', getEl: obj => obj.company?.name },
      ];
    const [error, setError]=useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
   
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // желательно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return <>
         <table className="table">
      <THead columns={columns} />
      
      <TBody items={items} columns={columns} />
    </table>
      </>
     {/* <table> */}
        {/* <thead>
            <tr>
            <td>Name</td> 
              <td>Username</td>
              <td>Email</td>
              <td>Address</td>
              <td>Company's name</td>
            </tr>
            </thead> 
            {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td> 
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}  */}
          
          {/* </table>  */}
          
          }
    
  }