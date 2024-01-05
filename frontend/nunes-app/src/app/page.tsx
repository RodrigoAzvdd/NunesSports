import ProductsTable from '@/components/ProductsTable'
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>&quot;Produtos&quot;</h1>
      <ProductsTable />
    </section>
  )
}
