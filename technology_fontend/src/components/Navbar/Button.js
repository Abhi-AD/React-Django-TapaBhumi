import React, { useState, useEffect } from 'react';

function Button() {
     const [isVisible, setIsVisible] = useState(true);

     useEffect(() => {
          const intervalId = setInterval(() => {
               setIsVisible((prevVisible) => !prevVisible);
          }, 1500);

          return () => clearInterval(intervalId); // Cleanup function
     }, []);

     return (
          <button type="button" style={{textTransform:'uppercase'}}>
               <div style={{ display: 'flex', alignItems: 'center', }}>
                    <div style={{ width: '20px', height: '15px', border: '1px solid white', display: 'flex',borderRadius:5, justifyContent: 'center', alignItems: 'center',  marginRight:10}}>
                         <div style={{ width: '8px', border: '0px solid white', opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                              <hr /> </div>
                    </div>
                    BUILD With US
               </div >
          </button>
     );
}

export default Button;
