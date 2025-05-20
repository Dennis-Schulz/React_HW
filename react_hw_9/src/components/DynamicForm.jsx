import styles from './DynamicForm.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useEffect } from 'react'

const DynamicForm = () => {
  const { register, handleSubmit, watch, reset } = useForm()

  const [wasTypedFirst, setWasTypedFirst] = useState(false)
  const [wasTypedSecond, setWasTypedSecond] = useState(false)
  const onSubmit = (data) => {
    alert(
      'Данные успешно отправлены: ' + data.firstField + ' ' + data.secondField
    )
    reset()
    setWasTypedFirst(false)
    setWasTypedSecond(false)
  }

  const firstFieldInput = watch('firstField')
  const secondFieldInput = watch('secondField')
  const valNameInput = firstFieldInput && firstFieldInput.length >= 5

  useEffect(() => {
    if (firstFieldInput !== undefined && firstFieldInput.length > 0) {
      setWasTypedFirst(true)
    }
  }, [firstFieldInput])

  useEffect(() => {
    if (secondFieldInput !== undefined && secondFieldInput.length > 0) {
      setWasTypedSecond(true)
    }
  }, [secondFieldInput])

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div
        className={styles.input_group}
        data-hint="Заполните поле минимум 5 символов"
      >
        <input
          autoComplete="off"
          style={{
            border:
              wasTypedFirst && firstFieldInput.length < 5
                ? '1px solid red'
                : wasTypedFirst && firstFieldInput.length >= 5
                ? '1px solid green'
                : '1px solid #ccc',
          }}
          className={styles.input_field}
          type="text"
          placeholder=""
          {...register('firstField', {
            required: true,
            minLength: { value: 5, message: 'Минимальная длина 5 символов' },
          })}
        />
        <label htmlFor="firstField" className={styles.input_label}>
          First field
        </label>
      </div>
      {valNameInput && (
        <div
          className={styles.input_group}
          data-hint="Заполните поле минимум 5 символов"
        >
          <input
            autoComplete="off"
            style={{
              border:
                wasTypedSecond && secondFieldInput.length < 5
                  ? '1px solid red'
                  : wasTypedSecond && secondFieldInput.length >= 5
                  ? '1px solid green'
                  : '1px solid #ccc',
            }}
            className={`${styles.input_field} ${styles.fadeIn}`}
            type="text"
            placeholder=""
            {...register('secondField', {
              required: true,
              minLength: { value: 5, message: 'Минимальная длина 5 символов' },
            })}
          />
          <label htmlFor="secondField" className={styles.input_label}>
            Second field
          </label>
        </div>
      )}
      <button>Submit</button>
    </form>
  )
}

export default DynamicForm
