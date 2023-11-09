import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastListContext } from '../ToastProvider';

function ToastShelf() {
  const {toastList, removeFromShelf} = React.useContext(ToastListContext);

  return (
    <ol className={styles.wrapper}>
      {toastList.map( (toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast toasty={toast} dismissFunction={removeFromShelf}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
