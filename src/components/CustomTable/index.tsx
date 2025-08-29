import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

export type Column<T> = {
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
  return (
    <div className="bg-background overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            {columns.map((col, index) => {
              return (
                <TableHead
                  key={index}
                  className={`h-9 text-white py-2 ${col.className || ""}`}
                >
                  {col.header}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-64 text-center align-middle"
              >
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-40 h-40 mb-4">
                    <img
                      src="/assets/images/no-data.svg"
                      alt="No data"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm text-center">
                    No skills added yet. Use the form above to add skills.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIdx) => (
              <TableRow key={row.id ?? JSON.stringify(row)}>
                {columns.map((col, i) => (
                  <TableCell
                    key={rowIdx + "-" + i}
                    className={`py-2 ${col.className || ""}`}
                  >
                    {col.cell
                      ? col.cell(row, rowIdx)
                      : (row[col.accessor] as React.ReactNode)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
