import styles from "./testShirt.module.css"

export default function TestShirtDescriptionText() {
  return (
    <div className={styles["test-shirt-description-text-container"]}>
      <p>NAME</p>
      <p>DESCRIPTION</p>
    </div>
  );
}