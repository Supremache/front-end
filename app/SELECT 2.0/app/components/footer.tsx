import { Link } from "react-router";
import { footerColumns } from "~/constants";

export function Footer() {
  return (
    <footer className="h-full w-full mx-auto border-t border-border/25">
      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-16">
        <div className="lg:col-span-2 space-y-4">
          <img
            src="../images/logo.png"
            alt="SELECT Logo"
            className="h-8 w-auto object-contain"
          />
          <p className="text-sm text-muted max-w-52">
            The Snowflake optimization and cost management platform
          </p>
          <div className="flex space-x-2">
            <Link
              to="#"
              className="bg-[#23242b] h-7 w-7 rounded-md flex items-center justify-center hover:bg-[#23242b]/90 transition-colors"
              aria-label="Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="17"
                height="17"
                fill="#FFFFFF"
                viewBox="0 0 30 30"
              >
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
              </svg>
            </Link>

            <Link
              to="#"
              className="bg-[#23242b] h-7 w-7 rounded-md flex items-center justify-center hover:bg-[#23242b]/90 transition-colors"
              aria-label="Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="19"
                height="19"
                fill="#FFFFFF"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </Link>
          </div>
          <div className="flex space-x-4 py-4">
            <div className="rounded-full">
              <img
                src="../images/NIST-certification.png"
                alt="NIST Certification"
                className="max-h-16 w-auto rounded-full"
              />
            </div>

            <div className="rounded-full">
              <img
                src="../images/SOC2-certification.png"
                alt="SOC2 Certification"
                className="max-h-16 w-auto rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Footer Columns - Each takes 1 column */}
        {footerColumns.map((column) => (
          <div key={column.id} className="space-y-4">
            <h3 className="text-xs text-muted-foreground">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-xs text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="my-10 space-y-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Select Labs Inc.
        </p>
      </div>
    </footer>
  );
}
