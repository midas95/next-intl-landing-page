"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Build your new brand at the best price"
          paragraph=""
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "15" : "150"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="ECONOMY MEMBERSHIP"
          >
            <OfferList text="Registration of 1 .com domain" status="active" />
            <OfferList text="Hosting economy in the United States" status="active" />
            <OfferList text="Unlimited email accounts" status="active" />
            <OfferList text="Customer service via email" status="active" />
            <OfferList text="Advertise on 1 Instagram story per week" status="active" />
            {/* <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "20" : "200"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="ENTREPRENEUR MEMBERSHIP"
          >
            <OfferList text="Ready-to-use payment platforms (PayPal, Stripe, and more)" status="active" />
            <OfferList text="Legal texts for e-commerce (Privacy policy, cookies, terms and conditions, refunds, returns)" status="active" />
            <OfferList text="Registration of 1 .com domain" status="active" />
            <OfferList text="Premium hosting in the United States" status="active" />
            <OfferList text="Unlimited premium email accounts" status="active" />
            <OfferList text="SSL certificate" status="active" />
            <OfferList text="Comprehensive service management" status="active" />
            <OfferList text="Customer service 24/7/365 (via email and telegram)" status="active" />
            <OfferList text="Advertise on 3 Instagram stories per week" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "25" : "250"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="CORPORATE MEMBERSHIP"
          >
            <OfferList text="Ready-to-use payment platforms (PayPal, Stripe, and more)" status="active" />
            <OfferList text="Legal texts for e-commerce (Privacy policy, cookies, terms and conditions, refunds, returns)" status="active" />
            <OfferList text="Registration of 1 domain of your choice (.com .net .store .xyz .io)" status="active" />
            <OfferList text="Corporate hosting in the United States" status="active" />
            <OfferList text="Unlimited corporate email accounts" status="active" />
            <OfferList text="SSL certificate" status="active" />
            <OfferList text="Comprehensive service management" status="active" />
            <OfferList text="Customer service 24/7/365 (via email and telegram)" status="active" />
            <OfferList text="Advertise on 5 Instagram stories per week" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
