export async function POST(request: Request) {
  const { name, price, description, image } = await request.json();
  return new Response(JSON.stringify({ name, price, description, image }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
