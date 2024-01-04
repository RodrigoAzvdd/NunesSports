import ProductForm from '@/components/ProductForm'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductForm />
    </main>
  )
}
