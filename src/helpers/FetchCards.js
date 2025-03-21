export const fetchCards = async () => {
  try {
    const response = await fetch(
      "https://api.pokemontcg.io/v2/cards?q=(set.id:base1 OR set.id:base2 OR set.id:base3) AND supertype:pokemon"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return null;
  }
};
