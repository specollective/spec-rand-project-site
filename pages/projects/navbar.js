import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="flex w-full items-center bg-spec-blue-600 text-white">
      <div className="">
        <img src="/spec-logo.svg" alt="Spec Logo" className="inline" />
        SPEC
      </div>
      <div className={`flex ml-auto space-x-3`}>
        <div className="dropdown relative">
          <a
            className="dropdown-toggle px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            data-bs-toggle="dropdown"
          >
            About Us{" "}
            <span>
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </a>
          <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none">
            <li>
              <a
                className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
                href="#"
              >
                Action
              </a>
            </li>
          </ul>
        </div>
        <div className="link">
          Docs{" "}
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
        <div className="link">
          Partnerships{" "}
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
        <div className="link">
          Get Involved{" "}
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
      </div>
    </div>
  );
}
