export async function getAgeByName(inputName: string, signal: AbortSignal) {
  try {
    const response = await fetch(`https://api.agify.io?name=${inputName}`, {
      signal,
    });
    const data = await response.json();
    if (response.ok)
      return {
        name: data.name,
        age: data.age,
      };
    else {
      console.error(data.error);
      alert(`Ошибка получения данных, попробуйте позже, ${data.error}`);
    }
  } catch (error) {
    console.error(error);
  }
}
