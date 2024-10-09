// import React from 'react';
// import StatisticsCard from './EarnReport';
// import PaymentStatistics from './paymentstatistic';
// import TotalOrders from './totallorder';
// import './combine.css'

// const Combine = () => {
//   // Example data
//   const earnings = [
//     {
//       duration: 'Jan',
//       inHouseEarning: '-$250.00',
//       commissionEarning: '$0.00',
//       earnFromShipping: '$0.00',
//       deliverymanIncentive: '$0.00',
//       discountGiven: '$0.00',
//       vatTax: '$250.00',
//       refundGiven: '$0.00',
//       totalEarning: '$0.00'
//     },
//     // Add more data as needed
//   ];

//   const payments = [
//     { title: 'Cash payments', amount: '195,512.81', color: '004188' },
//     { title: 'Digital payments', amount: '19,786.00', color: '0177CD' },
//     { title: 'Offline payments', amount: '0.00', color: 'CDE6F5' },
//     { title: 'Wallet', amount: '6,355.00', color: 'A2CEEE' }
//     // Add more payment types as needed
//   ];

//   const totalAmount = '221.7K+';

//   return (
//     <div className="dashboard-container">
//       <StatisticsCard earnings={earnings} />
//       <div className="row">
//         <div className="col-md-6">
//           <PaymentStatistics payments={payments} />
//         </div>
//         <div className="col-md-6">
//           <TotalOrders totalAmount={totalAmount} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Combine;



// ThirdPartySettings.js

import React, { useState } from 'react';
import StatisticsCard from './EarnReport';

// import { FaWhatsapp } from 'react-icons/fa'; // Import React icon for WhatsApp
// import './OtherConfig.css'




const EarningReport = () => {
    const [currentTab, setCurrentTab] = useState('adminearning'); // State to manage active tab

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    // Function to render content based on currentTab state
    const renderContent = () => {
        switch (currentTab) {
            case 'adminearning':
                return (
                    // <a className="text-capitalize" href="https://6valley.6amtech.com/admin/social-login/view">Social media login content goes here</a>
                    // Replace with actual content for social media login
                    <StatisticsCard />
                );
            case 'venderearning':
                return (
                    // <a className="text-capitalize" href="https://6valley.6amtech.com/admin/social-login/view">Social media login content goes here</a>
                    // Replace with actual content for social media login
                    <StatisticsCard />
                    // <SocialLoginSettings />
                );
           
          
            default:
                return null;
        }
    };

    return (
        <div className="content container-fluid snipcss-YGKeU">
            <div className="mb-4 pb-2">
                <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/3rd-party.png" alt="" /> Earning Reports
                </h2>
            </div>

            {/* Inline page menu */}
            <div className="inline-page-menu my-4">
                <ul className="list-unstyled">
                    <li className={currentTab === 'adminearning' ? 'active' : ''}>
                        <button className="text-capitalize" onClick={() => handleTabChange('adminearning')}>
                             Admin Earning 
                        </button>
                    </li>
             
                    <li className={currentTab === 'venderearning' ? 'active' : ''}>
                        <button className="text-capitalize" onClick={() => handleTabChange('venderearning')}>
                             Vender Earning 
                        </button>
                    </li>
             
                 
                </ul>
            </div>

            {/* Render content based on currentTab */}
            <div className="card overflow-hidden">
                {renderContent()}
            </div>
        </div>
    );
};

export default EarningReport;


