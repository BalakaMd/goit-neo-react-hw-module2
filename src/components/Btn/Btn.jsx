import css from './Btn.module.css';

const Btn = ({ children, onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
