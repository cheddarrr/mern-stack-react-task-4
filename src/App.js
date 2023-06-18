import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [data, setData] = useState([]);
  useEffect(()=>{        
      Axios.get('https://dummyjson.com/users')
      .then((res)=>{
          if(res.status===200)
          {
              setData(res.data.users);
          }
          else{
              Promise.reject();
          }
      })
      .catch((err)=>{
          alert(err);
      })
      },[])

  return (
    <div className="App">
      <div>
        <div class="p-4">Records Fetched</div>
          <table class="table table-striped table-dark">
            <thead class="thead-dark">
              <tr>
                <th>ID</th> 
                <th>First Name</th> 
                <th>Last Name</th> 
                <th>Age</th> 
                <th>Gender</th> 
                <th>E-mail</th> 
                <th>Phone</th> 
                <th>Username</th> 
                <th>Date of birth</th> 
                <th>Image</th> 
                <th>Height</th> 
                <th>Weight</th> 
                <th>City</th> 
                <th>Latitude</th> 
                <th>Longitude</th> 
                <th>Card Expiry Date</th> 
                <th>Company Name</th>  
              </tr>
            </thead>
            {(data.map((val,ind)=>{
                return <tr>
                    <td>{val.id}</td>
                    <td>{val.firstName}</td> 
                    <td>{val.lastName}</td> 
                    <td>{val.age}</td> 
                    <td>{val.gender}</td> 
                    <td>{val.email}</td> 
                    <td>{val.phone}</td> 
                    <td>{val.username}</td> 
                    <td>{val.birthDate}</td> 
                    <td><img src={val.image}></img></td> 
                    <td>{val.height}</td>
                    <td>{val.weight}</td> 
                    <td>{val.address.city}</td> 
                    <td>{val.address.coordinates.lat}</td> 
                    <td>{val.address.coordinates.lng}</td> 
                    <td>{val.bank.cardExpire}</td> 
                    <td>{val.company.name}</td>     
                  </tr>
                }))}
            </table>
        </div>
    </div>
  );
}

export default App;
