import React from "react";
import "./index.css";
import { FaPrint } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

export default function HomePage() {
  return (
    <>
      <main className="container">
        <section className="hero">
          <h1>Get VA Buddy</h1>
          <p className="tagline">
            Helping you navigate VA forms and benefits with ease
          </p>
        </section>

        <section>
          <h2>Help with VA Forms and Benefits</h2>
          <p>
            If you need help dealing with the VA, you're in the right place. Below are the most commonly used forms. You can click any of the links to print them out and submit by mail.
          </p>
          <p className="note">
            Some of the links below may also offer an online tool, but you can skip that and just download and print the paper form if you prefer.
          </p>
        </section>

        <section className="va-forms">
          <h2>Common VA Forms</h2>
          <ul className="form-list">
            <li>
              <a href="https://www.va.gov/find-forms/about-form-21-526ez/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-526EZ – Disability Compensation Claim
              </a>
            </li>
            <li>
              <a href="https://www.gsa.gov/system/files/2024-10/SF180-24a.pdf" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> SF-180 – Request DD214, Medical Records, or Personnel File
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/find-forms/about-form-21-0966/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-0966 – Intent to File a Claim
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/find-forms/about-form-21-4142/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-4142 – Authorization to Disclose Information to VA
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/find-forms/about-form-21-4138/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-4138 – Statement in Support of Claim
              </a>
            </li>
            <li>
              <a href="https://www.vba.va.gov/pubs/forms/VBA-21-0781-ARE.pdf" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-0781 – PTSD Claim (Statement in Support of Claim)
              </a>
            </li>
            <li>
              <a href="https://www.vba.va.gov/pubs/forms/VBA-21-0781-ARE.pdf" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-0781a – PTSD Secondary Claim
              </a>
            </li>
            <li>
              <a href="https://www.vba.va.gov/pubs/forms/VBA-21-2680-ARE.pdf" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-2680 – Examination for Housebound Status or Permanent Need for Aid and Attendance
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/find-forms/about-form-21-4502/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-4502 – Application for Automobile or Other Conveyance and Adaptive Equipment
              </a>
            </li>
            <li>
              <a href="https://www.vba.va.gov/pubs/forms/VBA-21-8940-ARE.pdf" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-8940 – Application for Increased Compensation Based on Unemployability
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/find-forms/about-form-20-0995/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 20-0995 – Decision Review Request: Supplemental Claim
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/find-forms/about-form-21p-527ez/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21P-527EZ – Application for Pension
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/find-forms/about-form-21p-534ez/" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21P-534EZ – Application for DIC, Death Pension, and/or Accrued Benefits
              </a>
            </li>
            <li>
              <a href="https://www.vba.va.gov/pubs/forms/VBA-21-686c-ARE.pdf" target="_blank" rel="noopener noreferrer">
                <FaPrint className="print-icon" /> VA Form 21-686c – Add or Remove Dependents
              </a>
            </li>
          </ul>
          <p>
            These forms can be printed and mailed to the VA. If you need help printing or filling them out, we’re here to assist.
          </p>
        </section>

        <section>
          <h2>Mailing Address for VA Claims</h2>
          <p>Send your completed forms to:</p>
          <address className="mailing-address">
            Department of Veterans Affairs<br />
            Claims Intake Center<br />
            PO Box 4444<br />
            Janesville, WI 53547-4444
          </address>
          <p>
            Be sure to include your name, Social Security number or VA file number, and any supporting documents.
          </p>
        </section>

        <section>
          <h2>Need Help?</h2>
          <p>
            If you're unsure which form to use or how to complete it, help is available. Ask someone you trust, reach out to a Veteran Service Officer (VSO), or visit your local VA office for guidance.
          </p>
        </section>

        <section className="about-section">
          <h2>Why This Site Was Created</h2>
          <p>
            This site was created in connection with <strong>DAV Chapter 18 in Augusta, GA</strong>, born out of a need we see all too often—older veterans and dedicated service officers who don’t have the computer skills or tools to access critical VA forms and benefits online. Our goal is to make it as simple as possible to get the help you’ve earned, without frustration or confusion.
          </p>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Get VA Buddy · DAV Chapter 18 · Augusta, GA</p>
            <p className="disclaimer">
              This site is not affiliated with the U.S. Department of Veterans Affairs. It was created to support veterans and their families.
            </p>
          </div>
        </footer>
      </main>

      <Analytics />
    </>
  );
}
