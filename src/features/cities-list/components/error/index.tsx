import { XCircleIcon } from "@/components/icons";

interface ErrorProps {
  title: string;
  message: string;
}

export function Error({
  title,
  message,
}: ErrorProps) {

  return (
    <div role="alert" className="alert alert-error shadow-lg max-w-lg mx-auto">
      <XCircleIcon className="size-12 shrink-0" />
      <div>
        <h3 className="font-bold text-lg">
          {title}
        </h3>
        <div className="text-base">
          {message}
        </div>
      </div>
    </div>
  );
}
