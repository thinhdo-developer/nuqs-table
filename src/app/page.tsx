"use client"; // Only works in client components

import { useQueryState } from "nuqs";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

export default function Home() {
  const [name, setName] = useQueryState("name");

  const table = useReactTable({
    data: [],
    columns: [],
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table);

  return (
    <>
      <h1>Hello, {name || "anonymous visitor"}!</h1>
      <input value={name || ""} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
    </>
  );
}
