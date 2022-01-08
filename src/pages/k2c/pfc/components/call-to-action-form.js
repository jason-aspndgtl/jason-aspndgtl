/** @jsx jsx */
import { jsx, Label, Flex, Input, Button } from 'theme-ui';

const CallToActionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Button>{buttonLabel ?? 'Let\'s Rate One'}</Button>
    </Flex>
  );
};

export default CallToActionForm;

const styles = {
  form: {
    alignItems: 'center',
      justifyContent: 'center',
    
    button: {
      ml: [3],
    },
  },
};
