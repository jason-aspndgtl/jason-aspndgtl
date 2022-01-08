
import {
    jsx,
    Box,
    Text,
    Radio,
    Image,
    Label,
    Input,
    Button,
    Heading,
    Checkbox,
    Select,
    Grid,
  } from 'theme-ui';
  import SectionHeading from 'pages/k2c/pfc/components/section-heading';
  import dotPattern from 'assets/images/dot-pattern.png';
  import { rgba } from 'polished';

const MoreInfoForm = () => {

    return (
    
        <Box sx={styles.formWrapper}>
            <SectionHeading
                slogan="Now that the pricing is out of the way, please give us a little more info to prepare a Quote"
                title="Insured Information"
                />

            <Box as="form" sx={styles.form} >
            <Box sx={styles.otherAmount}>
                        <Label htmlFor="other-amount" variant="styles.srOnly">
                            Expected Annual Sales
                        </Label>
                        <Input
                            id="expected-annual-sales"
                            value = {''} 
                            placeholder="Business Name"
                            onChange={''}
                            
                        />
                    </Box>
                    <Box sx={styles.otherAmount}>
                        <Label htmlFor="other-amount" variant="styles.srOnly">
                            Expected Annual Sales
                        </Label>
                        <Input
                            id="expected-annual-sales"
                            value = {''} 
                            placeholder="Business Address"
                            onChange={''}
                            
                        />
                    </Box>
                <Grid sx={styles.list}>
                  
                    <Box sx={styles.otherAmount}>
                        <Label htmlFor="other-amount" variant="styles.srOnly">
                            Expected Annual Sales
                        </Label>
                        <Input
                            id="expected-annual-sales"
                            value = {''} 
                            placeholder="Business Email"
                            onChange={''}
                            
                        />
                    </Box> <Box sx={styles.otherAmount}>
                        <Label htmlFor="other-amount" variant="styles.srOnly">
                            Expected Annual Sales
                        </Label>
                        <Input
                            id="expected-annual-sales"
                            value = {''} 
                            placeholder="Business Phone"
                            onChange={''}
                            
                        />
                    </Box>
                </Grid>

                <Box sx={styles.radioGroup}>
                <Label>
                    Do the Insured or any of insured's employees perform actual construction or renovation activities?&nbsp;
                    <Radio
                    value="onetime"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    Yes
                </Label>
                <Label>
                    <Radio
                    value="monthly"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    No
                </Label>
                </Box> 

                <Box sx={styles.radioGroup}>
                <Label>
                    Does the insured contract or hire or pay subcontractors to perform work on your behalf and who will perform construction or renovation work?&nbsp;
                    <Radio
                    value="onetime"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    Yes
                </Label>
                <Label>
                    <Radio
                    value="monthly"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    No
                </Label>
                </Box> 

                <Box sx={styles.radioGroup}>
                <Label>
                    Does the insured have or will purchase Professional Liability Coverage?&nbsp;
                    <Radio
                    value="onetime"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    Yes
                </Label>
                <Label>
                    <Radio
                    value="monthly"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    No
                </Label>
                </Box> 

                <Box sx={styles.radioGroup}>
                <Label>
                    On average, how many clients vists take place weekly at the Insured's office space (could include repeat clients)&nbsp;
                    <Input
                            id="expected-annual-sales"
                            value = {''} 
                            placeholder="Business Name"
                            onChange={''}
                            
                        />
                </Label>
                </Box> 

                <Box sx={styles.radioGroup}>
                <Label>
                    Does the insured currenly have General Liability insurace in place?&nbsp;
                    <Radio
                    value="onetime"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    Yes
                </Label>
                <Label>
                    <Radio
                    value="monthly"
                    name="donation-type"
                    defaultChecked={''}
                    onChange={''}
                    />
                    No
                </Label>
                </Box> 
                
                <Box sx={styles.radioGroup}>
                <Label>
                    Current Carrier&nbsp;
                    <Input
                            id="expected-annual-sales"
                            value = {''} 
                            placeholder="Business Name"
                            onChange={''}
                            
                        />
                </Label>
                </Box> 

                <Box sx={styles.radioGroup}>
                <Label>
                    Current Premium&nbsp;
                    <Input
                            id="expected-annual-sales"
                            value = {''} 
                            placeholder="Business Name"
                            onChange={''}
                            
                        />
                </Label>
                </Box> 

            </Box>

            <SectionHeading
                slogan="Please provide us with the best information to contact you"
                title="Your Information"
                />

      </Box>
     
    );
}

