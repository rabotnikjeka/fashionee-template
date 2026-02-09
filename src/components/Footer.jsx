import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <img src="/icons/dotsIcon10x10.svg" alt="" className="dots-icon-10" />
      <img src="/icons/dotsIcon5x5.svg" alt="" className="dots-icon-5" />
      <div className="container">
        <div className="footer-info">
          <div className="column-1">
            <div className="about-us">
              <div className="footer-logo">
                <img src="/icons/logo.svg" alt="" />
              </div>
              <span>
                Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
                nostrud excepteur voluptate.
              </span>
            </div>
            <div className="find-us">
              <div className="find-us-text">Find us here:</div>
              <div className="social-links">
                <div className="social-link">
                  <a href="">FB</a>
                </div>
                <div className="line"></div>
                <div className="social-link">
                  <a href="">TW</a>
                </div>
                <div className="line"></div>
                <div className="social-link">
                  <a href="">INS</a>
                </div>
                <div className="line"></div>
                <div className="social-link">
                  <a href="">PT</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="column-title">About</div>
            <ul className="column-links">
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
          <div className="column-3">
            <div className="column-title">Useful links</div>
            <ul className="column-links">
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
          <div className="column-4">
            <div className="column-title">Newsletter</div>
            <div className="news-letter-text">
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>
            <div className="email-area">
              <form action="">
                <label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input"
                  />
                  <img src="/icons/sendIcon.svg" alt="" />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            © All right reserved. Fashionee 2020
          </div>
          <div className="payment-methods">
            <div className="payment-methods-text">Payment methods:</div>
            <div className="payment-methods-units">
              <div className="payment-methods-unit">
                <img src="/icons/imageVisa.svg" alt="visa" />
              </div>
              <div className="payment-methods-unit">
                <img src="/icons/imageMC.svg" alt="master card" />
              </div>
              <div className="payment-methods-unit">
                <img src="/icons/imagePayPal.svg" alt="paypal" />
              </div>
              <div className="payment-methods-unit">
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
