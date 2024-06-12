import { Link } from "react-router-dom";
import { useCities } from "@/hooks/use-cities";
import { LocationIcon, MagnifyIcon, XCircleIcon } from "@/components/icons";

export function CitiesList() {

  const {
    data,
    isPending,
    isError,
    error
  } = useCities();

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-6 w-1/3" />
        <div className="skeleton h-32 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert" className="alert alert-error shadow-lg max-w-lg mx-auto">
        <XCircleIcon className="size-12 shrink-0" />
        <div>
          <h3 className="font-bold text-lg">
            Erro ao buscar cidades
          </h3>
          <div className="text-base">
            {error?.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <form className="form-control w-full max-w-md mb-6">
        <label className="input input-bordered flex items-center gap-2">
          <LocationIcon className="size-4" />
          <input
            className="grow"
            type="text"
            placeholder="Pesquise por municípios..."
          />
          <MagnifyIcon className="size-4" strokeWidth={2} />
        </label>
      </form>
      <ul className="min-w-0 flex flex-row flex-wrap justify-center gap-y-6 -mx-3">
        {data?.map((city) => (
          <li
            key={city.id}
            className="
              flex-grow-0 flex-shrink-0 px-3 basis-full max-w-full
              sm:basis-1/2 sm:max-w-[50%]
              lg:basis-1/3 lg:max-w-[33.333333%]
              xl:basis-1/4 xl:max-w-[25%]
              2xl:basis-1/5 2xl:max-w-[20%]
            "
          >
            <div className="card card-compact bg-base-200 shadow-lg h-full">
              <div className="card-body justify-between">
                <h3 className="card-title items-start">
                  <LocationIcon className="size-6 shrink-0 inline-block align-middle" /> {city.nome}
                </h3>
                <p>
                  #{city.id}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/cidade/${city.id}`} className="btn btn-sm btn-outline btn-primary">
                    Detalhes
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
}
