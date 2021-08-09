import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { GridContainer, SliceTitle } from '../Shared';

const DataPrivacy = ({ title }) => {
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
          <Typography variant="h6">
            At semplates.io, accessible from https://semplates.io, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by semplates.io and how we use it.
          </Typography>
          <br />
          <Typography variant="h6">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us. Our Privacy
            Policy was generated with the help of{' '}
            <a href="https://www.gdprprivacynotice.com/">
              GDPR Privacy Policy Generator from GDPRPrivacyNotice.com
            </a>
          </Typography>
          <br />
          <Typography variant="h5">
            {' '}
            General Data Protection Regulation (GDPR)
          </Typography>
          <br />
          <Typography variant="h6">
            We are a Data Controller of your information.
          </Typography>
          <Typography variant="h6">
            Semplates legal basis for collecting and using the personal
            information described in this Privacy Policy depends on the Personal
            Information we collect and the specific context in which we collect
            the information:
          </Typography>
          <ul>
            <li>Semplates needs to perform a contract with you</li>
            <li>You have given Semplates permission to do so</li>
            <li>
              Processing your personal information is in Semplates legitimate
              interests
            </li>
            <li>Semplates needs to comply with the law</li>
          </ul>

          <Typography variant="h6">
            Semplates will retain your personal information only for as long as
            is necessary for the purposes set out in this Privacy Policy. We
            will retain and use your information to the extent necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            policies.
          </Typography>

          <Typography variant="h6">
            {' '}
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. If you wish to be informed what
            Personal Information we hold about you and if you want it to be
            removed from our systems, please contact us.
          </Typography>
          <Typography variant="h6">
            {' '}
            In certain circumstances, you have the following data protection
            rights:
          </Typography>
          <ul>
            <li>
              The right to access, update or to delete the information we have
              on you.
            </li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <br />
          <Typography variant="h5">Log Files</Typography>
          <br />
          <Typography variant="h6">
            {' '}
            semplates.io follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Typography>
          <br />
          <Typography variant="h5">Cookies and Web Beacons</Typography>
          <br />
          <Typography variant="h6">
            {' '}
            Like any other website, semplates.io uses 'cookies'. These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </Typography>

          <Typography variant="h6">
            {' '}
            For more general information on cookies, please read{' '}
            <a href="https://www.privacypolicyonline.com/what-are-cookies/">
              "What Are Cookies"
            </a>
            .
          </Typography>
          <br />
          <Typography variant="h5">Privacy Policies</Typography>
          <br />
          <Typography variant="h6">
            {' '}
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of semplates.io.
          </Typography>

          <br />
          <Typography variant="h6">
            {' '}
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on semplates.io,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </Typography>
          <br />
          <Typography variant="h6">
            {' '}
            Note that semplates.io has no access to or control over these
            cookies that are used by third-party advertisers.
          </Typography>

          <br />
          <Typography variant="h5"> Third Party Privacy Policies</Typography>
          <br />
          <Typography variant="h6">
            {' '}
            semplates.io's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{' '}
          </Typography>

          <Typography variant="h6">
            {' '}
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </Typography>

          <br />
          <Typography variant="h5"> Children's Information</Typography>
          <br />
          <Typography variant="h6">
            {' '}
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </Typography>

          <Typography variant="h6">
            {' '}
            semplates.io does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Typography>

          <br />
          <Typography variant="h5"> Online Privacy Policy Only</Typography>
          <br />
          <Typography variant="h6">
            {' '}
            Our Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in semplates.io. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Typography>

          <br />
          <Typography variant="h5"> Consent</Typography>
          <Typography variant="h6">
            {' '}
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Typography>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default DataPrivacy;
