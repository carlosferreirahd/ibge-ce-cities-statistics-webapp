import { EmptyIcon } from "@/components/icons";

interface EmptyProps {
  message: string;
}

export function Empty({
  message
}: EmptyProps) {

  return (
    <div className="flex flex-col gap-4 items-center justify-center border-t pt-8">
      <EmptyIcon className="size-16" strokeWidth={2} />
      <h3 className="text-xl font-semibold">
        {message}
      </h3>
    </div>
  );
}
