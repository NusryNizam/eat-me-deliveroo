import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.css'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="footer-card-container">
                <div className='footer-card'>
                    <h3>Discover Deliveroo</h3>
                    <div className="links">
                        <Link to='/'>Investors</Link>
                        <Link to='/'>About us</Link>
                        <Link to='/'>Takeaway</Link>
                        <Link to='/'>More</Link>
                        <Link to='/'>Newsroom</Link>
                        <Link to='/'>Engineering Blog</Link>
                        <Link to='/'>Design Blog</Link>
                        <Link to='/'>Gift Cards</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Restaurant Signup</Link>
                        <Link to='/'>Become a rider</Link>
                        <Link to='/'>Deliveroo Talent Directory</Link>
                    </div>
                </div>
                <div className='footer-card'>
                    <h3>Legal</h3>
                    <div className="links">
                        <Link to='/'>Terms and conditions</Link>
                        <Link to='/'>Privacy</Link>
                        <Link to='/'>Cookies</Link>
                    </div>
                </div>
                <div className='footer-card'>
                    <h3>Help</h3>
                    <div className="links">
                        <Link to='/'>Contact</Link>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Cuisines</Link>
                        <Link to='/'>Brands</Link>
                    </div>
                </div>
                <div className='footer-card'>
                    <h3>Take Deliveroo with you</h3>
                    <div className="links">
                        <Link to='/'>Play Store</Link>
                        <Link to='/'>App Store</Link>
                    </div>
                </div>
            </div>
            <div className='more-info'>
                <div className="socials">
                    <IconButton>
                        <FacebookIcon color="secondary" />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon color="secondary" />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon color="secondary" />
                    </IconButton>
                </div>
                <p className="text-small text-muted">
                    © 2023 Deliveroo
                </p>
            </div>
        </footer>
    )
}

export default Footer;