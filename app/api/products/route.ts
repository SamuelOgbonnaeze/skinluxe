import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = 'https://api.timbu.cloud/products?organization_id=da67eafe9e6b466fb622366ad926ac89&Appid=OLJ58E7P0QRNRC7&Apikey=ca23324861064f5a932524e109ac5a3520240712214354501758';

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse('Failed to fetch product data', { status: 500 })
  }
}