import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Bir şeyler ters gitti 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to={-1}>&larr; Menüye dön</LinkButton>
    </div>
  );
}

export default Error;
