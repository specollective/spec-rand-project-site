import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
      <div className="flex w-full items-center bg-spec-blue-600 text-white">
        <div className="">
          <img src="/spec-logo.svg"  alt="Spec Logo" className="inline" />
          SPEC
        </div>
        <div className={`flex ml-auto space-x-3`}>
          <div className="link">About Us <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
          <div className="link">Docs <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
          <div className="link">Partnerships <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
          <div className="link">Get Involved <span><FontAwesomeIcon icon={faCaretDown} /></span></div>
        </div>
      </div>
  )
}


