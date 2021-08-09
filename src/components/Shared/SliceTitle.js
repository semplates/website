import React, { Fragment } from 'react';
import { styled, Typography } from '@material-ui/core';

const SlideTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0, 0, 0),
}));

const SlideSubTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2, 0),
}));

const SliceTitle = ({ subTitle, children, alignment }) => {
  const textAlignment = alignment === 'center' ? 'center' : 'start';

  return (
    <Fragment>
      <SlideTitle
        variant={'h3'}
        color={'secondary'}
        style={{ textAlign: textAlignment }}>
        {children}
      </SlideTitle>
      {subTitle && (
        <SlideSubTitle
          variant={'h4'}
          color={'secondary'}
          style={{ textAlign: textAlignment }}>
          {subTitle}
        </SlideSubTitle>
      )}
    </Fragment>
  );
};

export default SliceTitle;
