// Redirect user if no staffId is found
//   useEffect(() => {
//     if (!staffId) {
//       navigate("/"); // Redirects to homepage if staffId is missing
//     }
//   }, [staffId, navigate]);

{
  /* Filter Dropdown Section */
}
//    <div className="flex items-center justify-end lg:px-24  relative">
//    <h1 className="text-[#333333] font-bold text-[16px]">Filter By :</h1>
//    <button
//      onClick={toggleFilterDropdown}
//      className="flex items-center focus:outline-none"
//    >
//      <img src={preference1} alt="Filter" className="cursor-pointer" />
//    </button>

//    {filterDropdownOpen && (
//      <div
//        className="absolute right-10 mt-2 w-[230px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none p-5"
//        style={{ top: "100%" }}
//      >
//        <div
//          className="py-1 space-y-3"
//          role="menu"
//          aria-orientation="vertical"
//          aria-labelledby="options-menu"
//        >
//          <h1
//            className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//            onClick={() => handleFilterClick("Input Customer Name")}
//          >
//            Customer Name
//          </h1>
//          <h1
//            className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//            onClick={() => handleFilterClick("Input Order ID")}
//          >
//            Order ID
//          </h1>
//          <h1
//            className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//            onClick={() => handleFilterClick("Input Store Name")}
//          >
//            Store Name
//          </h1>
//          <h1
//            className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer "
//            onClick={() => handleFilterClick("Input Product Name")}
//          >
//            Product Name
//          </h1>
//          <h1
//            className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//            onClick={() => handleFilterClick("DD/MM/YYR")}
//          >
//            Date
//          </h1>
//        </div>
//      </div>
//    )}
//  </div>

{
  /* Popup Component */
}
// {popupVisible && (
//     <div className="absolute right-10 w-[230px] p-4 bg-white shadow-lg rounded-md">
//       <input
//         type="text"
//         placeholder={selectedText}
//         className="mt-2 p-2 border rounded-md w-full"
//       />
//       <button
//         onClick={closePopup}
//         className="mt-4 text-white bg-[#004324] p-2 font-bold px-5 rounded-md justify-center mx-auto flex"
//       >
//         Enter
//       </button>
//     </div>
//   )}

//customers
{
  /* Filter Dropdown Section */
}
//  <div className="flex items-center justify-end lg:px-24 relative">
//  <h1 className="text-[#333333] font-bold text-[16px]">Filter By :</h1>
//  <button
//    onClick={toggleFilterDropdown}
//    className="flex items-center focus:outline-none"
//  >
//    <img src={preference1} alt="Filter" className="cursor-pointer" />
//  </button>

//  {filterDropdownOpen && (
//    <div
//      className="absolute right-10 mt-2 w-[230px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none p-5"
//      style={{ top: "100%" }}
//    >
//      <div
//        className="py-1 space-y-3"
//        role="menu"
//        aria-orientation="vertical"
//        aria-labelledby="options-menu"
//      >
//        <h1
//          className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//          onClick={() => handleFilterClick("Input Customer Name")}
//        >
//          Customer Name
//        </h1>
//        <h1
//          className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//          onClick={() => handleFilterClick("Input Customer ID")}
//        >
//          Customer ID
//        </h1>
//        <h1
//          className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//          onClick={() => handleFilterClick("Input Number")}
//        >
//          Total Orders
//        </h1>
//        <h1
//          className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//          onClick={() => handleFilterClick("Input Amount")}
//        >
//          Total Spend
//        </h1>
//        <h1
//          className="text-[#6E6E6E] font-bold text-[16px] border-[#6E6E6E] border-2 p-2 rounded-lg cursor-pointer"
//          onClick={() => handleFilterClick("DD/MM/YYR")}
//        >
//          Last Purchase Date
//        </h1>
//      </div>
//    </div>
//  )}
// </div>

