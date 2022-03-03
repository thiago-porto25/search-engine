/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useMemo, useState } from 'react';
import { useTheme, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from 'context/themeContext';

import * as CONSTANTS from 'constants/index';
import { handleEnterSearch } from 'helpers/handleSearch';
import { Container, Frame, Icon } from './styles';

import Logo from '../Logo';
import Searchbar from '../Searchbar';
import Divider from '../Divider';

const Header: React.FC = () => {
  const location = useLocation();
  const theme: any = useTheme();
  const { toggleTheme, mode } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isResults: boolean = useMemo(
    () => location.pathname === `/${CONSTANTS.RESULTS}`,
    [location]
  );

  return (
    <Container>
      {location.pathname !== CONSTANTS.HOME ? (
        <Frame $isresults={isResults}>
          <Link to={CONSTANTS.HOME} title="Go to homepage">
            <Logo path={location.pathname} />
          </Link>
          {location.pathname === `/${CONSTANTS.RESULTS}` && (
            <>
              <Searchbar handleKeyUp={handleEnterSearch} />
              <Divider />
            </>
          )}
        </Frame>
      ) : (
        <div />
      )}
      <Icon
        $isresults={isResults}
        color={theme.palette.primary.main}
        hovercolor={theme.palette.primary.light}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            toggleTheme();
          }}
        >
          Set {mode === 'light' ? 'dark' : 'light'} mode
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
