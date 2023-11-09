import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToastList}) {

  function removeFromShelf(id){
    const newToastList = toasts.filter((toast) => (toast.id != id));
    setToastList(newToastList);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map( (toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} msg={toast.msg} dismissFunction={() => removeFromShelf(toast.id)}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
