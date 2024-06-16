import { Empty } from "./empty";
import { CityCard } from "./city-card";
import { Pagination } from "./pagination";
import { usePagination } from "@/hooks/use-pagination";
import { ICity } from "@/shared/types/services.interfaces";

interface ListProps {
  citiesList: Array<ICity>;
}

export function List({
  citiesList
}: ListProps) {

  const {
    paginatedData,
    currentPage,
    maxPage,
    next,
    previous
  } = usePagination(citiesList);

  if (paginatedData?.length === 0) return <Empty message="Nenhum município encontrado" />

  return (
    <div className="flex flex-col gap-10">
      <ul className="min-w-0 flex flex-row flex-wrap justify-center gap-y-6 -mx-3">
        {paginatedData?.map((city) => (
          <li
            key={city.id}
            className="flex-grow-0 flex-shrink-0 px-3 basis-full max-w-full sm:basis-1/2 sm:max-w-[50%] lg:basis-1/3 lg:max-w-[33.333333%] xl:basis-1/4 xl:max-w-[25%] 2xl:basis-1/5 2xl:max-w-[20%]"
          >
            <CityCard city={city} />
          </li>
        ))}
      </ul>
      <div className="self-end shadow-lg">
        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          previous={previous}
          next={next}
        />
      </div>
    </div>
  );
}
