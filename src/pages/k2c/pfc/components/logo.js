/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'pages/k2c/pfc/components/link';
import logo from 'assets/images/logo.svg';
import logoWhite from 'assets/images/logo-white.svg';
import logoAspn from 'assets/images/Aspenlogo.png';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/k2c/pfc" sx={styles.logo} {...props}>
      { isWhite? 
      <Image
        width="50"
        height="50"
        src= {logoAspn}
        alt="logo"
      />
      :
       <Image
        width="187"
        height="37"
        src={logo}
        alt="logo"
      />
      } 
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img: {
      maxWidth: [80, '100%'],
    },
  },
};
