import classNames from "classnames";
import styles from "./styles.module.scss";
import React, { useState } from 'react';
import { Form, Radio } from 'semantic-ui-react'

const RadioButton = () => {
    const [payment, setPayment] = useState('Dinheiro')
    return (
        <Form.Group inline className={styles.form}>
            <Form.Field control={Radio} label=" Dinheiro" checked={payment === 'Dinheiro'} 
            value="Dinheiro" onClick={() => setPayment('Dinheiro')} className={styles.input} />
            <Form.Field control={Radio} label=" Cartão de crédito" checked={payment === 'Cartão de crédito'} 
            value="Cartão de crédito" onClick={() => setPayment('Cartão de crédito')} className={styles.input} />
        </Form.Group>
    );
}

export default RadioButton