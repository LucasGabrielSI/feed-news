import styles from "./Avatar.module.css";

// with desestructure it's possible passing default values. 
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
