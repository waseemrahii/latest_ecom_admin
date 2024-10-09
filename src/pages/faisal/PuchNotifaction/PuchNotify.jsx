// import React from "react";
// import { IoIosRadioButtonOff } from "react-icons/io";

// const PuchNotify = () => {
//   return (
//     <>
//       <div className="p-6 bg-white rounded-md shadow-md">
//         <div className="flex justify-between mb-4">
//           <div className="flex space-x-4">
//             <button className="text-blue-600">English(EN)</button>
//             <button className="text-gray-600">Arabic(SA)</button>
//             <button className="text-gray-600">Bangla(BD)</button>
//             <button className="text-gray-600">Hindi(IN)</button>
//           </div>
//           <select className="border border-gray-300 rounded-md px-4 py-2 bg-white">
//             <option>For Customer</option>
//             <option>For Admin</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//           <div>
//             <div className="flex justify-content-between  align-items-center text-sm border bg-secondary ">
//               <a href="#" className="font-semibold">
//                 Order Pending Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending message"
//                 className="text-xl me-6"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Order Pending Message"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2"
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Order Pending Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending message"
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Order Pending Message"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2"
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Order Out for Delivery Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending message"
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Order out for delivery Message"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2"
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Order out for delivery Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending message"
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Order out for delivery Message"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2"
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Order Out for Delivery Message
//               </a>
//               <IoIosRadioButtonOff
//                 label=" Order Out for Delivery Message"
//                 defaultMessage="Order out for delivery "
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Order out for delivery "
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2"
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Order out for delivery Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending "
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Order out for delivery "
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2 "
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Request Refound Cancel Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending "
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Your refund request is canceled {orderId}"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2 "
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Order For Delivery Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending "
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="You have a message from deliveryman"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2 "
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Message For Seller
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending "
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="You have a message from seller"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2 "
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Found Add By Admin Message
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending "
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="Admin add fund to your wallet"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2 "
//             ></textarea>
//           </div>
//           <div>
//             <div className="flex justify-content-between gap-3 align-items-center text-sm ">
//               <a href="#" className="font-semibold">
//                 Message Fom Admin
//               </a>
//               <IoIosRadioButtonOff
//                 label="Order Pending Message"
//                 defaultMessage="order pending "
//                 className="text-xl"
//               />
//             </div>{" "}
//             <br />
//             <textarea
//               name=""
//               rows={4}
//               cols={25}
//               id=""
//               placeholder="customize your message from admin message"
//               className="hover:border-blue-400 border border-gray-200 px-3 py-2 "
//             ></textarea>
//           </div>{" "}
//         </div>
//         <div className="flex justify-end items-end gap-3 ">
//           <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
//             Rest{" "}
//           </button>
//           <button className="rounded-md px-4 bg-blue-500 text-white py-1 border border-gray-300">
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PuchNotify;
import React from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import ToggleButton from "../ToggelButton";
// import ToggleButton from "./ToggelButton";

