import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Blog() {
  const router = useRouter()
  return (
    <>
      <div className={`${styles.common}`}>
        <button onClick={() => router.push('/')}>
          Click to go Home
        </button>
        <h3>Blog Child App 1 (8081)</h3>
      </div>
    </>
  )
}