import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="max-w-md mx-auto mt-3">
        <div className="grid grid-cols-3 gap-5">
          <Link to="/send-money" className="flex flex-col items-center">
            <span className="material-symbols-outlined text-3xl text-green-500">
              send_money
            </span>
            <p>Send Money</p>
          </Link>
          {/* <div>
          <p>Mobile Recharge</p>
        </div> */}
          <div className="flex flex-col items-center">
            <span class="material-symbols-outlined text-3xl text-green-500">
              currency_exchange
            </span>
            <p>Cash Out</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-3xl text-green-500">
              payments
            </span>
            <p>Make Payment</p>
          </div>
        </div>
      </div>
    );
};

export default Home;