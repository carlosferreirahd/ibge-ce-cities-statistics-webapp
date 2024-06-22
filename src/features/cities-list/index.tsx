import { SearchForm } from "./components/search-form.tsx";
import { List } from "./components/list/index.tsx";
import { FetchError } from "@/components/fetch-error/index.tsx";
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

  if (isPending) {
    return (
      <div className="flex flex-col gap-4">
        <div className="skeleton h-8 w-1/3" />
        <div className="skeleton h-32" />
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

  return (
    <div className="flex flex-col gap-14">
      <div className="max-w-md">
        <SearchForm onInputChange={updateSearch} />
      </div>
      <List citiesList={searchResults} />
    </div >
  );
}
