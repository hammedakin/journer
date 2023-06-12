import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";

const PageNotFound = () => {


  return (
    <>
    <Navbar/>
      <section className="pagenotfound white">
        <div className="container ">
          <div className="col-md-7 mx-auto text-center ">
            <div className="sec-bold br-md py-5">
              <div className=" text-center">
                <h4 className="pry-text"> PAGE NOT FOUND </h4>
                <div className="d-flex align-items-center justify-content-center" >
                  <Link to="/">
                    <button className="btn pry light-text mt-3">
                      <h6 className="m-0">

                        <i className="bi bi-house me-2" />
                        Home
                      </h6>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
