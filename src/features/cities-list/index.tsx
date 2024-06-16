import { Skeleton } from "./components/skeleton";
import { Error } from "./components/error";
import { SearchForm } from "./components/search-form.tsx";
import { List } from "./components/list/index.tsx";
import { useCities } from "@/hooks/use-cities";
import { useSearch } from "@/hooks/use-search";
import { ICity } from "@/shared/types/services.interfaces";

export function CitiesList() {

  const {
    data,
    isPending,
    isError,
    error
  } = useCities();

  const { searchResults, updateSearch } = useSearch<ICity>(
    data ?? [],
    {
      keys: ["id", "nome"],
      threshold: 0.3
    }
  );

  if (isPending) return <Skeleton />;

  if (isError) return <Error title="Erro ao buscar cidades" message={error?.message} />;

  return (
    <div className="flex flex-col gap-14">
      <div className="max-w-md">
        <SearchForm onInputChange={updateSearch} />
      </div>
      <List citiesList={searchResults} />
    </div >
  );
}
