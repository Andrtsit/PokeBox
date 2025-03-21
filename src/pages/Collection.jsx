import { useQuery } from "@tanstack/react-query";
import Card from "../ui/Card";
import { getPokemons } from "../services/apiPokemons";

function Collection() {
  const {
    isFetching,
    data: cards,
    error,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  if (isFetching)
    return (
      <div className="flex  bg-gray-800 text-3xl  justify-center items-center font-semibold w-dvw text-white">
        Loading....
      </div>
    );
  if (error)
    return (
      <div className="flex  bg-gray-800 text-3xl  justify-center items-center font-semibold w-dvw text-white">
        Failed to Load
      </div>
    );

  return (
    <div className="bg-gray-800 p-8 grid gap-10 grid-cols-6 font-display w-dvw overflow-auto">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Collection;
