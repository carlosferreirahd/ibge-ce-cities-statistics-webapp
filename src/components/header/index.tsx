import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme";
import { MoonIcon, SunIcon } from "@/components/icons";
import ceImg from "@/assets/ce.png";

export function Header() {

  const { toggleTheme, theme } = useTheme();

  return (
    <header className="w-full bg-base-100 shadow-md z-10">
      <div className="container">
        <div className="navbar px-0 animate-fade animate-once">
          <div className="flex-1">
            <Link className="btn btn-ghost" to="/cidades">
              <h1 className="text-xl font-semibold">
                <img
                  src={ceImg}
                  alt="Image Brasão do Ceará"
                  className="inline-block lg:hidden"
                  width={24}
                /> {" "}
                IBGE CE - Estatísticas
              </h1>
            </Link>
          </div>
          <div className="flex-none">
            <label
              htmlFor="theme-switch"
              className="swap swap-rotate btn btn-ghost focus-within:bg-base-200"
            >
              <input
                tabIndex={0}
                id="theme-switch"
                className="theme-controller"
                type="checkbox"
                checked={theme === "light"}
                aria-label="Alternar entre temas claro e escuro"
                onChange={toggleTheme}
              />
              <SunIcon
                className="swap-on fill-current size-7"
                aria-label="Tema claro"
              />
              <MoonIcon
                className="swap-off fill-current size-7"
                aria-label="Tema escuro"
              />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
