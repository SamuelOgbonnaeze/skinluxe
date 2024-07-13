import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  console.log(`Fetching product with ID: ${id}`);

  try {
    const url = `https://api.timbu.cloud/products/${id}?organization_id=da67eafe9e6b466fb622366ad926ac89&Appid=OLJ58E7P0QRNRC7&Apikey=ca23324861064f5a932524e109ac5a3520240712214354501758`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Product data: ${JSON.stringify(data)}`);

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Error: Failed to fetch product data", { status: 500 });
  }
}
