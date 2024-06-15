import { useCallback, useEffect, useMemo, useState } from "react";

export function usePagination<T>(originalData: Array<T>, page: number = 8) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const maxPage = useMemo(
    () => Math.ceil(originalData.length / page),
    [originalData.length, page]
  );

  const paginatedData = useMemo(() => {
    const begin = (currentPage - 1) * page;
    const end = begin + page;
    return originalData.slice(begin, end);
  }, [currentPage, originalData, page]);

  const next = useCallback(() => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }, [maxPage]);

  const previous = useCallback(() => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }, []);

  // restart page on original data change
  useEffect(() => {
    setCurrentPage(1);
  }, [originalData]);

  return {
    paginatedData,
    currentPage,
    maxPage,
    next,
    previous,
  };
}
