import "../styles/shop.css";

function LeftSide() {
  return (
    <div className="left-side">
      <div className="search-area">
        <label>
          <input
            type="text"
            placeholder="Search"
            className="input search-row"
          />
          <img
            src="/icons/search.svg"
            alt=""
            className="left-side-search-icon"
          />
        </label>
      </div>
      <div className="aside-parameters">
        <div className="parameters-title">Categories</div>
        <div className="parameters-components">
          <ul className="categories">
            <li className="category">All</li>
            <li className="category active">Men</li>
            <li className="category">Women</li>
            <li className="category">Accessories</li>
            <li className="category">New Arrivals</li>
          </ul>
        </div>
      </div>
      <div className="aside-parameters">
        <div className="parameters-title">Price</div>
        <div className="parameters-components">
          <div className="price-bar">
            <input type="text" placeholder="0" className="input" />
            <input type="text" placeholder="1000" className="input" />
          </div>
        </div>
      </div>
      <div className="aside-parameters">
        <div className="parameters-title">Colors</div>
        <div className="parameters-components">
          <div className="colors">
            <div className="color">
              <input
                type="checkbox"
                className="color-checkbox"
                id="black"
                name="black"
                value="black"
              />
              <label className="color-checkbox-label" for="black">
                Black
              </label>
            </div>
            <div className="color">
              <input
                type="checkbox"
                className="color-checkbox"
                id="blue"
                name="blue"
                value="blue"
              />
              <label className="color-checkbox-label" for="blue">
                Blue
              </label>
            </div>
            <div className="color">
              <input
                type="checkbox"
                className="color-checkbox"
                id="red"
                name="red"
                value="red"
              />
              <label className="color-checkbox-label" for="red">
                Red
              </label>
            </div>
            <div className="color">
              <input
                type="checkbox"
                className="color-checkbox"
                id="yellow"
                name="yellow"
                value="yellow"
              />
              <label className="color-checkbox-label" for="yellow">
                Yellow
              </label>
            </div>
            <div className="color">
              <input
                type="checkbox"
                className="color-checkbox"
                id="green"
                name="green"
                value="green"
              />
              <label className="color-checkbox-label" for="green">
                Green
              </label>
            </div>
          </div>
        </div>
        <div className="colors-bottom-side">
          <div className="deploy-colors">
            <img src="/icons/deployArrow.svg" alt="" />
            Deploy
          </div>
          <div className="button-line-wrapper">
            <button className="button">Apply Filter</button>
            <div className="button-line"></div>
          </div>
        </div>
      </div>
      <div className="aside-parameters">
        <div className="parameters-title">Reviewed by you</div>
        <div className="parameters-components">
          <div className="reviewed-by-you">
            <div className="recomedation">
              <div className="recomendation-photo"></div>
              <div className="recomendation-info">
                <div className="recomendation-name">Retro style handbag</div>
                <div className="recomendation-price">
                  <div className="recomendation current-price">$35.99</div>
                  <div className="recomendation old-price">$52.99</div>
                </div>
              </div>
            </div>
            <div className="recomedation">
              <div className="recomendation-photo"></div>
              <div className="recomendation-info">
                <div className="recomendation-name">Warm casual sweater</div>
                <div className="recomendation-price">
                  <div className="recomendation current-price">$35.99</div>
                  <div className="recomendation old-price"></div>
                </div>
              </div>
            </div>
            <div className="recomedation">
              <div className="recomendation-photo"></div>
              <div className="recomendation-info">
                <div className="recomendation-name">
                  Textured turtleneck with zip
                </div>
                <div className="recomendation-price">
                  <div className="recomendation current-price">$35.99</div>
                  <div className="recomendation old-price"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aside-parameters">
        <div className="banner">
          <a href="">
            <img src="images/bannerSale.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
