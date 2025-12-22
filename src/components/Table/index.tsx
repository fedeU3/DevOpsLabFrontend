import {
  Paper,
  Skeleton,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

interface TableProps {
  headers?: { value: string; label: string }[];
  rows: { [key: string]: any }[];
  loading?: boolean;
  show?: string[];
}

interface TableHeadProps {
  headers: { value: string; label: string }[];
}

interface TableRowProps {
  row: { [key: string]: any };
  headers: { value: string; label: string }[];
}

const TableHeader: React.FC<TableHeadProps> = ({ headers }) => (
  <TableHead>
    <TableRow>
      {headers.map((header, index) => (
        <TableCell key={`header-${index}`}>{header.label}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const TableRowComponent: React.FC<TableRowProps> = ({ row, headers }) => (
  <TableRow>
    {headers.map((header, index) => (
      <TableCell key={`cell-${index}`}>{row[header.value]}</TableCell>
    ))}
  </TableRow>
);

export default function Table({ headers, rows, loading, show }: TableProps) {
  const detectedHeaders = headers || Object.keys(rows[0] || {}).map((key) => ({
    value: key,
    label: key,
  }));
  const displayHeaders = show ? detectedHeaders.filter((header) => show.includes(header.value)) : detectedHeaders;

  const renderSkeletonRow = (rowIndex: number) => (
    <TableRow key={`skeleton-${rowIndex}`}>
      {displayHeaders.map((_, index) => (
        <TableCell key={`skeleton-cell-${rowIndex}-${index}`}>
          <Skeleton variant="text" width={100} />
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader headers={displayHeaders} />
        <TableBody>
          {loading
            ? Array(10)
                .fill(null)
                .map((_, index) => renderSkeletonRow(index))
            : rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={displayHeaders.length} align="center">
                    <Typography variant="body2" color="textSecondary">
                      No data
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row, index) => (
                  <TableRowComponent key={`row-${index}`} row={row} headers={displayHeaders} />
                ))
              )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
