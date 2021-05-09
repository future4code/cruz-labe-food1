import classNames from 'classnames'
import styles from './styles.module.scss'
import React, {useState} from 'react'
import {Form, Radio} from 'semantic-ui-react'

const RadioButton = ({paymentMethod, setPaymentMethod}) => {
  //   const [payment, setPayment] = useState('Dinheiro')
  return (
    <Form.Group inline className={styles.form}>
      <Form.Field
        control={Radio}
        label=' Dinheiro'
        checked={paymentMethod === 'money'}
        value={paymentMethod}
        onClick={() => setPaymentMethod('money')}
        // onClick={() => setPayment('Dinheiro')}
        className={styles.input}
      />
      <Form.Field
        control={Radio}
        label=' Cartão de crédito'
        checked={paymentMethod === 'creditcart'}
        value={paymentMethod}
        onClick={() => setPaymentMethod('creditcart')}
        // onClick={() => setPayment('Cartão de crédito')}
        className={styles.input}
      />
    </Form.Group>
  )
}

export default RadioButton
