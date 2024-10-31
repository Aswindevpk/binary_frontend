import React from "react";
import PropTypes from "prop-types";

const MainLayout = ({ Main, Side }) => {
  return (
    <div className="flex flex-row mx-20 justify-evenly font-[var(--font-family)]">
      <section className="flex flex-col flex-1 max-w-[728px] mr-5">
        {Main && <Main />}
      </section>
      {Side && (
        <section className="hidden lg:flex flex-col sticky top-0 max-w-[368px] border-l border-gray-300 p-10 min-h-full">
          {Side()}
        </section>
      )}
    </div>
  );
};

MainLayout.propTypes = {
  Main: PropTypes.elementType,
  Side: PropTypes.elementType,
};

export default MainLayout;
