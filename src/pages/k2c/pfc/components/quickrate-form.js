/** @jsx jsx */
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
} from 'theme-ui';
import { rgba } from 'polished';
import { useState } from 'react';
import Modal, { CloseButton } from 'pages/k2c/pfc/components/modal/modal';
import SectionHeading from 'pages/k2c/pfc/components/section-heading';
import numeral from 'numeral';
import dotPattern from 'assets/images/dot-pattern.png';
import MoreInfoForm from './more-info-form'

const presetAmounts = [5, 20, 50, 100];

const QuickRateForm = () => {
  const [state, setState] = useState({
    typeOfProfession: '',
    expectedAnnualSales: '',
    officeSquareFootage: '',
    hasOffice: true,
    userEmailAddress:'',
    annualPremium: 0,
    deductible: 0,
    rate:0,
    referral:false,
  });

  const [isOpen, setIsOpen] = useState(false);


  const handleTypeOfProfession = (e) => {
    setState({
      ...state,
      typeOfProfession: e.target.value,
    });
  };

  const handleUserEmailAddress = (e) => {
    setState({
      ...state,
      userEmailAddress: e.target.value,
    });
  };

  const handleOfficeSquareFootage = (e) => {
    let val = e.target.value;
    let squarefootage =   numeral(val).value(); //Number(e.target.value);
    let res = calculatePremium(state.expectedAnnualSales, squarefootage, state.hasOffice)
    setState({
      ...state,
      officeSquareFootage: squarefootage,
      ...res,
    });
  };

  const  handleAnnualSales = async (e) => {
    let val = e.target.value;
    let sales =   numeral(val).value(); //Number(e.target.value);
    let res = calculatePremium(sales, state.officeSquareFootage, state.hasOffice)
    setState({
      ...state,
      expectedAnnualSales: sales,
      ...res
    });
    console.log('sales updated', state);
   
  };

  const handleHasOfice = (e) => {
    let res = calculatePremium(state.expectedAnnualSales, state.officeSquareFootage, e.target.checked)
    setState({
      ...state,
      hasOffice: e.target.checked,
      ...res,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setIsOpen(true);
  };

  const calculatePremium = (sales,squarefootage,hasoffice) => {
    console.log('updating premium ', sales,squarefootage,hasoffice);

    // validate inputs
    let referral = (sales > 7500000 );

    if(referral || sales <=0 ){
      return {
        annualPremium: 0,
        deductible: 1500,
        rate:0,
        referral
      }
    }

    let officeP = hasoffice ? squarefootage * 5 : 0;
    let ap = getPremiumForSales(sales);
    
    return {
      annualPremium: ap + officeP,
      deductible: (sales>500000 || hasoffice ) ? 2500 : 1500,
      rate:ap/sales,
      referral
    }
  }

  const getPremiumForSales = (sales) => {
      switch (true){
        case (sales <= 500000):
          return 750;
        case (sales <= 1000000):
          return 1000;
        case (sales <= 1250000):
          return 2000;
        case (sales <= 2000000):
          return 2500;
        case (sales <= 2500000):
            return 3000;
        case (sales <= 3000000):
          return 3250;
        case (sales <= 3500000):
          return 3500;
        case (sales <= 4000000):
            return 3750;
        case (sales <= 4500000):
          return 4000;
        case (sales <= 5000000):
          return 4500;
        case (sales <= 7500000):
          return 5000;
        default:
          return -1;
                
      }
  }

  return (
    <Box sx={styles.formWrapper}>
       <SectionHeading
          slogan="General Liability for"
          title="Professional Service Contractors"
        />
      <Modal isOpen={isOpen}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="24px"
                color="#fff"
              />
             <MoreInfoForm />
      </Modal>

      <Box as="form" sx={styles.form} onSubmit={handleSubmit}>
        {/* <Box sx={styles.radioGroup}>
          <Label>
            <Radio
              value="onetime"
              name="donation-type"
              defaultChecked={state.donationType === 'onetime'}
              onChange={handleDonationType}
            />
            Donate onetime
          </Label>
          <Label>
            <Radio
              value="monthly"
              name="donation-type"
              defaultChecked={state.donationType === 'monthly'}
              onChange={handleDonationType}
            />
            Every Month
          </Label>
        </Box> */}
        <Box sx={styles.selectInput}>
          <Label htmlFor="type-of-profession" variant="styles.srOnly">
            Type of Profession
          </Label>
          <Select id="type-of-profession"
            placeholder="Type of Profession"
            onChange={handleTypeOfProfession} >
            <option>Select the Profession</option>
            <option>Project Manager</option>
            <option>Construction Manager (Not-At-Risk)</option>
            <option>Estimator</option>
            <option>Architect</option>
            <option>Surveyor</option>
            <option>Permit Expeditor</option>
          </Select>
        </Box>
        <Box sx={styles.otherAmount}>
          <Label htmlFor="other-amount" variant="styles.srOnly">
            Expected Annual Sales
          </Label>
          <Input
            id="expected-annual-sales"
            value = {state.expectedAnnualSales} 
            placeholder="Expected Annual Sales"
            onChange={handleAnnualSales}
            
          />
        </Box>
        <Box sx={styles.checkbox}>
          <Label>
            <Checkbox
              onChange={handleHasOfice}
              defaultChecked={state.hasOffice}
            />            
            <Text as="span">Owns, rents or leases office where clients may visit</Text>            
          </Label>
        </Box>
        { (state.hasOffice) ? 
        <Box sx={styles.otherAmount}>
          <Label htmlFor="other-amount" variant="styles.srOnly">
            Office square footage
          </Label>
          <Input
            id="office-squarefootage"
            value = {state.officeSquareFootage} 
            placeholder="Office square footage"
            onChange={handleOfficeSquareFootage}
          />
        </Box>
        :
        ""
        }
        {
          (!state.referral)?
          <Box>
          <Box sx={styles.centeredText}>
             <Text as="span">Annual Premium</Text>
          </Box>
          <Box sx={styles.centeredText}>
            <Text as="span" sx={styles.price}>{numeral(state.annualPremium).format('$0,0')}</Text>
          </Box>
          <Box sx={styles.centeredText}>
             <Text as="span">Deductible {numeral(state.deductible).format('$0,0')}. Rate {numeral(state.rate).format('0.000')}</Text>
          </Box>
          </Box>
          :
          <Box sx={styles.centeredText}>
             <Text as="span">For sales over 7.5M, the premium will be provided by one of our Underwriters</Text>
          </Box>
        }
       
        <Box sx={styles.email}>
          <Label htmlFor="other-amount" variant="styles.srOnly">
            Your email address
          </Label>
          <Input
            id="user-email"
            placeholder="Your email address"
            onChange={handleUserEmailAddress}
          />
        </Box>
        <Box sx={styles.buttonGroup}>
          <Button variant="primary" sx={styles.submit} onClick={handleSubmit}>
            Next
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

export default QuickRateForm;

const styles = {
  formWrapper: {
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
  
};
