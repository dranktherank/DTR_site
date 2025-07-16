import styles from './ImageGallery.module.css';

export default function ImageGalleryContainer() {
    return (
        <div className={styles['image-gallery-container']}>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p1.png" alt="Gallery item 1"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p2.png" alt="Gallery item 2"/>
            </div>
            
            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p14.png" alt="Gallery item 14"/>
            </div>
            
            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p3.png" alt="Gallery item 3"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p4.png" alt="Gallery item 4"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p5.png" alt="Gallery item 5"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p6.png" alt="Gallery item 6"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p8.png" alt="Gallery item 8"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p9.png" alt="Gallery item 9"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p10.png" alt="Gallery item 10"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p11.png" alt="Gallery item 11"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p12.png" alt="Gallery item 12"/>
            </div>

            <div className={styles['image-gallery-image']}>
                <img className={styles['image-gallery-img']} src="/static/p13.png" alt="Gallery item 13"/>
            </div>

            

        </div>
        
    )
}