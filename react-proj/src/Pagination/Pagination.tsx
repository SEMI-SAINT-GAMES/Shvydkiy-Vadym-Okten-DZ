import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSearchParams } from "react-router-dom"
import { useAppSelector } from "../Hooks/reduxHooks"

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});


export const MoviesPages = () => {
  const {total_results, total_pages} = useAppSelector(state => state.movies)
 const[querry, setQuerry] = useSearchParams({page: '1', pageCount: `10`})
  const { items } = usePagination({
    count: 10,
  });
  let curPage = querry.get(`page`)
  
  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
     setQuerry(prev => {
      prev.set(`page`, (page).toString())
      console.log(page)
      
      return prev
     })
  }
  

  return (
    <div className='pages'>
    <Pagination 
      count={500}
      color="primary"
      onChange={handleChangePage}
    ></Pagination>
    </div>
  );
}
