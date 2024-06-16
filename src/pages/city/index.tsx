import { useParams } from "react-router-dom";

export function City() {

  const { cityId } = useParams();

  return (
    <div>
      cidade {cityId}
    </div>
  );
}
