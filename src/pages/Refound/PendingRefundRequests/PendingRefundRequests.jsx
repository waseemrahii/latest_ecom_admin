// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRefundsForVendorByStatus, fetchRefundsWithFilters } from '../../../components/redux/refundSlice'; // Ensure this path is correct
// import { FaDownload, FaEye, FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import './PendingRefundRequests.css';

// const PendingRefundRequests = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const dispatch = useDispatch();
//   const { refunds, loading, error } = useSelector((state) => state.refund); // Adjusted to `state.refund` based on your slice name

//   const refundStatus = 'Pending';


//   useEffect(() => {
//     dispatch(fetchRefundsForVendorByStatus({status: refundStatus }));
//   }, [dispatch, refundStatus]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     dispatch(fetchRefundsWithFilters({ 
//       vendorId, 
//       searchQuery: searchValue, 
//       status: refundStatus 
//     }));
//   };

//   return (
//     <div className="content container-fluid">
//       <div className="mb-3 p-7">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/refund-request.png"
//             alt="Pending Refund Requests"
//           />
//           Pending Refund Requests
//           <span className="badge badge-soft-dark radius-50">{refunds.length}</span>
//         </h2>
//       </div>

//       <div className="card p-7">
//         <div className="px-3 py-4 light-bg">
//           <div className="d-flex flex-wrap justify-between gap-3 align-items-center">
//             <form onSubmit={handleSearchSubmit} className="w-full md:w-auto">
//               <div className="input-group input-group-merge input-group-custom border border-green-500">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">
//                     <FaSearch />
//                   </div>
//                 </div>
//                 <input
//                   type="search"
//                   name="searchValue"
//                   className="form-control"
//                   placeholder="Search by Title or Code or Discount Type"
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//             <div className="flex flex-wrap gap-3 w-full md:w-auto">
//               <button
//                 type="button"
//                 className="flex items-center px-4 py-2 bg-[#A1CB46] rounded text-white hover:bg-[#7e9f37] gap-2 justify-center"
//                 data-toggle="dropdown"
//               >
//                 <FaDownload /> Export
//               </button>
//               <select
//                 name="refundFilter"
//                 id="refundFilter"
//                 className="md:w-40 lg:w-48 bg-white border-gray-500 border rounded px-3 py-2"
//               >
//                 <option value="">All</option>
//                 <option value="inhouse">Inhouse Request</option>
//                 <option value="vendor">Vendor Request</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {loading ? (
//           <div className="loader-container">
//             <div className="loader">
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//           </div>
//         ) : error ? (
//           <div>Error: {error}</div>
//         ) : (
//           <div className="table-responsive datatable-custom">
//             <table
//               className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
//               style={{ textAlign: 'left' }}
//             >
//               <thead className="thead-light thead-50 text-capitalize">
//                 <tr>
//                   <th>SL</th>
//                   <th className="text-center">Refund ID</th>
//                   <th>Order ID</th>
//                   <th>Product Info</th>
//                   <th>Customer Info</th>
//                   <th className="text-end">Total Amount</th>
//                   <th className="text-center">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {refunds.map((request, index) => (
//                   <tr key={request._id}>
//                     <td>{index + 1}</td>
//                     <td className="text-center">{request._id.substring(0, 3)}   </td>
                    
