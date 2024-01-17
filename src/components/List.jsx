import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import Pagination from '@mui/material/Pagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    padding: '12px', // Adjust padding as needed
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14, // Adjust font size as needed
    padding: '8px', // Adjust padding as needed
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const GET_COUNTRIES_QUERY = gql`
  query ExampleQuery {
    countries {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES_QUERY);

  useEffect(() => {
    if (data && data.countries) {
      setCountries(data.countries);
    }
  }, [data]);

  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 

  return (
    <div className="App" style={{ padding: '50px' }}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              
              <StyledTableCell align='left'>Name</StyledTableCell>
              <StyledTableCell align="right">Country Code</StyledTableCell>
              <StyledTableCell align="right">Flag</StyledTableCell>
              <StyledTableCell align="right">Continent</StyledTableCell>
            
            </TableRow>
           
          </TableHead>
          <TableBody>
            {(rowsPerPage > 1
              ? countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : countries
            ).map((country, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {country.name}
                </StyledTableCell>
                <StyledTableCell align="right">{country.code}</StyledTableCell>
                <StyledTableCell align="right">{country.emoji}</StyledTableCell>
                <StyledTableCell align="right">{country.continent.name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          style={{ color: 'black' }}
          backgroundColor='blue'
          rowsPerPageOptions={[10, 20,50,100]}
          component="div"
          count={countries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        
        />
        
      </TableContainer>
    </div>
  );
}

export default CountryList;
