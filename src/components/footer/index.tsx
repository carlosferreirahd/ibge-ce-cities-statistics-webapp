import { ExternalLinkIcon, HeartIcon } from "@/components/icons";

export function Footer() {

  return (
    <footer className="w-full bg-base-300 text-base-content z-10">
      <hr className="divider m-0 border-none h-auto" />
      <div className="container">
        <div className="footer footer-center p-4">
          <div className="text-base font-semibold">
            <p>
              Feito com {" "}
              <HeartIcon
                className="size-6 inline-block align-middle text-red-600"
                aria-label="amor"
              />
              {" "} por {" "}
              <a
                className="link link-hover hover:link-primary"
                href="https://github.com/carlosferreirahd"
                target="_blank"
                rel="noopener noreferrer"
              >
                @carlosferreirahd {" "}
                <ExternalLinkIcon
                  className="size-4 inline-flex align-baseline"
                  strokeWidth={2}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
