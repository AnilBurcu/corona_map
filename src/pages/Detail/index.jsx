import { useSearchParams } from "react-router-dom";

const Detail = () => {
  const [params] = useSearchParams();
  const countryCode = params.get("code");

  return <div>{countryCode}</div>;
};

export default Detail;
