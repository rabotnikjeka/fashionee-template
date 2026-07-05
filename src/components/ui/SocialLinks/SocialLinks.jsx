import { Fragment } from "react";
import styles from "./SocialLinks.module.css";

const links = ["FB", "TW", "INS", "PT"];

const SocialLinks = ({ className, socialLinksClassName }) => {
  return (
    <div
      className={className ? `${styles.findUs} ${className}` : styles.findUs}
    >
      <div className={styles.findUsText}>Find us here:</div>
      <div
        className={
          socialLinksClassName
            ? `${styles.socialLinks} ${socialLinksClassName}`
            : styles.socialLinks
        }
      >
        {links.map((label, index) => (
          <Fragment key={label}>
            <div className={styles.socialLink}>
              <a href="">{label}</a>
            </div>
            {index < links.length - 1 && <div className={styles.line}></div>}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
