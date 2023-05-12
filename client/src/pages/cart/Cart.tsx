import React from "react";
import "./style.css";
import  NavBar from '../../components/nav/Nav'
const Cart = () => {
  const checkOut = (e: any) => {
    e.preventDefault();
  };
    return (
      <>
        <NavBar />
        <div className="alj ">
          <div className="gs tq ard asl aun cer cwx dcv">
            <form className="kt cuo cye cys czh dkk">
              <section aria-labelledby="cart-heading" className="crq">
                <h2 id="cart-heading" className="t">
                  Items in your shopping cart
                </h2>
                <ul role="list" className="abx acb afa afh afp">
                  <li className="ls arz cev">
                    <div className="uk">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                        alt="Front of men's Basic Tee in sienna."
                        className="nl rm adp apz aqa bxu byq"
                      />
                    </div>
                    <div className="js ls uh ym za bwa">
                      <div className="ab aue bxj cai cbo cge">
                        <div>
                          <div className="ls za">
                            <h3 className="avv">
                              <a href="#" className="avz axo bku">
                                Basic Tee
                              </a>
                            </h3>
                          </div>
                          <div className="kp ls avv">
                            <p className="axm">Sienna</p>
                            <p className="js afd afp ati axm">Large</p>
                          </div>
                          <p className="kp avv avz axq">$32.00</p>
                        </div>
                        <div className="lc bwk cgn">
                          <label htmlFor="quantity-0" className="t">
                            Quantity, Basic Tee
                          </label>
                          <select
                            id="quantity-0"
                            name="quantity-0"
                            className="tw adp aeu afq arl avf avt avz awj axo bbi bmf bmt bmx bnk chs bg-white w-10 p-1"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>
                          <div className="aa cz di">
                            <button type="button" className="fn lt aql axk bkr">
                              <span className="t">Remove</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="nu rw"
                              >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="lc ls abb avv axo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="nu rw uk axs"
                        >
                          <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                        </svg>
                        <span>In stock</span>
                      </p>
                    </div>
                  </li>
                  <li className="ls arz cev">
                    <div className="uk">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg"
                        alt="Front of men's Basic Tee in black."
                        className="nl rm adp apz aqa bxu byq"
                      />
                    </div>
                    <div className="js ls uh ym za bwa">
                      <div className="ab aue bxj cai cbo cge">
                        <div>
                          <div className="ls za">
                            <h3 className="avv">
                              <a href="#" className="avz axo bku">
                                Basic Tee
                              </a>
                            </h3>
                          </div>
                          <div className="kp ls avv">
                            <p className="axm">Black</p>
                            <p className="js afd afp ati axm">Large</p>
                          </div>
                          <p className="kp avv avz axq">$32.00</p>
                        </div>
                        <div className="lc bwk cgn">
                          <label htmlFor="quantity-1" className="t">
                            Quantity, Basic Tee
                          </label>
                          <select
                            id="quantity-1"
                            name="quantity-1"
                            className="tw adp aeu afq arl avf avt avz awj axo bbi bmf bmt bmx bnk chs bg-white w-10 p-1"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>
                          <div className="aa cz di">
                            <button type="button" className="fn lt aql axk bkr">
                              <span className="t">Remove</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="nu rw"
                              >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="lc ls abb avv axo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="nu rw uk axj"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                          ></path>
                        </svg>
                        <span>Ships in 3–4 weeks</span>
                      </p>
                    </div>
                  </li>
                  <li className="ls arz cev">
                    <div className="uk">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg"
                        alt="Insulated bottle with white base and black snap lid."
                        className="nl rm adp apz aqa bxu byq"
                      />
                    </div>
                    <div className="js ls uh ym za bwa">
                      <div className="ab aue bxj cai cbo cge">
                        <div>
                          <div className="ls za">
                            <h3 className="avv">
                              <a href="#" className="avz axo bku">
                                Nomad Tumbler
                              </a>
                            </h3>
                          </div>
                          <div className="kp ls avv">
                            <p className="axm">White</p>
                          </div>
                          <p className="kp avv avz axq">$35.00</p>
                        </div>
                        <div className="lc bwk cgn">
                          <label htmlFor="quantity-2" className="t">
                            Quantity, Nomad Tumbler
                          </label>
                          <select
                            id="quantity-2"
                            name="quantity-2"
                            className="tw adp aeu afq arl avf avt avz awj axo bbi bmf bmt bmx bnk chs bg-white w-10 p-1"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>
                          <div className="aa cz di">
                            <button type="button" className="fn lt aql axk bkr">
                              <span className="t">Remove</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="nu rw"
                              >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="lc ls abb avv axo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="nu rw uk axs"
                        >
                          <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                        </svg>
                        <span>In stock</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
              <section
                aria-labelledby="summary-heading"
                className="kv ado ail ard arz cef cro ctw dcn"
              >
                <h2 id="summary-heading" className="avu avz axq">
                  Order summary
                </h2>
                <dl className="lf abr">
                  <div className="ls yu za">
                    <dt className="avv axn">Subtotal</dt>
                    <dd className="avv avz axq">$99.00</dd>
                  </div>
                  <div className="ls yu za afh afp auw">
                    <dt className="ls yu avv axn">
                      <span>Shipping estimate</span>
                      <a href="#" className="jo uk axk bkr">
                        <span className="t">
                          Learn more about how shipping is calculated
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="nu rw"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                          ></path>
                        </svg>
                      </a>
                    </dt>
                    <dd className="avv avz axq">$5.00</dd>
                  </div>
                  <div className="ls yu za afh afp auw">
                    <dt className="ls avv axn">
                      <span>Tax estimate</span>
                      <a href="#" className="jo uk axk bkr">
                        <span className="t">
                          Learn more about how tax is calculated
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="nu rw"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                          ></path>
                        </svg>
                      </a>
                    </dt>
                    <dd className="avv avz axq">$8.32</dd>
                  </div>
                  <div className="ls yu za afh afp auw">
                    <dt className="avt avz axq">Order total</dt>
                    <dd className="avt avz axq">$112.32</dd>
                  </div>
                </dl>
                <div className="lf ">
                  <button
                    onClick={checkOut}
                    type="submit"
                    className="ti adp aeu agt ajm ard aru avt avz bac bbi bip bmt bmy bnk boa boe bg-indigo-600"
                  >
                    Checkout
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </>
    );
};

export default Cart;
