import ceImg from "@/assets/ce.png";

export function Home() {

  return (
    <section className="w-full h-full">
      <div className="hero place-items-start bottom-line">
        <div className="hero-content flex-col gap-8 lg:flex-row">
          <img
            src={ceImg}
            className="max-w-sm hidden lg:block"
            width={180}
          />
          <div className="max-w-2xl">
            <h2 className="text-base-content text-4xl font-bold">
              Apresentador de {" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r to-primary from-info"
              >
                dados estatísticos
              </span>
              {" "} do Estado do Ceará
            </h2>
            <p className="py-3 text-base-content opacity-50 text-xl">
              Selecione municípios para detalhar as informações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
