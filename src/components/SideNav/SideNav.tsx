import './SideNav.css'
import Logo from "../../assets/logo.svg";

import CloseIcon from '@mui/icons-material/Close'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Button, IconButton, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';

type SideNavProps = {
    close: (event: React.KeyboardEvent | React.MouseEvent) => void
}

const SideNav = (props: SideNavProps) => {
    return (
        <div className="sidenav">
            <div className="sidenav-header">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                <IconButton disableRipple aria-label="close sidenav" onClick={props.close}>
                    <CloseIcon color="primary" fontSize='medium' />
                </IconButton>
            </div>
            <div className="sidenav-content">
                <Button disableRipple variant="contained">Sign up or log in</Button>
                <br />
                <Button disableRipple variant="text" startIcon={<HelpOutlineOutlinedIcon htmlColor='grey' />}>FAQs</Button>
                <div className="spacer" aria-hidden='true'></div>
                <Select
                    value='English'
                >
                    <MenuItem value={'English'}>English</MenuItem>
                </Select>
                <br />
                <Select
                    value='United Kingdom'
                >
                    <MenuItem value={'United Kingdom'}>United Kingdom</MenuItem>
                    <MenuItem value={'United States'}>United States</MenuItem>
                    <MenuItem value={'Sri Lanka'}>Sri Lanka</MenuItem>
                    <MenuItem value={'Singapore'}>Singapore</MenuItem>
                </Select>
            </div>


        </div>
    )
}

export default SideNav;