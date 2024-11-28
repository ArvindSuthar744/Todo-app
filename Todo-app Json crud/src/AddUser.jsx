import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();
        // console.log({name,email})

        const jsonData = {name,email};

        fetch('http://localhost:5001/students',{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(jsonData)
        })
        .then((res)=>{
            if(res)
            {
                alert('Record inserted..!');
                navigate('/')
            }
        })

    }


  return (
    <div>
      <div className="container">
        {/* {console.log(students)} */}
        <div className="row text-start justify-content-center">
          <div className="col-xl-6">
            <div>
              <Link to="/" className="btn btn-warning my-2">
                Go back
              </Link>
            </div>
            <div>
              <form onSubmit={handleSubmit}>

              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
            

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
