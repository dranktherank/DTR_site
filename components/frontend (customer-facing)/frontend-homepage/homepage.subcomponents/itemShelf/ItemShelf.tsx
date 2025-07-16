import styles from "./ItemShelf.module.css"
import ItemThumbnail from "./ItemThumbnail"

export default function ItemShelf() {
    return (
        <div className={styles['shelf-container']}>
            <div className={styles['shelf-header']}>
                <p>The newest stuff</p>
            </div>

            <div className={styles['shelf-item-container']}>
                <ItemThumbnail/>
                <ItemThumbnail/>
                <ItemThumbnail/>
            </div>
        </div>
    )
}