"use client";

export default function Request({ params }: { params: { request: string } }) {
  return <>Request: {params.request}</>;
}
