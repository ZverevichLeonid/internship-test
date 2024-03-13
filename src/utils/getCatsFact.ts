export async function getCatsFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data.fact;
  } catch (error) {
    console.error(error);
  }
}
