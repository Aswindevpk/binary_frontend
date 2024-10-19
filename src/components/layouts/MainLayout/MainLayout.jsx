import React from "react";
import "./MainLayout.css";
import PropTypes from "prop-types";


const MainLayout = ({ Main, Side }) => {
  return (
    <>
      <div className="MainLayout">
        <section className="MainLayout__main">
          {Main && <Main />}
        </section>
        <section className="MainLayout__sub">
            {Side && <Side />}
        </section>
      </div>
    </>
  );
};

MainLayout.propTypes = {
    Main: PropTypes.elementType,   
    Side: PropTypes.elementType 
  };
  

export default MainLayout;
