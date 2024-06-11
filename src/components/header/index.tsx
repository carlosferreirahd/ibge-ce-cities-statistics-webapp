import { useTheme } from "@/context/theme";
import { MoonIcon, SunIcon } from "@/components/icons";

export function Header() {

  const { toggleTheme, theme } = useTheme();

  return (
    <header className="w-full bg-base-100 shadow-md z-10">
      <div className="container">
        <div className="navbar px-0">
          <div className="flex-1">
            <h1 className="text-xl font-semibold">
              IBGE CE - Estatísticas
            </h1>
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
