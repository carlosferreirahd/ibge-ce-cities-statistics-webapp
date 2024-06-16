import { LocationIcon, MagnifyIcon } from "@/components/icons";

interface SearchFormProps {
  onInputChange: (searchText: string) => void;
}

export function SearchForm({
  onInputChange
}: SearchFormProps) {

  return (
    <form
      className="form-control"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="input input-bordered flex items-center gap-2 focus-within:input-primary">
        <LocationIcon className="size-4" />
        <input
          className="grow"
          type="text"
          name="city-search"
          placeholder="Pesquise por municípios..."
          onChange={(e) => onInputChange(e.target.value)}
        />
        <MagnifyIcon className="size-4" strokeWidth={2} />
      </label>
    </form>
  );
}