const PuchNotify = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-md shadow-md  overflow-x-hidden">
        <div className="flex flex-col md:flex-row px-5 gap-4 justify-between mb-4">
          <div className="flex space-x-4">
            <button className="text-blue-600">English(EN)</button>
            <button className="text-gray-600">Arabic(SA)</button>
            <button className="text-gray-600">Bangla(BD)</button>
            <button className="text-gray-600">Hindi(IN)</button>
          </div>
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white ">
            <option>For Customer</option>
            <option>For Admin</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center p-8">
          <div>
            <div className="flex gap-14  align-items-center text-sm  ">
              <a href="#" className="font-semibold">
                Order Pending Message
              </a>
              <ToggleButton />
              {/* <IoIosRadioButtonOff
                label="Order Pending Message"
                defaultMessage="order pending messages"
                className="text-xl me-6 "
              /> */}
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Order Pending Message"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2"
            ></textarea>
          </div>
          <div>
            <div className="flex  gap-14 align-items-center text-sm ">
              <a href="#" className="font-semibold">
                Order Panding Massage
              </a>
              <ToggleButton />
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Order Pending Message"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2"
            ></textarea>
          </div>
          <div>
            <div className="flex gap-3 align-items-center text-sm ">
              <a href="#" className="font-semibold">
                Order Out For Delivery Massage
              </a>
              <ToggleButton />
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Order out for delivery Message"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2"
            ></textarea>
          </div>
          <div>
            <div className="flex gap-5  align-items-center text-sm  ">
              <a href="#" className="font-semibold">
                Order out for delivery massage
              </a>
              <ToggleButton />
              {/* <IoIosRadioButtonOff
                label="Order Pending Message"
                defaultMessage="order pending messages"
                className="text-xl me-6 "
              /> */}
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Order out for delivery Message"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2"
            ></textarea>
          </div>
          <div>
            <div className="flex  gap-3 align-items-center text-sm ">
              <a href="#" className="font-semibold">
                Order Out for Delivery Message
              </a>
              <ToggleButton />
              {/* <IoIosRadioButtonOff
                label=" Order Out for Delivery Message"
                defaultMessage="Order out for delivery "
                className="text-xl"
              /> */}
            </div>{" "}
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Order out for delivery "
              className="hover:border-blue-400 border border-gray-200 px-10 py-2"
            ></textarea>
          </div>
          <div>
            <div className="flex gap-14  align-items-center text-sm  ">
              <a href="#" className="font-semibold">
                Order Pending Message
              </a>
              <ToggleButton />
              {/* <IoIosRadioButtonOff
                label="Order Pending Message"
                defaultMessage="order pending messages"
                className="text-xl me-6 "
              /> */}
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Order out for delivery "
              className="hover:border-blue-400 border border-gray-200 px-10 py-2 "
            ></textarea>
          </div>
          <div>
            <div className="flex gap-10  align-items-center text-sm  ">
              <a href="#" className="font-semibold">
                Requesting refound cencel <br />
                massage
              </a>
              <ToggleButton />
              {/* <IoIosRadioButtonOff
                label="Order Pending Message"
                defaultMessage="order pending messages"
                className="text-xl me-6 "
              /> */}
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Your refund request is canceled {orderId}"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2 "
            ></textarea>
          </div>
          <div>
            <div className="flex  gap-14 align-items-center text-sm ">
              <a href="#" className="font-semibold">
                Order for delivery massage
              </a>
              <ToggleButton />
              {/* <IoIosRadioButtonOff
                label="Order Pending Message"
                defaultMessage="order pending messages"
                className="text-xl me-6 "
              /> */}
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="You have a message from deliveryman"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2 "
            ></textarea>
          </div>
          <div>
            <div className="flex  gap-24 align-items-center text-sm ">
              <a href="#" className="font-semibold">
                Massage for saller
              </a>
              <ToggleButton />
              {/* <IoIosRadioButtonOff
                label="Order Pending Message"
                defaultMessage="order pending messages"
                className="text-xl me-6 "
              /> */}
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="You have a message from seller"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2 "
            ></textarea>
          </div>
          <div>
            <div className="flex  gap-5 align-items-center text-sm ">
              <a href="#" className="font-semibold">
                Found add by admin massage
              </a>
              <ToggleButton />
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="Admin add fund to your wallet"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2 "
            ></textarea>
          </div>
          <div>
            <div className="flex  gap-24 align-items-center text-sm ">
              <a href="#" className="font-semibold">
                Massage For Admin
              </a>
              <ToggleButton />
            </div>
            <br />
            <textarea
              name=""
              rows={4}
              cols={25}
              id=""
              placeholder="customize your message from admin message"
              className="hover:border-blue-400 border border-gray-200 px-10 py-2 "
            ></textarea>
          </div>{" "}
        </div>
        <div className="flex justify-end items-end gap-3 ">
          <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
            Rest{" "}
          </button>
          <button
            className="rounded-md px-4 bg-primary hover:bg-primary-dark text-white py-1 border border-gray-300"
            style={{ color: "white" }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PuchNotify;
