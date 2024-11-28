import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const [students,setStudents]=  useState(null)
    const nav = useNavigate()

  useEffect(()=>{
    fetch('http://localhost:5001/students')
    .then((res)=>{return res.json()})
    .then((data)=>{setStudents(data)})
  })

  const handleView = (id)=>{
    // console.log(id)
    // nav(`/view/${id}`)
    nav('/view/'+id);
  }

  const handleDelete = (id)=>{

    console.log(id)
    fetch(`http://localhost:5001/students/`+id,{
      method:"delete",
      headers:{"content-type":"application/json"},
  })

  }
  return (
    <div>
      <div className="container">
      {/* {console.log(students)} */}
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div>
              <Link to='/add' className="btn btn-warning my-2">Add New</Link>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody> 
                 {students && students.map((student)=>(
                     <tr key={student.id}>
                     <th scope="row">1</th>
                     <td>{student.name}</td>
                     <td>{student.email}</td>
                     <td>
                       <Link to={`/view/${student.id}`} className="btn btn-info">View</Link>
                       {/* <button onClick={()=>{handleView(student.id)}} className="btn btn-info">View</button> */}
                       <Link  to={`/edit/${student.id}`} className="btn btn-success mx-2">Edit</Link>
                       <button
                       onClick={()=>{handleDelete(student.id)}}
                       className="btn btn-danger">Delete</button>
                     </td>
                   </tr>
                 ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
