import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputPlusProps {
  onAdd: (title: string) => void;
}

const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');
  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue]);

  return (
    <div className={styles.inputPlus}>
      <input
        type="tex"
        className={styles.inputPlusValue}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask();
          }
        }}
        placeholder="Type here..."
      />
      <button onClick={addTask} aria-label="Add" className={styles.inputPlusButton} />
    </div>
  );
};

export default InputPlus;