// {/* Popup Component */}
// {popupVisible && (
//  <div className="absolute right-10 w-[230px] p-4 bg-white shadow-lg rounded-md">
//    <input
//      type="text"
//      placeholder={selectedText}
//      className="mt-2 p-2 border rounded-md w-full"
//    />
//    <button
//      onClick={closePopup}
//      className="mt-4 text-white bg-[#004324] p-2 font-bold px-5 rounded-md justify-center mx-auto flex"
//    >
//      Enter
//    </button>
//  </div>
// )}

// products images
// import {
//   store,
//   totalExpenseImg,
//   totalInventory,
//   totalRevenue,
//   totalCustomers,
//   totalOrders,
//   totalProfit,
// } from "../assets"

//products popup button
{
  /* <button
  className="absolute top-4 right-4 text-lightGreen border border-lightGreen rounded-lg"
  onClick={() => setIsPopupOpen(false)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>; */
}

//fields we are not using
{
  /* <div className="mb-4">
                    <label
                      htmlFor="weight"
                      className="block text-[16px] font-bold text-[#333333]"
                    >
                      Shipping Weight (In KG)
                    </label>
                    <input
                      id="weight"
                      name="shippingWeight"
                      type="text"
                      value={productDetails.shippingWeight}
                      onChange={handleInputChange}
                      className="w-full border-[#8ED06C] border-2 bg-[#F5F5F5] rounded-md p-2"
                      placeholder="E.g:20kg"
                    />
                  </div> */
}
{
  /* <div>
                    <h1 className="block text-[16px] font-bold text-[#333333]">
                      Offer Free Shipping ?
                    </h1>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-[#F5F5F5] border-[#8ED06C] border-2 p-2 rounded-md">
                        <h1 className="text-gray-500 font-bold">Yes</h1>
                        <div className="flex items-center">
                          &#8203;
                          <input
                            type="checkbox"
                            value={productDetails.freeShipping}
                            onChange={handleInputChange}
                            className="size-4 rounded border-gray-300"
                            id="Option2"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-[#F5F5F5] border-[#8ED06C] border-2 p-2 rounded-md">
                        <h1 className="text-gray-500 font-bold">No</h1>
                        <div className="flex items-center">
                          &#8203;
                          <input
                            type="checkbox"
                            value={productDetails.freeShipping}
                            onChange={handleInputChange}
                            className="size-4 rounded border-gray-300"
                            id="Option2"
                          />
                        </div>
                      </div>
                    </div>
                  </div> */
}

//branch table
{
  /* <div className="flex gap-3">
<Link to='/product'>
<AddProduct1 />
</Link>
<button
  className="bg-transparent border border-lightGreen text-lightGreen font-bold p-inherit flex items-center w-[200px] rounded-md p-2"
  onClick={() => setOpenTransfer(true)}
>
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 8V16M16.5 12H8.5"
      stroke="currentcolor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12C3 7.52166 3 5.28249 4.39124 3.89124C5.78249 2.5 8.02166 2.5 12.5 2.5C16.9783 2.5 19.2175 2.5 20.6088 3.89124C22 5.28249 22 7.52166 22 12C22 16.4783 22 18.7175 20.6088 20.1088C19.2175 21.5 16.9783 21.5 12.5 21.5C8.02166 21.5 5.78249 21.5 4.39124 20.1088C3 18.7175 3 16.4783 3 12Z"
      stroke="currentcolor"
      strokeWidth="1.5"
    />
  </svg>
  Transfer inventory
</button>
</div> */
}

///Order
{
  /* <div className=" flex flex-col gap-2">
              <label
                className=" font-black  text-[16px]  leading-5 "
                htmlFor="Customer Name"
              >
                Customer Name <span className="opacity-50">(Optional)</span>
              </label>
              <div
                onClick={() => setSelectCustomerForm(true)}
                className=" bg-[#F5F5F5] cursor-pointer flex items-center px-4 rounded-[4px]  border-[#8ED06C] border-[1px] h-[50px] placeholder:text-[#6E6E6E80]"
              >
                {selectedCustomer.length > 0
                  ? selectedCustomer[0]?.name || selectedCustomer[0]?.email
                  : "Customer Name"}
              </div>
            </div> */
}


