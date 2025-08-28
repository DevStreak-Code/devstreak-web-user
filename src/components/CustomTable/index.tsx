import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

type Column<T> = {
  header: string;
  accessor: keyof T;
  cell?: (row: T, index: number) => React.ReactNode; // explicitly allows JSX
  className?: string;
};

type DataTableProps<T extends { id?: string | number }> = {
  columns: Column<T>[];
  data: T[];
};

export default function CustomTable<T extends { id?: string | number }>({
  columns,
  data,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="w-full border rounded-md p-4 flex justify-center items-center flex-col">
        <div className="w-full h-[300px] ">
          <img src="/assets/images/no-data.svg" className="w-full h-full" />
        </div>
        <p className="text-gray-600 text-sm">No skills added yet. Use the form above to add skills.</p>
      </div>
    );
  }
  return (
    <div className="bg-background overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            {columns.map((col) => (
              <TableHead
                key={String(col.accessor)}
                className={`h-9 text-white py-2 ${col.className || ""}`}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id ?? JSON.stringify(row)}>
              {columns.map((col, i) => (
                <TableCell
                  key={String(col.accessor)}
                  className={`py-2 ${col.className || ""}`}
                >
                  {col.cell
                    ? col.cell(row, i)
                    : (row[col.accessor] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
