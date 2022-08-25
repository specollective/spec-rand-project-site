import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="bg-spec-yellow-600">
      <a
        href="https://www.specollective.org/"
        target="_blank"
      >
        <img src="/spec-logo.svg" alt="Spec Logo" className="logo" />
      </a>
      <div className={`flex ml-auto space-x-3`}>
          <div className="link">About Us <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
          <div className="link">Docs <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
          <div className="link">Partnerships <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
          <div className="link">Get Involved <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
      </div>
    </footer>
  )
};