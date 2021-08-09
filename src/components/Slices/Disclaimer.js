import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { GridContainer, SliceTitle } from '../Shared';

const Disclaimer = ({ title }) => {
  return (
    <GridContainer>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}>
        <Grid item sm={12}>
          <SliceTitle>{title}</SliceTitle>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h5'}>
            Information in accordance with Section 5 TMG
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h6'}>
            Clemens Dieffendahl <br />
            Danziger Str. 22 <br />
            10435 Berlin <br />
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h5'}>Contact Information</Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h6'}>
            Telephone: 0160 6347856 <br />
            E-Mail: clemens@semplates.io
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h5'}>Disclaimer</Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h4'}>Accountability for content</Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h6'}>
            The contents of our pages have been created with the utmost care.
            However, we cannot guarantee the contents' accuracy, completeness or
            topicality. According to statutory provisions, we are furthermore
            responsible for our own content on these web pages. In this matter,
            please note that we are not obliged to monitor the transmitted or
            saved information of third parties, or investigate circumstances
            pointing to illegal activity. Our obligations to remove or block the
            use of information under generally applicable laws remain unaffected
            this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h4'}>Accountability for Links</Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h6'}>
            Responsibility for the content of external links (to web pages of
            third parties) lies solely with the operators of the linked pages.
            No violations were evident to us at the time of linking. Should any
            legal infringement become known to us, we will remove the respective
            link immediately.
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h4'}>Copyright</Typography>
        </Grid>

        <Grid item sm={12}>
          <Typography variant={'h6'}>
            Our web pages and their contents are subject to German copyright
            law. Unless expressly permitted by law, every form of utilizing,
            reproducing or processing works subject to copyright protection on
            our web pages requires the prior consent of the respective owner of
            the rights. Individual reproductions of a work are only allowed for
            private use. The materials from these pages are copyrighted and any
            unauthorized use may violate copyright laws.
          </Typography>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default Disclaimer;