export default MoreInfoForm;


const styles = {
    formWrapper: {
      'max-width': 'calc(100vw - 2rem)',
      'max-height': 'calc(100vh - 2rem)',
      'overflow-y': 'auto',
      borderRadius: 10,
      backgroundColor: 'white',
      boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
      p: ['26px', null, null, '35px 40px 50px'],
      position: 'relative',
      '::before, ::after': {
        background: `url(${dotPattern}) no-repeat right top`,
        content: [null, null, null, null, null, `''`],
        position: 'absolute',
        width: 302,
        height: 347,
        zIndex: -1,
      },
      '::before': {
        left: '-60px',
        bottom: 15,
      },
      '::after': {
        right: '-41px',
        top: '-30px',
      },
    },
    title: {
      color: 'textSecondary',
      fontWeight: 'bold',
      fontSize: [6, null, null, 12, 8, 11],
      lineHeight: 1.4,
      letterSpacing: 'heading',
      mb: [4, null, null, 5],
      textAlign: ['center', null, null, null, 'left'],
    },
    price: {
      color: 'textSecondary',
      fontWeight: 'bold',
      fontSize: [6, null, null, 12, 8, 11],
      // lineHeight: 1.4,
      // letterSpacing: 'heading',
      // mb: [4, null, null, 5],
      textAlign: ['center', null, null, null, 'left'],
    },
    form: {
      label: {
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 400,
      },
    },
    radioGroup: {
      display: 'flex',
      alignItems: ['flex-start', null, null, 'center'],
      flexDirection: ['column', null, null, 'row'],
      mb: [5, null, null, 5],
      '> label': {
        alignItems: 'center',
        fontSize: [1, null, null, '15px'],
        width: 'auto',
        '+ label': {
          ml: [null, null, null, 4],
          mt: [2, null, null, 0],
        },
      },
    },
    presetAmounts: {
      display: 'grid',
      alignItems: 'center',
      marginBottom: 15,
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: ['7px', null, null, 2],
      mb: [3],
      label: {
        color: 'textSecondary',
        border: (t) => `1px solid ${t.colors.borderColor}`,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: [1, 2, null, 3],
        lineHeight: 1.11,
        minHeight: [40, null, null, null, 50, 60],
        padding: 0,
        textAlign: 'center',
        transition: '0.3s ease-in-out 0s',
        '> div': {
          position: 'absolute',
          height: 0,
          opacity: 0,
          visibility: 'hidden',
          width: 0,
        },
        '&.active': {
          backgroundColor: '#F5F4FF',
          borderColor: 'primary',
          color: '#7B72F0',
        },
      },
    },
    selectInput: {
      mb: [3, null, null, 4],
      select: {
        color: rgba('#02073E', 0.35),
        minHeight: [45, null, null, 60, 50, 60],
        '::placeholder': {
          color: rgba('#02073E', 0.35),
        },
      },
    },
    otherAmount: {
      mb: [3, null, null, 4],
      input: {
        minHeight: [45, null, null, 60, 50, 60],
        width: '100%',
        '::placeholder': {
          color: rgba('#02073E', 0.35),
        },
      },
    },
    email: {
      mt: [3, null, null, 4],
      mb: [1, null, null, 2],
      input: {
        minHeight: [45, null, null, 60, 50, 60],
        '::placeholder': {
          color: rgba('#02073E', 0.35),
        },
      },
    },
    centeredText: {
      display: 'flex',
      justifyContent: 'center',
      label: {
        span: {
          fontSize: [0, 1],
        },
      },
    },
    checkbox: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom:'15px',
      label: {
        span: {
          fontSize: [0, 1],
        },
      },
    },
    buttonGroup: {
      mt: [5, null, null, 8],
      span: {
        display: 'flex',
        justifyContent: 'center',
        color: rgba('#000', 0.4),
        fontWeight: 'bold',
        fontSize: 1,
        lineHeight: 2.87,
      },
      button: {
        minHeight: [45, null, null, 60, 50, 60],
        width: '100%',
      },
    },
    list: {
        gap: '0 18px',
        gridTemplateColumns: ['auto','auto','repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)'],
        listStyle: 'none',
        mt: [4, null, null, 5, 3, 5],
       
        li: {
          fontSize: [0, 1, null, 2, '15px', 2],
          alignItems: 'center',
          color: 'textSecondary',
          display: 'flex',
          lineHeight: [2.81, null, null, null, 2.2, 2.81],
        },
      },
}