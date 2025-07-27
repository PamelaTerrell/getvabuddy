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

        <section className="va-travel">
          <h2>Travel Reimbursement for VA Appointments</h2>
          <p>
            Veterans may be eligible for mileage reimbursement and travel expense
            reimbursement when traveling to and from VA medical appointments.
            There are two ways to submit a claim:
          </p>
          <ul className="form-list">
            <li>
              <a
                href="https://access.va.gov/accessva/?csp=btsss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPrint className="print-icon" /> Submit a Travel Claim Online via BTSSS (AccessVA)
              </a>
            </li>
            <li>
              <a
                href="https://www.va.gov/find-forms/about-form-10-3542/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPrint className="print-icon" /> VA Form 10-3542 – Reimbursement of Travel Expenses (Downloadable PDF)
              </a>
            </li>
          </ul>
          <p>
            You must submit your travel claim within 30 days of the appointment. You can log in using ID.me, Login.gov, DS Logon, or a VA PIV card.
            If you prefer not to use the online system, you may download the form above and return it to your VA facility in person or by mail.
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

       
        <section className="va-contact">
  <h2>Need More Help?</h2>
  <p>
    You can speak directly with someone at the VA by calling the Veterans Affairs main line:
    <strong> 1-800-827-1000</strong> (Monday–Friday, 8:00 a.m.–9:00 p.m. ET).
  </p>

  <p>
    Visit the official VA website for more information:{" "}
    <a href="https://www.va.gov" target="_blank" rel="noopener noreferrer">
      www.va.gov
    </a>
  </p>

  <p>
    To access many of your benefits and services online, you can get started by signing in or registering at VA.gov using ID.me:
    <br />
    <a
      href="https://www.va.gov/sign-in/"
      target="_blank"
      rel="noopener noreferrer"
      className="idme-link"
    >
      Sign in or register at VA.gov with ID.me
    </a>
  </p>
</section>

        


<div style={{ textAlign: 'center', marginTop: '2rem' }}>
  <a href="https://pinkertonwilliams.org" target="_blank" rel="noopener noreferrer">
    <img 
      src="/og-image.png" 
      alt="DAV Chapter 18 Logo" 
      style={{ maxWidth: '300px', width: '100%', height: 'auto', marginBottom: '1rem', cursor: 'pointer' }} 
    />
  </a>
  <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}>
    <strong>Get VA Buddy</strong> was created by <strong>DAV Chapter 18 in Augusta, GA </strong>  
    to help veterans who prefer paper forms over digital tools. We offer easy access to commonly used VA forms — no logins or confusing websites.
  </p>
</div>




        <footer className="footer">
  <div className="footer-content">
    <p>&copy; {new Date().getFullYear()} Get VA Buddy · DAV Chapter 18 · Augusta, GA</p>
    <p className="disclaimer">
      This site is not affiliated with the U.S. Department of Veterans Affairs. It was created to support veterans and their families.
    </p>
    <p>
      Connect with DAV Chapter 18:{" "}
      <a href="https://pinkertonwilliams.org" target="_blank" rel="noopener noreferrer">
        pinkertonwilliams.org
      </a>
    </p>
  </div>

   {/* Attribution section */}
   <div className="image-attribution">
    <img src="/buddy.png" alt="Buddy Icon" style={{ width: '50px', marginRight: '10px' }} />
    <p className="attribution-text">
      Icon made by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a> 
    </p>
  </div>
</footer>




      </main>

      <Analytics />
    </>
  );
}
