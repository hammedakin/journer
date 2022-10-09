import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";

const NoPageAccess = () => {
  let navigate = useNavigate()

  if (localStorage.getItem('usertoken')) {
    return <Navigate to="/note" replace />
  }

  return (
    <>

      <main className="pagenotfound light-bg">
        <div className="container">
          <div className="col-md-7 mx-auto text-center ">
            <div className="sec-bold br-md py-5 container">
              <h5 className="pry-text fw-light"> You need to be signed-in to access this page. </h5>
              <Link to="/login">
                <button className="btn pry light-text mt-3 btn-lg"> Sign In </button>
              </Link>

            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default NoPageAccess;
