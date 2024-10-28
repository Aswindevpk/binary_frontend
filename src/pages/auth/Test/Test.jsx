import React, { useState, useEffect } from 'react';

function WindowResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [count,setCount] =useState(0)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    console.log('resize')

    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log('clean')
    };
  }, []); // Empty dependency array means it only runs on mount and cleanup on unmount

  return <p>Window width: {width}px</p>;
}

export default WindowResize;
