import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({toasty, dismissFunction}) {
  
  const Icon = ICONS_BY_VARIANT[toasty.variant];
    
  return (
    <div className={`${styles.toast} ${styles[toasty.variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{toasty.variant} -</VisuallyHidden>
        {toasty.message}
      </p>
      <button
        className={styles.closeButton}
        aria-label='Dismiss message'
        aria-live='off'
        onClick={() => dismissFunction(toasty.id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