// create order button
  {/* <button
        type="button"
        onClick={() => setCreateOrderForm(true)}
        className=" flex bg-[#004324] rounded-[4px] gap-1 h-[40px] w-[140px] p-1 items-center text-white "
      >
        <img src="/public/plus.svg" alt="plus icon" />
        Create Order
      </button> */}



      ///add expense

// localStorage.removeItem('userRole')
      // Clear Zustand store based on the logged-in user's role
      //  const userRole = localStorage.getItem('userRole');
      //  if (userRole === 'STORE_OWNER') {
        //  } else if (userRole === 'STORE_STAFF') {
          //    clearStaff(); // Clear only staff state
//  }
          


// const handleRefreshTokenFailure = () => {
//   const{isStoreOwner, isStoreStaff} = getUserRole()
//   // Only redirect if not already on an authentication page
//   if (!isAuthenticatingPage()) {
//     console.warn("Session expired. Logging out the user...");
// // Clear role-specific session data
// if ( isStoreOwner) {
//   localStorage.removeItem("storeOwnerAccessToken");
//   localStorage.removeItem("storeOwnerRefreshToken");
//   localStorage.removeItem("storeOwnerId");
// } else if ( isStoreStaff) {
//   localStorage.removeItem("staffAccessToken");
//   localStorage.removeItem("staffRefreshToken");
//   localStorage.removeItem("staffId");
//   // localStorage.removeItem("staffPermissions");
// }
//     // Remove cookies
//     Cookies.remove("storeOwnerAccessToken");
//     Cookies.remove("storeOwnerRefreshToken");
//     Cookies.remove("staffAccessToken");
//     Cookies.remove("staffRefreshToken");

//     // Redirect to login page
//     window.location.href = "/";
//   }
// };

  {/* <button
                type="button"
                onClick={() => {
                  if (duration && amount) {
                    setChosenPlan({ amount, duration });
                  }
                }}
                className="bg-[#004324] mt-4 text-white font-bold p-2 rounded-md w-full"
              >
                Choose Plan
              </button> */}
                {/* {!chosenPlan && (
            <div className="flex w-full p-4 gap-4">
              <div className="bg-white border-2 border-[#8ED06C] shadow-lg p-4 rounded w-full">
                <h1>1 month</h1>
                <p>#5000</p>

                <button
                  onClick={() =>
                    setChosenPlan({
                      amount: 5000,
                      duration: "1 month",
                    })
                  }
                  className="bg-[#004324] mt-4  text-[#ffffff] font-bold p-2 rounded-md"
                >
                  Choose Plan
                </button>
              </div>
              <div className="bg-white border-2 border-[#8ED06C] shadow-lg w-full p-4 rounded">
                <h1>1 year</h1>
                <p>#50000</p>

                <button
                  onClick={() =>
                    setChosenPlan({
                      amount: 50000,
                      duration: "1 year",
                    })
                  }
                  className="bg-[#004324] mt-4 text-[#ffffff] font-bold p-2 rounded-md"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          )} */}




// from customers form
  // const handleConfirm = async () => {
  //   setFadeOut(true);
  //   setTimeout(async () => {
  //     try {
  //       const response = await axios.post("/api/customers", {
  //         name: customerName,
  //         phoneNumber,
  //         email: emailAddress,
  //         customerID,
  //       });

  //       console.log("Customer added successfully:", response.data);
  //       setIsConfirmationOpen(false);
  //       setIsFinalConfirmationOpen(true);
  //       setFadeOut(false);

  //       // Close final confirmation popup after a few seconds
  //       setTimeout(() => {
  //         setIsFinalConfirmationOpen(false);
  //       }, 2000); // Adjust this duration to control how long the popup is displayed
  //     } catch (error) {
  //       console.error("Error adding customer:", error);
  //     }
  //   }, 300);
  // };