//                     <td>
//                       <a href="#" className="title-color hover-c1">
//                         {request.order._id.substring(0, 6)}
//                       </a>
//                     </td>
//                     <td>
//                       <div className="d-flex flex-wrap gap-2">
//                         <a href="#">
//                           <img
//                             src={`http://localhost:3000/${request.order.products[0].thumbnail}`}
//                             className="avatar border"
//                             alt={request.order.products[0].name}
//                           />
//                         </a>
//                         <div className="d-flex flex-column gap-1">
//                           <a
//                             href="#"
//                             className="title-color font-weight-bold hover-c1"
//                           >
//                             {request.order.products[0].name}
//                           </a>
//                           <span className="fz-12">QTY: {request.order.products[0].quantity}</span>
//                         </div>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex flex-column gap-1">
//                         <a
//                           href="#"
//                           className="title-color font-weight-bold hover-c1"
//                         >
//                           {request.order.customer.firstName} {request.order.customer.lastName}
//                         </a>
//                         <a
//                           href={`tel:${request.order.customer.phoneNumber}`}
//                           className="title-color hover-c1 fz-12"
//                         >
//                           {request.order.customer.phoneNumber}
//                         </a>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex flex-column gap-1 text-end">
//                         <div> PKR {request.order.totalAmount.toFixed(2)} </div>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex justify-content-center">
//                         <Link
//                           to={`/refunddetail/${request._id}`}
//                           // className="btn btn-outline--success btn-sm"
//                           className="btn  border-green-500 text-green-500 btn-sm hover:text-white hover:bg-green-400"
//                           title="View"
//                         >
//                           <FaEye />
//                         </Link>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PendingRefundRequests;




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefundsForVendorByStatus } from '../../../components/redux/refundSlice'; // Ensure this path is correct
import { FaDownload, FaEye, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PendingRefundRequests.css';

const PendingRefundRequests = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredRefunds, setFilteredRefunds] = useState([]);
  const dispatch = useDispatch();
  const { refunds, loading, error } = useSelector((state) => state.refund); // Adjusted to `state.refund` based on your slice name

  const refundStatus = 'Pending';

  useEffect(() => {
    // Fetch the refunds on component mount
    dispatch(fetchRefundsForVendorByStatus({ status: refundStatus }));
  }, [dispatch, refundStatus]);

  useEffect(() => {
    // Update the filtered refunds whenever the refunds or searchValue changes
    if (refunds.length > 0) {
      const lowercasedFilter = searchValue.toLowerCase();
      const filteredData = refunds.filter((refund) =>
        refund.order._id.toLowerCase().includes(lowercasedFilter) ||
        refund.order.products[0].name.toLowerCase().includes(lowercasedFilter) ||
        `${refund.order.customer.firstName} ${refund.order.customer.lastName}`.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredRefunds(filteredData);
    }
  }, [refunds, searchValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="content container-fluid">
      <div className="mb-3 p-7">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/refund-request.png"
            alt="Pending Refund Requests"
          />
          Pending Refund Requests
          <span className="badge badge-soft-dark radius-50">{filteredRefunds.length}</span>
        </h2>
      </div>

      <div className="card p-7">
        <div className="px-3 py-4 light-bg">
          <div className="d-flex flex-wrap justify-between gap-3 align-items-center">
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto">
              <div className="input-group input-group-merge input-group-custom border border-green-500">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FaSearch />
                  </div>
                </div>
                <input
                  type="search"
                  name="searchValue"
                  className="form-control"
                  placeholder="Search by Title, Code, or Customer"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-[#A1CB46] rounded text-white hover:bg-[#7e9f37] gap-2 justify-center"
                data-toggle="dropdown"
              >
                <FaDownload /> Export
              </button>
              <select
                name="refundFilter"
                id="refundFilter"
                className="md:w-40 lg:w-48 bg-white border-gray-500 border rounded px-3 py-2"
              >
                <option value="">All</option>
                <option value="inhouse">Inhouse Request</option>
                <option value="vendor">Vendor Request</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="loader-container">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="table-responsive datatable-custom">
            <table
              className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
              style={{ textAlign: 'left' }}
            >
              <thead className="thead-light thead-50 text-capitalize">
                <tr>
                  <th>SL</th>
                  <th className="text-center">Refund ID</th>
                  <th>Order ID</th>
                  <th>Product Info</th>
                  <th>Customer Info</th>
                  <th className="text-end">Total Amount</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRefunds.map((request, index) => (
                  <tr key={request._id}>
                    <td>{index + 1}</td>
                    <td className="text-center">{request._id.substring(0, 3)}...</td>
                    <td>
                      <a href="#" className="title-color hover-c1">
                        {request.order._id.substring(0, 6)}
                      </a>
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-2">
                        <a href="#">
                          <img
                            src={`http://localhost:3000/${request.order.products[0].thumbnail}`}
                            className="avatar border"
                            alt={request.order.products[0].name}
                          />
                        </a>
                        <div className="d-flex flex-column gap-1">
                          <a
                            href="#"
                            className="title-color font-weight-bold hover-c1"
                          >
                            {request.order.products[0].name}
                          </a>
                          <span className="fz-12">QTY: {request.order.products[0].quantity}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-1">
                        <a
                          href="#"
                          className="title-color font-weight-bold hover-c1"
                        >
                          {request.order.customer.firstName} {request.order.customer.lastName}
                        </a>
                        <a
                          href={`tel:${request.order.customer.phoneNumber}`}
                          className="title-color hover-c1 fz-12"
                        >
                          {request.order.customer.phoneNumber}
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-1 text-end">
                        <div>PKR {request.order.totalAmount.toFixed(2)}</div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Link
                          to={`/refunddetail/${request._id}`}
                          className="btn border-green-500 text-green-500 btn-sm hover:text-white hover:bg-green-400"
                          title="View"
                        >
                          <FaEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingRefundRequests;
