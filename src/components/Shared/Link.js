import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef(function Link(props, ref) {
  if (props.linkType === 'outLink') {
    return <MuiLink underline="none" href={props.to} ref={ref} {...props} />;
  }
  return (
    <MuiLink underline="none" component={GatsbyLink} ref={ref} {...props} />
  );
});

export default Link;
