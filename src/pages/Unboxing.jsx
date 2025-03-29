import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/apiPokemons";
import Loader from "../ui/Loader";
import Card from "../ui/Card";

function Unboxing() {
  const {
    isFetching,
    data: cards,
    error,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  function generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 12) {
      const randomNumber = Math.floor(Math.random() * 189) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  }

  console.log(generateRandomNumbers());

  const cardsToUnbox = generateRandomNumbers();

  if (isFetching) return <Loader />;
  if (error) return <div>Error {error}</div>;
  return (
    <div className="bg-gray-800 p-8 grid gap-10 grid-cols-6 font-display w-dvw overflow-auto">
      {cardsToUnbox.map((num) => (
        <Card card={cards[num]} key={cards[num].id} />
      ))}
    </div>
  );
}

export default Unboxing;
