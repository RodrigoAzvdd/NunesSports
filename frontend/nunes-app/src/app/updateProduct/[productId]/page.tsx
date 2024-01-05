'use client'

import styles from './page.module.css';
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
    name: string,
    description: string,
    price: number,
    id: string
}

export default function Page() {

    const { productId } = useParams()
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`http://localhost:3300/products/${productId}`)
            const data = response.data
            setProduct(data.product)
        }

        getProduct()
    }, [productId])

    return (
        <section className={styles.mainContent}>
            <h1 className={styles.title}>&quot;Atualizar Produto&quot;</h1>
            <ProductForm
                name={product?.name}
                description={product?.description}
                price={product?.price}
                id={product?.id}
                type="UPDATE"
            />
        </section>
    )
}