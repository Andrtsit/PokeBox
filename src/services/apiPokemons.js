import supabase from "./supabase";

export async function getPokemons() {
  const { data, error } = await supabase.from("pokemons").select("*");
  if (error) {
    console.error(error);
    throw new Error("Pokemons couldnt be loaded");
  }
  return data;
}
