import "../styles/shop.css";
function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter">
        <img src="/icons/dotsIcon5x5.svg" alt="" className="dotsIcon5" />
        <div className="newsletter-title">Newsletter</div>
        <div className="newsletter-description">
          Be the first to hear about deals, offers and upcoming collections.
        </div>
        <div className="email-input-button">
          <div className="email-area">
            <input
              type="text"
              placeholder="Enter your email"
              className="email-row input"
            />
          </div>
          <div className="button-line-wrapper">
            <button className="button">Subscribe</button>
            <div className="button-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
