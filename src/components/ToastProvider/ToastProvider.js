import React from 'react';

import useEscapeKey from '../../hooks/UseEscapeKey';

export const ToastListContext = React.createContext()

function ToastProvider({children}) {
  const [toastList, setToastList] = React.useState([]);

  const addToShelf = React.useCallback((variant, message) => {
    const newToastList = [...toastList];
    newToastList.push(
      {
        id: crypto.randomUUID(),
        variant,
        message
      }
    );
    setToastList(newToastList);

  },[toastList]);

  const removeFromShelf = React.useCallback((id) => {
    const newToastList = toastList.filter((toast) => (toast.id != id));
    setToastList(newToastList);
  },[toastList]);

  useEscapeKey(() => {
    setToastList([]);
  }, [setToastList]); 

  return (
    <ToastListContext.Provider value={{toastList, addToShelf, removeFromShelf}}>
      {children}
    </ToastListContext.Provider>
  );
}

export default ToastProvider;
