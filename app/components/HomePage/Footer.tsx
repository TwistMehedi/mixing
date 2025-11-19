

const Footer = () => {
  return (
    <footer
      className="
  footer 
  bg-primary text-primary-content p-10 
  flex flex-col items-center 
  sm:flex-row sm:justify-between sm:items-start 
  gap-10
"
    >
      {/* Left Section */}
      <aside className="text-center sm:text-left flex flex-col items-center sm:items-start">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current mb-2"
        >
          <path d="M22.672 15.226l-2.432..."></path>
        </svg>

        <p className="font-bold">
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>

      {/* Right Section - Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883..."></path>
            </svg>
          </a>

          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604..."></path>
            </svg>
          </a>

          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642..."></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
