import { Link } from "react-router-dom";
import { LocationIcon } from "@/components/icons";
import { ICity } from "@/shared/types/services.interfaces";

interface CityCardProps {
  city: ICity;
}

export function CityCard({
  city
}: CityCardProps) {

  return (
    <div className="card card-compact bg-base-200 shadow-lg h-full">
      <div className="card-body justify-between">
        <h3 className="card-title items-start">
          <LocationIcon className="size-6 shrink-0 inline-block align-middle" /> {city.nome}
        </h3>
        <p>
          #{city.id}
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/cidade/${city.id}`}
            className="btn btn-sm btn-outline btn-primary"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
