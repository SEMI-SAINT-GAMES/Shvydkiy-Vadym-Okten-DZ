
import { Search } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switcher } from './Switcher/Swithecr';
const Header = () => {
    type SwitcherProps = {
        setIsDark: (isDark: boolean) => void;
        isDark: boolean
      };
    const [isDark, setIsDark] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const theme = createTheme({
        palette:{
            mode: isDark ? `dark` : `light`},
      })
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };
    return (
        <ThemeProvider theme={theme}>
      <CssBaseline/>
        <div className="Header">
           
            <div className='avatar'>
            <Avatar sx={{ bgcolor: `#897654` }}>N</Avatar>
            </div>
            <Switcher setIsDark = {setIsDark} isDark = {isDark}/>
            <div className='searchDiv'>
                <Link to = {`search/:${inputValue}`} className="links">
            <Search/>
            </Link>
            <TextField
          label="Search"
          variant="outlined"
          size='small'
          value={inputValue}
          onChange={handleInputChange}
             />
           </div>
           <div className='linksDiv'>
           <Link to = "popular" className="links">Popular</Link>
           <Link to = "popular" className="links">Trending</Link>
           <Link to = "popular" className="links">Top Rated</Link>
           <Link to = "popular" className="links">Upcoming</Link>
           <Link to = "genres" className="links">Genres</Link>
           </div>
        </div>
        </ThemeProvider>
    )
}
export {Header}