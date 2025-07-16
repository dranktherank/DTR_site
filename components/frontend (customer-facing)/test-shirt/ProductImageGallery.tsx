import styles from './testShirt.module.css'
import TestShirtDescriptionText from './TestShirtDescriptionText';

export default function ProductImageGallery() {
  return (
    <div className={styles["product-row-5050-split"]}>
        <div className={styles["product-image-gallery-container"]}>
            <div>
            <img src="/static/prod1.png"></img>
            </div>
            <div>
                <img src="/static/prod2.png"></img>
            </div>
            <div>
                <img src="/static/prod3.png"></img>
            </div>  
            <div>
                <img src="/static/prod4.png"></img>
            </div>
        </div>
        <div>
            <TestShirtDescriptionText />
        </div>
    </div>
  );
}