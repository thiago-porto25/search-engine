import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, useTheme } from '@mui/material';

import { Result as ResultType, SearchContext } from 'context/searchContext';

import { Container, Image, Left, Right } from './styles';

const Result: React.FC<{ result: ResultType }> = ({ result }) => {
  const { setCurrentInfoPage }: any = useContext(SearchContext);
  const theme = useTheme();

  const handleClick = (): void => {
    setCurrentInfoPage(result);
  };

  return (
    <Container>
      <Left>
        <Link onClick={handleClick} to={`/page/${result.title}`}>
          <Image
            src={`/images/${result.photo}`}
            alt={result.shortDescription}
          />
        </Link>
      </Left>

      <Right
        hovercolor={theme.palette.primary.light}
        color={theme.palette.primary.main}
      >
        <Link onClick={handleClick} to={`/page/${result.title}`}>
          <Typography
            variant="button"
            fontWeight="bold"
            color="primary"
            component="h1"
            marginBottom="16px"
          >
            {result.title}
          </Typography>
        </Link>
        <Typography variant="text" component="p">
          {result.shortDescription}
        </Typography>
      </Right>
    </Container>
  );
};

export default Result;
