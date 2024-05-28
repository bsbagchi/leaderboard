'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import logo from './images/logo.png';
import bell from './images/bell.png';
import icon from './images/icon.jpeg';
import profile from './images/monkey.5456259d.jpg';
import { ThemeProvider, createTheme } from '@mui/material';
export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Primary color
      },
      secondary: {
        main: '#dc004e', // Secondary color
      },
      background: {
        default: '#f5f5f5', // Background color
      },
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff', // DataGrid background color
            '& .MuiDataGrid-cell': {
              color: '#000000', // Cell text color
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#e0e0e0', // Header background color
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: '#333333', // Header text color
              fontWeight: 'bold', // Make header text bold
              fontSize: '1rem', // Make header text larger
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#f5f5f5', // Hover background color
            },
            '& .MuiDataGrid-selectedRowCount': {
              color: '#1976d2', // Selected row count text color
            },
          },
        },
      },
    },
  });

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'Rank', headerName: 'Rank', type: 'number', width: 100 },
    {
      field: 'Name',
      headerName: 'Name',
      type: 'string',
      width: 180,
      editable: true,
    },
    {
      field: 'CalmarRatio',
      headerName: 'Calmar Ration',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'Overallprofit',
      headerName: 'Overall Profit',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'avgdailyprofit',
      headerName: 'Avg. Daily Profit',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'win',
      headerName: 'Win % (Day)',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price (Rs)',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      type: 'string',
      width: 110,
      editable: true,
      renderCell: (params) => (
        <a
          href={`#${params.value}`}
          style={{ color: '#1976d2', textDecoration: 'none' }}
        >
          {params.value}
        </a>
      ),
    },
  ];

  const rows = [
    {
      Rank: 1,
      Name: 'Selling with re entr',
      CalmarRatio: 3.96,
      Overallprofit: 381845,
      avgdailyprofit: 319.54,
      win: 0.65,
      price: '-',
      action: 'view',
    },
    {
      Rank: 2,
      Name: 'Strategy_name',
      CalmarRatio: 3.62,
      Overallprofit: 268872.5,
      avgdailyprofit: 216.31,
      win: 0.64,
      price: 500,
      action: 'Buy',
    },
    {
      Rank: 3,
      Name: 'Based on premium and',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 4,
      Name: 'Based on premium and',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 5,
      Name: 'Based on premium and',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 6,
      Name: 'Based on premium and',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 7,
      Name: 'Based on premium and',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 8,
      Name: 'Based on premium and',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 9,
      Name: 'Wait and trade_save',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 10,
      Name: 'iron condor',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 11,
      Name: 'iron condor',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
    {
      Rank: 12,
      Name: 'iron condor',
      CalmarRatio: 3.42,
      Overallprofit: 255425,
      avgdailyprofit: 208.54,
      win: 0.64,
      price: '-',
      action: 'view',
    },
  ];
  return (
    <>
      <header className=" flex justify-between md:px-20 px-10 pt-8 ">
        <div className="cursor-pointer">
          <Image width={150} alt="" src={logo}></Image>
        </div>
        <ul className="flex py-4 space-x-7">
          <li className="cursor-pointer">
            <Image width={30} alt="" src={bell}></Image>
          </li>
          <li className="cursor-pointer">
            <Image width={30} alt="" src={icon}></Image>
          </li>
          <li className="cursor-pointer ">
            <Image width={30} alt="" src={profile}></Image>
            <ul
              id="submenu"
              className="absolute z-[1] text-gray-500  right-10 bg-white"
            >
              <li className="hover:bg-gray-300 px-2 py-1 my-1">My Profile</li>
              <li className="hover:bg-gray-300 px-2 py-1 my-1">My Earnings</li>
              <li className="hover:bg-gray-300 px-2 py-1 my-1">Funds</li>
              <li className="hover:bg-gray-300 px-2 py-1 my-1">
                Change Password
              </li>
              <li className="hover:bg-gray-300 text-red-500 px-2 py-1 my-1">Log out</li>
            </ul>
          </li>
        </ul>
      </header>
      <hr />
      <nav className="max-lg:hidden md:px-20  py-3  flex justify-center">
        <ul className=" flex justify-items-center space-x-5 font-mono ">
          <li className="border-r-2 lg:pr-4 cursor-pointer hover:scale-105">
            LeaderBoard
          </li>
          <li className="border-r-2 lg:pr-4 cursor-pointer hover:scale-105">
            Historical TradingScanners
          </li>
          <li className="border-r-2 lg:pr-4 cursor-pointer hover:scale-105">
            Historical Chart
            
          </li>
          <li className="border-r-2 lg:pr-4 cursor-pointer hover:scale-105">
            Alerts
          </li>
          <li className="border-r-2 lg:pr-4 cursor-pointer hover:scale-105">
            Basic Backtest
          </li>
          <li className="border-r-2 lg:pr-4 cursor-pointer hover:scale-105">
            Advanced Backtest
          </li>
          <li className="border-r-2 lg:pr-4 cursor-pointer hover:scale-105">
            Pricing
          </li>
          <li className="cursor-pointer hover:scale-105">My Earnings</li>
        </ul>
      </nav>
      <main className="md:px-20 px-10 ">
        <h1 className="opacity-70  text-center text-5xl font-bold py-6">
          LeaderBoards
        </h1>
        <div>
          <h1 className="opacity-70 text-3xl font-bold py-4">Basic Backtest</h1>
        </div>
        <ThemeProvider theme={theme}>
          <div className="lg:w-fit shadow-inner rounded-lg shadow-slate-500 drop-shadow-2xl">
            <Box sx={{ height: '100%', width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.Rank}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[10]}
                // checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </ThemeProvider>
      </main>
    </>
  );
}
