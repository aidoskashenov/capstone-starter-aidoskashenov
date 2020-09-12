import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub, faLinkedin, faFacebook);

export const Footer = () => (
  <footer className="footer">
    <div>
      <div className="divider">Let&apos;s Connect!</div>
    </div>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>ATC LogBook by&nbsp;</strong>
          <a
            href="https://codefinity.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aidos Kashenov
          </a>
        </p>
        <div className="level">
          <a
            href="https://github.com/aidoskashenov"
            target="_blank"
            rel="noopener noreferrer"
            className="level-item mx-2"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/aidos-kashenov/"
            target="_blank"
            rel="noopener noreferrer"
            className="level-item mx-2"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            className="level-item mx-2"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
        </div>
      </div>
    </footer>
  </footer>
);
