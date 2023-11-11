import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';

import { ToastListContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('notice');

  const {toastList, addToShelf, removeFromShelf} = React.useContext(ToastListContext);

  const msg = React.useRef();

  const addToast = React.useCallback((event) => {
    event.preventDefault();
    msg.current.focus();

    if(message === '') return;

    addToShelf(selectedVariant, message);
    setMessage('');
    setSelectedVariant('notice');
  },[selectedVariant, message]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={addToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              ref={msg}
              id="message" 
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus={true}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-${variant}`}>
              <input
                id={`variant-${variant}`}
                type="radio"
                name="variant"
                value={variant}
                checked={selectedVariant === variant}
                onChange={(e) => setSelectedVariant(e.target.value)}
              />
              {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
