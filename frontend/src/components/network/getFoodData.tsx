export async function getFoodData() {
  const response = await fetch("/api/getFoodData");
  const data = await response.json();
  return data;
}
