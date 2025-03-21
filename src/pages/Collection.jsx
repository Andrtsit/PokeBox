import { useQuery } from "@tanstack/react-query";
import { fetchCards } from "../helpers/FetchCards";
import Card from "../ui/Card";

function Collection() {
  const {
    isLoading,
    data: cards,
    error,
  } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });

  if (isLoading)
    return (
      <div className="flex  bg-gray-800 text-3xl  justify-center items-center font-semibold w-dvw text-white">
        Loading....
      </div>
    );
  console.log(error, cards.data);
  return (
    <div className="bg-gray-800 p-8 grid gap-10 grid-cols-6 font-display w-dvw overflow-auto">
      {cards.data.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Collection;
