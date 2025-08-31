import React from 'react';
import { Link } from 'react-router';
import { Logo } from '../index';

function Footer() {
  return (
    <section className="bottom-0 w-full overflow-hidden py-6 sm:py-10 bg-sky-400 text-white font-sans">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-3 sm:-m-6 flex flex-wrap">
          {/* Logo & Copyright */}
          <div className="w-full p-3 sm:p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between items-center md:items-start text-center md:text-left">
              <div className="mb-3 sm:mb-4 inline-flex items-center">
                <Logo width="80px" />
              </div>
              <p className="text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} All Rights Reserved by garvit811.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/12 p-3 sm:p-6">
            <h3 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold uppercase">
              Company
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><Link to="/">Features</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/">Affiliate Program</Link></li>
              <li><Link to="/">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/12 p-3 sm:p-6">
            <h3 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold uppercase">
              Support
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><Link to="/">Account</Link></li>
              <li><Link to="/">Help</Link></li>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/12 p-3 sm:p-6">
            <h3 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold uppercase">
              Legals
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><Link to="/">Terms &amp; Conditions</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
