import ProductForm from "@/components/ProductForm";
import styles from './page.module.css';

export default function Products() {
  return (
    <section className={styles.mainContent}>
      <ProductForm />
    </section>
  )
}