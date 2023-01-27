import { useState } from 'react';
import styles from './form.module.css'

function Form() {

    const [isChecked, setIsCheked] = useState(false)
    const [active, setActive] = useState(true);
    // const [value, setValue] = useState('');


    const handleChange = () => {
        setIsCheked(!isChecked)
        setActive(!active)
    }

    const handleBlur = (e) => {
        if (e.target.value === '') {
            e.target.classList.add(styles.error)
            e.target.placeholder = 'Вы не ввели ваши данные!'
        } else {
            e.target.classList.remove(styles.error) 
        }
    }

    const handleBtn = (e) => {
        e.preventDefault()
        alert("Ваши данные сохранены.")
    }



    return (  
        <form className={styles.form}>
            <div className={styles.title}>
                <h1>Войти</h1>
                <p>Пройдите регистацию</p>
            </div>

            <div className={styles.email}>
                <input
                type='text' 
                name='email'
                // value={value}
                placeholder='Адрес эл. почты' 
                onBlur={handleBlur}
                disabled={isChecked}/>
            </div>

            <div className={styles.password}>
                <input 
                type='password' 
                name='password'
                // value={value}
                placeholder='Пароль'
                onBlur={handleBlur}
                disabled={isChecked}/>
            </div>

            <div className={styles.checkboxes}>
                <p>Завершить регистрацию: </p>
                <div>
                    <input 
                    id={styles.topping} 
                    type='checkbox' 
                    checked={isChecked} 
                    onChange={handleChange}/>
                </div>
            </div>

            <div className={styles.form_btn}>
                <button 
                    className={styles.btn} 
                    disabled={active}
                    onClick={handleBtn}>
                    Отправить
                </button>
            </div>
        </form>
    )
}

export default Form;