"use client";

export default function Product({ params }: { params: { product: string } }) {
  return <>Product: {params.product}</>;
}
