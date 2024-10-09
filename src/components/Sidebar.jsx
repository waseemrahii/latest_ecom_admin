import React from "react";
import { Link } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
function ScrollableSection({ left }) {
  const logoutHandler = async () => {
    try {
      localStorage.removeItem("adminuser");
      toast.success("Logout successfully");
      window.location.replace("/");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div
        id="sidebar_mobile"
        className="sidebar bg-white"
        style={{ left: left }}
      >
        {/* <div className='p-3'>
					
					
					<img
						src ="E_Baazaar_Logo-01.png"
						width='120px'
						height=''
						
						alt=''
					/>
				</div> */}
        <ul className="pb-5 pt-5">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="fw-semi-bold nav-link active pt-0"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-table-cells-large"></i>Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Manage"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-file-lines"></i>Manage Pages
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/homepage"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-house"></i>Home Page
            </Link>
          </li>

          <div class="accordion accordion-flush" id="accordionFlushExample2">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <li className="nav-item">
                    <Link
                      to="/product"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-brands fa-product-hunt"></i>Products
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample2"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/product"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/product_category"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Category
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/product_subCategory"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Sub Category
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample55">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <li className="nav-item">
                    <Link
                      to="/orders"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-solid fa-car"></i>Orders
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample55"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/allOrders"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      All
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/pending"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Pending
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/approved"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Confirmed
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/cancel"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Packaging
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/cancel"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Out for delivered
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/cancel"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Delivered
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/cancel"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Returned
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/cancel"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Failed To Deliver
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/cancel"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      canceled
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample3">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-regular fa-calendar"></i>Expo Schedules
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample3"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/expo"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Expo
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/booking"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Booking
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample4">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-regular fa-credit-card"></i>Payments
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample4"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/ambassador_payment"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Quality controller Payment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/seller_payment"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Seller Payment
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* <Link
                      to="/transactions"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Transactions
                    </Link> */}
                    <Link
                      to="/user_payment"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      User Payment
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <li className="nav-item">
            <Link
              to="/banner"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-cart-shopping"></i>Banner
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bank"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-cart-shopping"></i>Bank
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/charges"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-cart-shopping"></i>Charges
            </Link>
          </li>

          <div class="accordion accordion-flush" id="accordionFlushExample5">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-solid fa-people-carry-box"></i>Quality
                      controller
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample5"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/ambass"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Quality controller
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/request_ambassdors"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Request Quality controller
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/services_posts"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Service Post
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample5">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingNine">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-solid fa-people-carry-box"></i>Sellers
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingNine"
                data-bs-parent="#accordionFlushExample5"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/sellers"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Sellers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/request_sellers"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Request Sellers
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <li className="nav-item">
            <Link
              to="/order"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-cart-shopping"></i>Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/demand/order"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-cart-arrow-down"></i>Demand Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/wallet"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-briefcase"></i>Wallet
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/payment/methode"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-money-check-dollar"></i>Payments Methods
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/brands"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-brands fa-blogger"></i>Brands
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/services"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-brands fa-servicestack"></i>Services
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/event"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-regular fa-calendar"></i>Events
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/business/opportunities"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-sharp fa-solid fa-briefcase"></i>Business
              Opportunities
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/packages"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-sharp fa-solid fa-briefcase"></i>Package
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/staff"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-people-group"></i>Staff
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link
              to="/participant"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-user-plus"></i>Our Participant
            </Link>
          </li> */}

          <li className="nav-item">
            <Link
              to="/new/arrival"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-file-circle-plus"></i>New Arrivals
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link
              to="/forms"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-regular fa-file-lines"></i>Forms
            </Link>
          </li> */}

          <li className="nav-item">
            <Link
              to="/subscriber"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-brands fa-stripe-s"></i>Subscribers
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/settings"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-gear"></i>Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/webSettings"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-gear"></i>Web Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-gear"></i> Upcommings - Erozgar
            </Link>
          </li>
        </ul>

        <div
          style={{
            position: "fixed",
            bottom: "30px",
            left: "20px",
            color: "black",
          }}
        >
          <button
            class="add-btn px-5 btn-md py-2"
            type="button"
            onClick={logoutHandler}
          >
            {" "}
            <i>
              <FiLogOut color="#000000" />
            </i>{" "}
            <span class="" style={{ color: "black" }}>
              Log Out
            </span>
          </button>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="sidebar2 bg-white">
            <ul>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/dashboard"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-solid fa-table-cells-large"></i>Dashboard
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/Manage"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-solid fa-file-lines"></i>Manage Pages
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  aria-label="Close"
                  to="/homepage"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-solid fa-house"></i>Home Page
                </Link>
              </li>

              <div
                class="accordion accordion-flush"
                id="accordionFlushExample1"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed p-0  pe-3 onfocus-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          aria-label="Close"
                          to="#"
                          className="fw-semi-bold nav-link active"
                          aria-current="page"
                        >
                          {" "}
                          <i class="fa-regular fa-circle-play"></i>Videos
                        </Link>
                      </li>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse "
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body ">
                      <li className="nav-item " data-bs-dismiss="offcanvas">
                        <Link
                          aria-label="Close"
                          to="/videos"
                          className="fw-semi-bold nav-link active pt-0"
                          aria-current="page"
                        >
                          Videos
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link
                          aria-label="Close"
                          to="/videos"
                          className="fw-semi-bold nav-link active pt-1"
                          aria-current="page"
                        >
                          Categories
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="accordion accordion-flush"
                id="accordionFlushExample2"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed p-0  pe-3 onfocus-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          aria-label="Close"
                          to="/product"
                          className="fw-semi-bold nav-link active"
                          aria-current="page"
                        >
                          <i class="fa-brands fa-product-hunt"></i>Products
                        </Link>
                      </li>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample2"
                  >
                    <div class="accordion-body">
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          aria-label="Close"
                          to="/product"
                          className="fw-semi-bold nav-link active pt-0"
                          aria-current="page"
                        >
                          Products
                        </Link>
                      </li>

                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          aria-label="Close"
                          to="/product"
                          className="fw-semi-bold nav-link active pt-1"
                          aria-current="page"
                        >
                          Categories
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="accordion accordion-flush"
                id="accordionFlushExample3"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed p-0  pe-3 onfocus-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="#"
                          className="fw-semi-bold nav-link active"
                          aria-current="page"
                        >
                          <i class="fa-regular fa-calendar"></i>Expo Schedules
                        </Link>
                      </li>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample3"
                  >
                    <div class="accordion-body">
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/expo"
                          className="fw-semi-bold nav-link active pt-0"
                          aria-current="page"
                        >
                          Expo
                        </Link>
                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/expo"
                          className="fw-semi-bold nav-link active pt-1"
                          aria-current="page"
                        >
                          Booking
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="accordion accordion-flush"
                id="accordionFlushExample4"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed p-0  pe-3 onfocus-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/payments"
                          className="fw-semi-bold nav-link active"
                          aria-current="page"
                        >
                          <i class="fa-regular fa-credit-card"></i>Payments
                        </Link>
                      </li>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample4"
                  >
                    <div class="accordion-body">
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/payments"
                          className="fw-semi-bold nav-link active pt-0"
                          aria-current="page"
                        >
                          Payments
                        </Link>
                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/ambassador_payment"
                          className="fw-semi-bold nav-link active pt-1"
                          aria-current="page"
                        >
                          Quality controller Payments
                        </Link>
                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/transactions"
                          className="fw-semi-bold nav-link active pt-1"
                          aria-current="page"
                        >
                          Transactions
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="accordion accordion-flush"
                id="accordionFlushExample5"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed p-0 pe-3 onfocus-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="#"
                          className="fw-semi-bold nav-link active"
                          aria-current="page"
                        >
                          <i class="fa-solid fa-people-carry-box"></i>
                          Quality controller
                        </Link>
                      </li>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample5"
                  >
                    <div class="accordion-body">
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/ambass"
                          className="fw-semi-bold nav-link active pt-0"
                          aria-current="page"
                        >
                          Quality controller
                        </Link>
                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link
                          to="/ambass"
                          className="fw-semi-bold nav-link active pt-1"
                          aria-current="page"
                        >
                          Service Post
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/order"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-solid fa-cart-shopping"></i>Orders
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/demand/order"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-solid fa-cart-arrow-down"></i>Demand Orders
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/wallet"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-solid fa-cart-arrow-down"></i>Wallet
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/payment/methode"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-solid fa-money-check-dollar"></i>Payments Methods
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/sellers"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-solid fa-users"></i>Sellers
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/brands"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-brands fa-blogger"></i>Brands
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/services"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-brands fa-servicestack"></i>Services
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  to="/event"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-regular fa-calendar"></i>Events
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/business/opportunities"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-sharp fa-solid fa-briefcase"></i>Busuness
                  Opportunities
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/packages"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-sharp fa-solid fa-briefcase"></i>
                  Packages
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/internship"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-solid fa-user-tag"></i>Iternship/Job
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/team"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-solid fa-people-group"></i>Team
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/participant"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-solid fa-user-plus"></i>Our Participant
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/news"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-regular fa-newspaper"></i>News
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/new/arrival"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-solid fa-file-circle-plus"></i>New Arrivals
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/forms"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-regular fa-file-lines"></i>Forms
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/subscriber"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  <i class="fa-brands fa-stripe-s"></i>Subscribers
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/settings"
                  className="fw-semi-bold nav-link active"
                  aria-current="page"
                >
                  {" "}
                  <i class="fa-solid fa-gear"></i>Settings
                </Link>
              </li>
              {/* <div
								class='accordion accordion-flush'
								id='accordionFlushExample55'
							>
								<div class='accordion-item '>
									<h2
										class='accordion-header'
										id='flush-headingThree'
									>
										<button
											class='accordion-button collapsed p-0  pe-3 onfocus-none'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#flush-collapseThree'
											aria-expanded='false'
											aria-controls='flush-collapseThree'
										>
											<li className='nav-item'>
												<Link
													to='/orders'
													className='fw-semi-bold nav-link active'
													aria-current='page'
												>
													<i class='fa-solid fa-car'></i>Upcommings
												</Link>
											</li>
										</button>
									</h2>
									<div
										id='flush-collapseThree'
										class='accordion-collapse collapse'
										aria-labelledby='flush-headingThree'
										data-bs-parent='#accordionFlushExample55'
									>
										<div class='accordion-body'>
											<li className='nav-item'>
												<Link
													to='/#'
													className='fw-semi-bold nav-link active pt-0'
													aria-current='page'
												>
													E-rozgar
												</Link>
											</li>
										</div>
									</div>
								</div>
							</div> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollableSection;
