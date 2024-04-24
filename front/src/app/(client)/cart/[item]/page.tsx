"use client";

export default function Item({ params }: { params: { item: string } }) {
  return <>Item: {params.item}</>;
}
