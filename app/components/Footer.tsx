"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      className="bg-white text-gray-800 px-6 md:px-40 py-12 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
    >
      <div className="flex py-5 gap-6">
        <Image src="/facebook.svg" alt="Facebook" width={25} height={25} />
        <Image src="/instagram.svg" alt="Instagram" width={25} height={25} />
        <Image src="/linkedin.svg" alt="LinkedIn" width={25} height={25} />
      </div>

      <div className="flex flex-col gap-4 text-[13px] text-[#292b29]">
        <p>
          1 Better Mortgage’s One Day Mortgage™ promotion offers qualified
          customers who provide certain required financial
          information/documentation to Better Mortgage within 4 hours of locking
          a rate on a mortgage loan the opportunity to receive an underwriting
          determination from Better Mortgage within 24 hours of their rate lock.
          The underwriting determination is subject to customary terms,
          including fraud and anti-money laundering checks, that take place
          pre-closing and which may trigger additional required documentation
          from the customer. Better Mortgage does not guarantee that initial
          underwriting approval will result in a final underwriting approval.
          <a href="" className="underline">
            See One Day Mortgage™ Terms and Conditions.
          </a>
        </p>

        <p>
          2Better Mortgage’s One Day HELOC™ promotion offers qualified customers
          who provide certain required financial information/documentation to
          Better Mortgage within 4 hours of locking a rate on a HELOC loan the
          opportunity to receive an underwriting determination from Better
          Mortgage within 24 hours of their rate lock. The underwriting
          determination is subject to customary terms, including fraud and
          anti-money laundering checks, that take place pre-closing and which
          may trigger additional required documentation from the customer.
          Better Mortgage does not guarantee that initial underwriting approval
          will result in final underwriting approval. See{" "}
          <a href="" className="underline">
            {" "}
            One Day Heloc™ Terms and Conditions.
          </a>
        </p>

        <p>
          3Assumes borrowers are eligible for the Automated Valuation Model
          (AVM) to calculate their home value, their loan amount is less than
          $400,000, all required documents are uploaded to their Better Mortgage
          online account within 24 hours of application, closing is scheduled
          for the earliest available date and time, and a notary is readily
          available. Funding timelines may vary and may be longer if an
          appraisal is required to calculate a borrower’s home value.
        </p>

        <hr />

        <p>
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved.
        </p>

        <p>
          Better BMC operates under the name Better Mortgage Corporation in New
          York.
        </p>

        <p>
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
          Center, 80th Floor, New York, NY 10007. Loans made or arranged
          pursuant to a California Finance Lenders Law License. Not available in
          all states. Equal Housing Lender.{" "}
          <a href="" className="underline">
            {" "}
            NMLS Consumer Access
          </a>
        </p>

        <p>
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s{" "}
          <a href="" className="underline">
            license numbers
          </a>
          Better Real Estate, LLC provides access to real estate brokerage
          services via its nationwide network of partner brokerages and real
          estate agents (“Better Real Estate Partner Agents”). Equal Housing
          Opportunity. All rights reserved.
        </p>

        <p>
          <a href="" className="underline">
            New York State Housing and Anti-Discrimination Notice
          </a>
        </p>

        <p>
          <a href="" className="underline">
            New York Standard Operating Procedures
          </a>
        </p>

        <p>
          Texas Real Estate Commission:{" "}
          <a href="" className="underline">
            Information About Brokerage Services | Consumer Protection Notice
          </a>
        </p>

        <p>
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
        </p>

        <p>
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency. License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>

        <p>
          Insurance quotes and policies are offered through Better Cover, LLC. A
          Pennsylvania Resident Producer Agency. License #881593. Here is a full
          listing of Better Cover, LLC’s{" "}
          <a href="" className="underline">
            license numbers.
          </a>
        </p>

        <p>
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>

        <p>
          Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home
          & Finance Holding Company. Each company is a separate legal entity
          operated and managed through its own management and governance
          structure as required by its state of incorporation, and applicable
          and legal and regulatory requirements. Products not available in all
          states.
        </p>

        <p>
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &
          Finance Holding Company. Better Home & Finance Holding Company
          trademarks are federally registered with the U. S. Patent and
          Trademark Office. Better Cover is a registered trademark with the U.S.
          Patent and Trademark Office and is owned by Better Cover, LLC.
        </p>

        <p>
          Licensed by the Department of Financial Protection and Innovation
          under the California Residential Mortgage Lending Act
        </p>
      </div>
    </motion.footer>
  );
}
