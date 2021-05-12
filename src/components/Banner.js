import { useLocation } from "react-router-dom";
import Title from "./Title";

export default function Banner() {
  const location = useLocation();

  return (
    <div>
      <Title location={location.pathname} />
    </div>
  );
}
