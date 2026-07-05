import styles from "./Footer.module.css";
import SocialLinks from "../ui/SocialLinks/SocialLinks";

function Footer() {
  return (
    <footer className={styles.footer} data-testid="footer">
      <img
        src="/icons/dotsIcon10x10.svg"
        alt=""
        className={styles.dotsIcon10}
      />
      <img src="/icons/dotsIcon5x5.svg" alt="" className={styles.dotsIcon5} />
      <div className="container">
        <div className={styles.footerInfo}>
          <div className={styles.column1}>
            <div className={styles.aboutUs}>
              <div className={styles.footerLogo}>
                <img src="/icons/logo.svg" alt="" />
              </div>
              <span>
                Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
                nostrud excepteur voluptate.
              </span>
            </div>
            <SocialLinks />
          </div>
          <div className={styles.column2}>
            <div className={styles.columnTitle}>About</div>
            <ul className={styles.columnLinks}>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Collections</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className={styles.column3}>
            <div className={styles.columnTitle}>Useful links</div>
            <ul className={styles.columnLinks}>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of use</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Shipping details</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className={styles.column4}>
            <div className={styles.columnTitle}>Newsletter</div>
            <div className={styles.newsLetterText}>
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>
            <div className={styles.emailArea}>
              <form action="">
                <label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={styles.input}
                  />
                  <img src="/icons/sendIcon.svg" alt="" />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyrightText}>
            © All right reserved. Fashionee 2020
          </div>
          <div className={styles.paymentMethods}>
            <div className={styles.paymentMethodsText}>Payment methods:</div>
            <div className={styles.paymentMethodsUnits}>
              <div className={styles.paymentMethodsUnit}>
                <img src="/icons/imageVisa.svg" alt="visa" />
              </div>
              <div className={styles.paymentMethodsUnit}>
                <img src="/icons/imageMC.svg" alt="master card" />
              </div>
              <div className={styles.paymentMethodsUnit}>
                <img src="/icons/imagePayPal.svg" alt="paypal" />
              </div>
              <div className={styles.paymentMethodsUnit}>
                <img src="/icons/imagePayoneer.svg" alt="payoneer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
