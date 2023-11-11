import React from "react";

//callback: function to call
//dependencies: array of dependencies
function useEscapeKey(callback, dependencies){
    React.useEffect(() => {
        const handleKeyDown = (event) => {
          if(event.code === 'Escape'){
            callback();
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => (window.removeEventListener('keydown', handleKeyDown));
      }, dependencies);
}

export default useEscapeKey;