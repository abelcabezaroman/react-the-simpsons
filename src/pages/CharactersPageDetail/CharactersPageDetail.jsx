import { useParams } from "react-router-dom";

export default function CharactersPageDetail() {
  const { id } = useParams();

  console.log(id);
  return <div>{"Soy un detalle, uno de los bonitos <3"}</div>;
}
