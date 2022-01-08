/** @jsx jsx */
import { useState } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { jsx, Box, Container, Grid, Button, Heading, Text } from 'theme-ui';
import ResponsiveIframe from 'pages/k2c/pfc/components/responsive-iframe';
import Image from 'pages/k2c/pfc/components/image';
import videoBanner from 'assets/images/about-us-banner.png';
import play from 'assets/images/icons/play.png';
import paint1 from 'assets/images/paint1.svg';
import paint2 from 'assets/images/paint2.svg';

const list = [
  'New York Construction',
  'K2 Advantage',
  'Owners Interest',
  'Small Business Contractors Countrywide',
];

const VideoIntro = () => {
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.videoWrapper}>
          

            <Image
              src={videoBanner}
              width="695"
              className="video-banner"
              alt="video banner"
            />

          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              About Us
            </Heading>
            <Text as="p" sx={styles.summary}>
            We are Insurance Experts consisting of experienced underwriters specializing in New York Construction, Owners Interest, Professional Services Contractors, and Small Contractors Countrywide.  This team concentrates on general liability coverage solutions for contractors offering various coverage and price options to meet insured’s needs.  K2 Construction maintains a commitment to service and honesty which is a cornerstone of our reputation as a trusted partner. 
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoIntro;

const styles = {
  section: {
    pt: [7, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gap: '0 30px',
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr',
      '1fr 1fr',
      '600px 1fr',
      '760px 1fr',
    ],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBottom:'15px',
    mt: [2, null, null, 0, 4, 0],
    '.video-banner': {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    px: [null, null, null, 8, 0],
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, null, null, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: [1, null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    mt: [4, null, null, 5, 3, 5],
    maxWidth: 470,
    textAlign: ['center', null, null, 'left'],
  },
  list: {
    gap: '0 18px',
    //gridTemplateColumns: ['repeat(2, 152px)', null, null, 'repeat(2, 180px)'],
    listStyle: 'none',
    mt: [4, null, null, 5, 3, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
