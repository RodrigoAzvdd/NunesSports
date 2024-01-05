import ProductsTable from '@/components/ProductsTable'
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <h1>Produtos</h1>
      <ProductsTable />
    </section>
  )
}
