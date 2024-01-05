'use client'

import ProductForm from "@/components/ProductForm";
import styles from './page.module.css';
import { useParams } from "next/navigation";

export default function Products() {


  return (
    <section className={styles.mainContent}>
      <h1 className={styles.title}>&quot;Cadastrar Produto&quot;</h1>
      <ProductForm type="CREATE" />
    </section>
  )
}