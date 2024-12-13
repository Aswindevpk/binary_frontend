import React from "react";
import PropTypes from "prop-types";

const MainLayout = ({ Main, Side }) => {
  return (
    <div className="grid grid-cols-1 mx-5 lg:grid-cols-[1fr_368px] md:mx-20 gap-2">
      <section className="max-w-[728px] md:mx-auto md:min-w-[728px] mb-10">
        {Main && <Main />}
      </section>
      {Side && (
        <div>
          <section className="hidden lg:flex flex-col justify-between max-w-xs sticky top-0 border-l border-neutral p-10 min-h-screen">
            {Side()}
          </section>
        </div>
      )}
    </div>
  );
};

MainLayout.propTypes = {
  Main: PropTypes.elementType,
  Side: PropTypes.elementType,
};

export default MainLayout;
