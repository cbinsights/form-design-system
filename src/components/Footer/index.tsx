import React from 'react';
import cbiLogo from 'assets/images/CBI_Logo_White.svg';

export type FooterProps = {
  site: string;
};

export const Footer = ({ site }: FooterProps): JSX.Element => (
  <footer className={'fdsFooter-container'}>
    <div className={'fdsFooter-content'}>
      <div className={'fdsFooter-mainContent'}>
        <section className={'padding--bottom--l fdsFooter-addressSection'}>
          <h2>
            <img width="178" height="20" alt="CB Insights logo" src={cbiLogo} />
          </h2>
          <address>
            498 Seventh Avenue 12th floor
            <br />
            New York, NY 10018
          </address>
          <address>
            <a href="mailto:info@cbinsights.com">info@cbinsights.com</a>
            <br />
            <a href="tel:+12122923148">212 292 3148</a>
          </address>
        </section>

        <nav className={'fdsFooter-nav'}>
          <section className={'fdsFooter-menuSection'}>
            <h3>
              <a href={`${site}/#`}>About</a>
            </h3>
            <ul>
              <li>
                <a href={`${site}/about/`}>About Us</a>
              </li>
              <li>
                <a href={`${site}/contact-us/`}>Contact Us</a>
              </li>
            </ul>
          </section>

          <section className={'fdsFooter-menuSection'}>
            <h3>
              <a href={`${site}/#`}>How We Help</a>
            </h3>
            <ul>
              <li>
                <a href={`${site}/how-we-help/understand-tech-markets/`}>
                  Understand Tech Markets
                </a>
              </li>
              <li>
                <a href={`${site}/how-we-help/competitor-strategy/`}>
                  Anticipate Competitor Strategy
                </a>
              </li>
              <li>
                <a href={`${site}/how-we-help/create-tech-strategy/`}>
                  Create Tech Strategy
                </a>
              </li>
              <li>
                <a href={`${site}/how-we-help/find-tech-vendors/`}>
                  Connect With Tech Vendors
                </a>
              </li>
              <li>
                <a href={`${site}/how-we-help/digital-transformation/`}>
                  Digital Transformation
                </a>
              </li>
            </ul>
          </section>

          <section className={'fdsFooter-menuSection'}>
            <h3>
              <a href={`${site}/#`}>What We Offer</a>
            </h3>
            <ul>
              <li>
                <a href={`${site}/what-we-offer/platform/`}>Platform</a>
              </li>
              <li>
                <a href={`${site}/what-we-offer/data/`}>Data</a>
              </li>
              <li>
                <a href={`${site}/what-we-offer/research/`}>Research Overview</a>
              </li>
              <li>
                <a href={`${site}/what-we-offer/api-data-feeds/`}>API &amp; Data Feeds</a>
              </li>
              <li>
                <a href={`${site}/what-we-offer/pricing/`}>Pricing</a>
              </li>
            </ul>
          </section>

          <section className={'fdsFooter-menuSection'}>
            <h3>
              <a href={`${site}/#`}>Popular Research</a>
            </h3>
            <ul>
              <li>
                <a
                  href={`${site}/research/report/digital-health-startups-redefining-healthcare/`}
                >
                  Digital Health 150
                </a>
              </li>
              <li>
                <a href={`${site}/research/report/fintech-250-startups-most-promising/`}>
                  Fintech 250
                </a>
              </li>
              <li>
                <a href={`${site}/research/report/retail-technology-startups/`}>
                  Retail Tech 100
                </a>
              </li>
              <li>
                <a href={`${site}/research-unicorn-companies/`}>Unicorn Tracker</a>
              </li>
              <li>
                <a href={`${site}/org-directory/`}>Company Directory</a>
              </li>
              <li>
                <a href={`${site}/research-vc-glossary-index/`}>VC Glossary</a>
              </li>
              <li>
                <a href={`${site}/esp`}>ESP Market Matrix Directory</a>
              </li>
              <li>
                <a href={`${site}/research-company-list-applications`}>
                  Company List Applications
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </div>
      <div className={'fdsFooter-separator'} />
      <ul className={'fdsFooter-moreInfoLinks'}>
        <li className={'fdsFooter-moreInfoLink'}>
          <a href={`${site}/terms-of-service/`}>Terms of Service</a>
        </li>
        <li className={'fdsFooter-moreInfoLink'}>
          <a href={`${site}/councils-terms-and-conditions/`}>
            Council Terms and Conditions
          </a>
        </li>
        <li className={'fdsFooter-moreInfoLink'}>
          <a href={`${site}/privacy-policy/`}>Privacy Policy</a>
        </li>
        <li className={'fdsFooter-moreInfoLink'}>
          <a href="https://preferences.cbinsights.com/privacy">Do Not Sell My Info</a>
        </li>
        <li className={'fdsFooter-moreInfoLink'}>
          <a href={`${site}/research-partnerships`}>Partnership</a>
        </li>
      </ul>
      <p className={'fdsFooter-copyright'}>
        Copyright {new Date().getFullYear()} CB Information Services, Inc. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
