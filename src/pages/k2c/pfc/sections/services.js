/** @jsx jsx */
import { cloneElement, Fragment } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { jsx, Box, Container, Grid, Text } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import SectionHeading from 'pages/k2c/pfc/components/section-heading';
import Service from 'pages/k2c/pfc/components/cards/service';
import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';

const data = {
  services: [
    {
      id: 1,
      icon: icon4,
      title: 'Project Managers',
      desc: ``,
      link: '#',
    },
    {
      id: 2,
      icon: icon4,
      title: 'Construction Manager (Not-At-Risk)',
      desc: ``,
      link: '#',
    },
    {
      id: 3,
      icon: icon4,
      title: 'Estimators',
      desc: ``,
      link: '#',
    },
    {
      id: 4,
      icon: icon4,
      title: 'Architects',
      desc: ``,
      link: '#',
    },
    {
      id: 5,
      icon: icon4,
      title: 'Surveyors',
      desc: ``,
      link: '#',
    },
    {
      id: 6,
      icon: icon4,
      title: 'Permit Expeditors',
      desc: ``,
      link: '#',
    },
  ],
  
};

const list = [
  'No direct employees involved in construction work',
  'No hiring, supervising or contracting with subcontractors',
  'Provide consultation and/or advice',
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Coverage Overview"
          title="Professional Service Contractors"
        />
        <Box sx={styles.coverageOverview}>
          <Text sx={styles.coverageText} >This product offering is applicable to <br/> Professional Service Contractors  who do not have an active role in the construction or renovation.</Text>
          <Text sx={styles.coverageText} > The main focus is to provide advice, consultation, expediting, and similar support functions. </Text>
          <Text sx={styles.coverageText} >The main characteristics will be the following:</Text>
          <Text>
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
          </Text>
          <Text sx={styles.title}>Targeted Classes</Text>
        <Grid sx={styles.serviceGrid} >
          {data.services.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, 8, 10, null, 15],
    pb: [7, null, null, null, 10, null, 14],
  },
  coverageOverview:{
    backgroundColor: 'white',
    boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.04)',
    borderRadius: 10,
    justifyContent: 'center',
    padding: '20px',
    
  },
  title: {
    textAlign: 'center',
    color: 'primary',
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 2.5,
  },
  coverageText:{
    textAlign: 'center',
    justifyContent: 'center',
  },
  serviceGrid: {
    gap: [8, null, null, '60px 40px', '50px 30px', '60px 40px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 250px)',
      null,
      null,
      'repeat(2, 260px)',
      'repeat(3, 258px)',
      'repeat(3, 300px)',
    ],
    pt: [8, null, null, 16],
    pb: [8, null, null, 15],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['auto','auto','repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)'],
    listStyle: 'none',
    mt: [4, null, null, 5, 3, 5],
    pl: 50,
    pr: 50,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
  
};
