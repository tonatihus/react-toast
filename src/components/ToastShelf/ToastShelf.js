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
          <Toast variant={toast.variant} msg={toast.message} dismissFunction={() => removeFromShelf(toast.id)}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
