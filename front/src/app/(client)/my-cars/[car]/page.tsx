"use client";

export default function Car({ params }: { params: { car: string } }) {
  return <>Car: {params.car}</>;
}
