import React from "react";
import {
  faTwitter,
  faGithubAlt,
  faInstagram,
  faDev,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false /* eslint-disable import/first */

const SocialButtons = () => {
  return ( 
    <div className="social">
    <a
      className="socialIcons"
      href="https://instagram.com/anaveecodes"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a
      className="socialIcons"
      href="https://twitter.com/anaveecodes"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <a
      className="socialIcons"
      href="https://github.com/ana-vela"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faGithubAlt} />
    </a>
    <a
      className="socialIcons"
      href="https://linkedin.com/in/ana-vela"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      className="socialIcons"
      href="https://dev.to/anaveecodes"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faDev} />
    </a>
  </div>
   );
}
 
export default SocialButtons;