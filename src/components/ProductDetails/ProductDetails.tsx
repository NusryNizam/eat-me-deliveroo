import { Button, Divider, FormControl, FormControlLabel, IconButton, Radio, RadioGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import SubtractIcon from '@mui/icons-material/RemoveCircleOutline';

import './ProductDetails.css'

const ProductDetails = () => {
    return (
        <div className="ProductDetails">
            <div className="product-image-container">
                <img className='product-image' src='https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt="" />
            </div>
            <h1 className='product-title'>Misfits cookies and cream</h1>
            <p className='product-description'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam eos dolorum placeat. Quas amet dignissimos, hic aliquam, distinctio voluptatum accusantium tenetur eum sapiente debitis autem laborum. Cupiditate, quisquam magni at, sapiente ratione earum, culpa totam reiciendis dolorem sequi ipsa!
            </p>
            <p className='product-energy'>237kcal</p>

            <Divider sx={{ marginBottom: '1rem' }} />

            <p className='mb-1'>
                <strong>
                    Contains celery, gluten, nuts, sesame, soybeans, sulphur dioxide/sulphites
                </strong>
                <br />
                Questions about allergens, ingredients or cooking methods?Please contact the restaurant.
            </p>

            <Divider sx={{ marginBottom: '1rem' }} />

            <div className='mb-1'>
                <strong>
                    Choose your first base
                </strong>
                <br />
                Required
                <br />
                <br />
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="supergrains" control={<Radio />} label={<span>supergrains<br /><span className='text-small'>Containes celery. 144kCal</span></span>} disabled />
                        <FormControlLabel value="basmati rice" control={<Radio />} label="basmati rice" disabled />
                        <FormControlLabel value="rainbow slaw" control={<Radio />} label="rainbow slaw" disabled />
                        <FormControlLabel value="sweet potato mash" control={<Radio />} label="sweet potato mash" disabled />
                    </RadioGroup>
                </FormControl>

            </div>

            <div className='mb-1'>
                <strong>
                    Choose your first base
                </strong>
                <br />
                Required
                <br />
                <br />
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="supergrains" control={<Radio />} label={<span>supergrains<br /><span className='text-small'>Containes celery. 144kCal</span></span>} disabled />
                        <FormControlLabel value="basmati rice" control={<Radio />} label="basmati rice" disabled />
                        <FormControlLabel value="rainbow slaw" control={<Radio />} label="rainbow slaw" disabled />
                        <FormControlLabel value="sweet potato mash" control={<Radio />} label="sweet potato mash" disabled />
                    </RadioGroup>
                </FormControl>

            </div>

            <div className='mb-1'>
                <strong>
                    Choose your first base
                </strong>
                <br />
                Required
                <br />
                <br />
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="supergrains" control={<Radio />} label={<span>supergrains<br /><span className='text-small'>Containes celery. 144kCal</span></span>} disabled />
                        <FormControlLabel value="basmati rice" control={<Radio />} label="basmati rice" disabled />
                        <FormControlLabel value="rainbow slaw" control={<Radio />} label="rainbow slaw" disabled />
                        <FormControlLabel value="sweet potato mash" control={<Radio />} label="sweet potato mash" disabled />
                    </RadioGroup>
                </FormControl>

            </div>

            <div className="product-actions">
                <div className="quantity">
                    <IconButton disabled><SubtractIcon /></IconButton>
                    <h2 className='text-muted'>1</h2>
                    <IconButton disabled><AddIcon /></IconButton>
                </div>
                <Button className='btn-cta' disabled disableRipple color="primary" variant="contained">Add for $11.49</Button>
            </div>
        </div>

    )
}

export default ProductDetails;