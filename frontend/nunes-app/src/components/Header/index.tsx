import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image
                    src={'https://assets.stickpng.com/thumbs/609002145d1f990004970e75.png'}
                    alt='Nunes Sports'
                    width={100}
                    height={100}
                    priority={true}
                />
            </div>
            <ul className={styles.menu}>
                <Link href={'/'} className={styles.menuItem}>Ver Produtos</Link>
                <Link href={'/newProduct'} className={styles.menuItem}>Cadastrar Produto</Link>
            </ul>
            <p className={styles.github}>Feito por <a target='_blank' href='https://github.com/RodrigoAzvdd' className={styles.githubName}>Rodrigo Azevedo</a></p>
        </header>
    )
}
