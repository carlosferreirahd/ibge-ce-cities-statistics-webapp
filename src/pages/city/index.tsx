import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchError } from "@/components/fetch-error";
import { ChartsTabs } from "@/features/charts-tabs";
import { ArrowLeftIcon, InfoIcon } from "@/components/icons";
import { useCities } from "@/hooks/use-cities";
import { ICity } from "@/shared/types/services.interfaces";

export function City() {

  const { cityId } = useParams();

  const {
    data,
    isPending,
    isError,
    error
  } = useCities();

  const currentCity = useMemo<ICity | undefined>(
    () => data?.find(city => city.id == Number(cityId)),
    [cityId, data]
  );

  if (isPending) {
    return (
      <div className="flex gap-4">
        <div className="skeleton h-10 w-10" />
        <div className="flex flex-col gap-4">
          <div className="skeleton h-10 w-60" />
          <div className="skeleton h-10 w-40" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <FetchError
        title="Erro ao buscar cidades"
        message={error?.message}
      />
    );
  }

  if (!currentCity) {
    return (
      <div role="alert" className="alert alert-info shadow-lg max-w-lg mx-auto">
        <InfoIcon className="size-12 shrink-0" />
        <div>
          <h3 className="font-bold">
            Cidade não encontrada
          </h3>
          <div className="text-xs">
            Certifique-se de que o <i>ID</i> do município corresponde a um município cearense.
          </div>
        </div>
        <Link to="/cidades" className="btn btn-sm">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full h-full animate-fade animate-once">
      <div className="hero place-items-start">
        <div className="hero-content flex-row">
          <Link
            to="/cidades"
            className="btn btn-circle btn-ghost self-start -mt-1"
            aria-label="Link para a página de listagem de cidades"
          >
            <ArrowLeftIcon className="size-8" />
          </Link>
          <div className="max-w-2xl">
            <h2 className="text-base-content text-4xl font-bold">
              {currentCity.nome}
            </h2>
            <p className="py-3 text-base-content opacity-50 text-xl">
              #{currentCity.id}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 overflow-x-auto">
        <ChartsTabs cityId={currentCity.id} />
      </div>
    </section>
  );
}
