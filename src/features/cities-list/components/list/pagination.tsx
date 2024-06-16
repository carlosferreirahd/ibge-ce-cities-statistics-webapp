import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  previous: () => void;
  next: () => void;
}

export function Pagination({
  currentPage,
  maxPage,
  previous,
  next,
}: PaginationProps) {

  return (
    <div className="join">
      <button
        className="join-item btn"
        aria-label="Ir para a página anterior"
        disabled={currentPage === 1}
        onClick={previous}
      >
        <ChevronLeftIcon
          className="size-4"
          strokeWidth={2}
        />
      </button>
      <div className="join-item btn">
        Página {currentPage}
      </div>
      <button
        className="join-item btn"
        aria-label="Ir para a próxima página"
        disabled={currentPage === maxPage}
        onClick={next}
      >
        <ChevronRightIcon
          className="size-4"
          strokeWidth={2}
        />
      </button>
    </div>
  );
}
