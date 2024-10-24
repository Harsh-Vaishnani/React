// import React, { useEffect, useState } from "react";

// const APIData = "https://fakestoreapi.com/products";

// function API() {
//   const [users, setUsers] = useState([]);

//   const fetchUser = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.length > 0) {
//         setUsers(data);
//       }
//       console.log(data);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     fetchUser(APIData);
//   }, []);

//   return (
//     <>
//       <h1>Product List</h1>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px" }}>Title</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px" }}>Description</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px" }}>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.title}</td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>${user.price}</td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.description}</td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.category}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default API;

// import React, { useEffect, useState } from "react";

// const APIData = "https://fakestoreapi.com/products";

// function API() {
//   const [usersData, setUsersData] = useState([]);

//   const fetchUser = async (url) => {
//     try {
//       const data = await fetch(url);
//       const show = await data.json();
//       console.log(show);
//       setUsersData(show);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     fetchUser(APIData);
//   }, []);

//   return (
//     <>
//       <h1>Product Data</h1>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//             {usersData.map((user)=>(
//                 <tr key={user.id}>
//                     <td>{user.title}</td>
//                 </tr>
//             ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default API;




import React, { useEffect } from 'react'
const APIData = "https://fakestoreapi.com/products";

function API() {
  
const fetchUser = async() =>{
  const data = await fetchUser
}

  useEffect(()=>{
    fetchUser();
  },[])


  return (
    <>
      
    </>
  )
}

export default API
