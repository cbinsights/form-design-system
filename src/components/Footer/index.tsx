import React from 'react';
import cbiLogo from './CBI_Logo_White.svg';

export type FooterProps = {
  domain: string;
};

export const Footer: React.FC<FooterProps> = ({ domain }) => (
  <footer className={'FDSFootercontainer'}>
    <div className={'FDSFootercontent'}>
      <div className={'FDSFootermainContent'}>
        <section className={'padding--bottom--l FDSFooteraddressSection'}>
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

        <nav className={'FDSFooternav'}>
          <section className={'FDSFootermenuSection'}>
            <h3>
              <a href={`https://${domain}.cbinsights.com/#`}>About</a>
            </h3>
            <ul>
              <li>
                <a href={`https://${domain}.cbinsights.com/about/`}>About Us</a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/contact-us/`}>Contact Us</a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/community-events/`}>
                  Community &amp; Events
                </a>
              </li>
            </ul>
          </section>

          <section className={'FDSFootermenuSection'}>
            <h3>
              <a href={`https://${domain}.cbinsights.com/#`}>How We Help</a>
            </h3>
            <ul>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/how-we-help/understand-tech-markets/`}
                >
                  Understand tech markets
                </a>
              </li>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/how-we-help/competitor-strategy/`}
                >
                  Anticipate competitor strategy
                </a>
              </li>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/how-we-help/create-tech-strategy/`}
                >
                  Create tech strategy
                </a>
              </li>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/how-we-help/find-tech-vendors/`}
                >
                  Connect with tech vendors
                </a>
              </li>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/how-we-help/digital-transformation/`}
                >
                  Turbocharge digital transformation
                </a>
              </li>
            </ul>
          </section>

          <section className={'FDSFootermenuSection'}>
            <h3>
              <a href={`https://${domain}.cbinsights.com/#`}>What We Offer</a>
            </h3>
            <ul>
              <li>
                <a href={`https://${domain}.cbinsights.com/what-we-offer/platform/`}>
                  Platform
                </a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/what-we-offer/data/`}>Data</a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/what-we-offer/research/`}>
                  Research Overview
                </a>
              </li>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/what-we-offer/api-data-feeds/`}
                >
                  API &amp; Data Feeds
                </a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/what-we-offer/pricing/`}>
                  Pricing
                </a>
              </li>
            </ul>
          </section>

          <section className={'FDSFootermenuSection'}>
            <h3>
              <a href={`https://${domain}.cbinsights.com/#`}>Popular Research</a>
            </h3>
            <ul>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/research/report/digital-health-startups-redefining-healthcare/`}
                >
                  Digital Health 150
                </a>
              </li>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/research/report/fintech-250-startups-most-promising/`}
                >
                  Fintech 250
                </a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/research-unicorn-companies/`}>
                  Unicorn Tracker
                </a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/org-directory/`}>
                  Company Directory
                </a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/esp`}>
                  ESP Market Matrix Directory
                </a>
              </li>
              <li>
                <a href={`https://${domain}.cbinsights.com/research-vc-glossary-index/`}>
                  VC Glossary
                </a>
              </li>
              <li>
                <a
                  href={`https://${domain}.cbinsights.com/research/report/retail-technology-startups/`}
                >
                  Retail Tech 100
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </div>
      <div className={'FDSFooterseparator'} />
      <ul className={'FDSFootermoreInfoLinks'}>
        <li className={'FDSFootermoreInfoLink'}>
          <a href={`https://${domain}.cbinsights.com/terms-of-service/`}>
            Terms of Service
          </a>
        </li>
        <li className={'FDSFootermoreInfoLink'}>
          <a href={`https://${domain}.cbinsights.com/councils-terms-and-conditions/`}>
            Council Terms and Conditions
          </a>
        </li>
        <li className={'FDSFootermoreInfoLink'}>
          <a href={`https://${domain}.cbinsights.com/privacy-policy/`}>Privacy Policy</a>
        </li>
        <li className={'FDSFootermoreInfoLink'}>
          <a href="https://preferences.cbinsights.com/privacy">Do Not Sell My Info</a>
        </li>
        <li className={'FDSFootermoreInfoLink'}>
          <a href={`https://${domain}.cbinsights.com/research-partnerships`}>
            Partnership
          </a>
        </li>
      </ul>
      <p className={'FDSFootercopyright'}>
        Copyright {new Date().getFullYear()} CB Information Services, Inc. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
