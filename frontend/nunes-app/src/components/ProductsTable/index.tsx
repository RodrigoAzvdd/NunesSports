'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import InfoToast from '../InfoToast';
import CheckedModal from '../CheckedModal';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.json';
import { Pencil, Trash } from 'react-bootstrap-icons';

interface Product {
    id: number,
    name: string,
    description: string,
    price: number
}

export default function ProductsTable() {

    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [products, setProducts] = useState<Product[]>([])

    const deleteProduct = async (productId: number) => {
        await axios.delete(`http://localhost:3300/products/${productId}`)
        setToastIsOpen(true)
        setTimeout(() => {
            setToastIsOpen(false)
        }, 1500);
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:3300/products`)
                const data = response.data;
                if (data) {
                    setProducts(data);
                }
            } catch (error) {
                console.error("Nenhum Produto Encontrado.");
            }
        };

        getProducts();
    }, []);

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>R$ {product.price.toFixed(2)}</td>
                            <td className={styles.actions}>

                                <button type='button' onClick={() => {
                                    deleteProduct(product.id)
                                }} className={styles.deleteBtn}>Deletar <Trash size={17} /> </button>

                                <Link href={`/updateProduct/${product.id}`} className={styles.updateBtn}>Atualizar <Pencil size={17} /></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <CheckedModal toastIsOpen={toastIsOpen} text='Deletado' />
        </table>
    )
}
