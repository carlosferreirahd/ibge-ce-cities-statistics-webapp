import { useMemo, useState } from "react";
import Fuse, { IFuseOptions } from "fuse.js";
import debounce from "lodash.debounce";

export function useSearch<T>(
  originalData: Array<T>,
  fuseSearchOptions: IFuseOptions<T>,
  debounceTime: number = 300
) {
  const [searchText, setSearchText] = useState<string>("");

  const fuseSearcher = useMemo<Fuse<T>>(
    () => new Fuse(originalData, fuseSearchOptions),
    [fuseSearchOptions, originalData]
  );

  const updateSearch = useMemo(
    () =>
      debounce(
        (searchedText: string) => setSearchText(searchedText),
        debounceTime
      ),
    [debounceTime]
  );

  const searchResults = useMemo<Array<T>>(() => {
    if (!searchText) return originalData;
    return fuseSearcher.search(searchText).map((r) => r.item);
  }, [fuseSearcher, originalData, searchText]);

  return {
    searchResults,
    updateSearch,
  };
}
