'use client'

import { useRef, useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import CheckedModal from '../CheckedModal';

export default function ProductForm({ name, description, price, id, type }: {
    id?: string,
    name?: string,
    description?: string,
    price?: number,
    type: 'CREATE' | 'UPDATE'
}) {

    const [toastIsOpen, setToastIsOpen] = useState(false)

    const nameInput = useRef<HTMLInputElement>(null)
    const descriptionInput = useRef<HTMLInputElement>(null)
    const priceInput = useRef<HTMLInputElement>(null)

    const createProduct = async () => {
        try {
            const newProduct = {
                name: nameInput.current?.value,
                description: descriptionInput.current?.value,
                price: Number(priceInput.current?.value)
            };

            await axios.post(`http://localhost:3300/products/`, newProduct)

            setToastIsOpen(true)
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1500)
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error)
        }
    }

    const updateProduct = async () => {
        try {
            const updatedProduct = {
                name: nameInput.current?.value,
                description: descriptionInput.current?.value,
                price: Number(priceInput.current?.value)
            };

            await axios.put(`http://localhost:3300/products/${id}`, updatedProduct)

            setToastIsOpen(true)
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1500)
        } catch (error) {
            console.error("Erro ao atualizar produto:", error)
        }
    }

    return (

        <>
            <form className={styles.form}>
                <div className={styles.inputDiv}>
                    <label className={styles.label} htmlFor="name">Nome:</label>
                    <input
                        ref={nameInput}
                        className={styles.input}
                        autoComplete='off'
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={name ? name : ''}
                        required
                    />
                </div>
                <div className={styles.inputDiv}>
                    <label className={styles.label} htmlFor="name">Descrição:</label>
                    <input
                        ref={descriptionInput}
                        className={styles.input}
                        autoComplete='off'
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={description ? description : ''}
                        required
                    />
                </div>
                <div className={styles.inputDiv}>
                    <label className={styles.label} htmlFor="name">Preço:</label>
                    <input
                        ref={priceInput}
                        className={styles.input}
                        autoComplete='off'
                        type="number"
                        name="name"
                        id="name"
                        step="0.01"
                        defaultValue={price ? price.toFixed(2) : '1.00'}
                        required
                    />                </div>
                {
                    type == "CREATE" ?
                        <button type='button' onClick={createProduct} className={styles.btn}>Cadastrar</button> :
                        <button type='button' onClick={updateProduct} className={styles.btn}>Atualizar</button>
                }
            </form>

            {
                type == 'CREATE' ?
                    <CheckedModal toastIsOpen={toastIsOpen} text='Cadastrado' /> :
                    <CheckedModal toastIsOpen={toastIsOpen} text='Atualizado' />
            }

        </>
    )
}