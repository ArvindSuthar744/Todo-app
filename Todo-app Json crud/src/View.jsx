import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function View() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const { viewId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5001/students/${viewId}`)
      .then((res) => { return res.json() })
      .then((data) => {
        setName(data.name)
        setEmail(data.email)
      })
  })
  // console.log("viewid",viewId)
  return (
    <div>
      <div>
        <Link to="/" className="btn btn-warning my-2">
          Go back
        </Link>
      </div>

      <h3>Id : {viewId} </h3>
      <h3>Name :{name}</h3>
      <h3>Email : {email} </h3>
    </div>
  );
}

export default View;
