import Styles from './button.module.css';

export default function Button({ children, onClick, type = 'button' }) {
    return (
        <button type={type} className={Styles.button} onClick={onClick}>
            {children}
        </button>
    );
};