import styles from './ItemShelf.module.css'

export default function ItemThumbnail() {
  return (
    <div className={styles['shelf-item']}>
        <a href="/products/test-shirt">
        <img src="/static/transparent.png" alt="Item 1" />
        <p>Item 1</p>
        </a>
    </div>
  );
}