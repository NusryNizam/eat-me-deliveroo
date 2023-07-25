import { Card } from '@mui/material';
import ProductDetails from '../../ProductDetails/ProductDetails';
import ResponsiveDialog from '../../ResponsiveDialog/ResponsiveDialog';
import './MenuListItem.css';

type PropTypes = {
    title: string,
    description: string,
    price: string,
    imageURL: string,
}

const MenuListItem = (props: PropTypes) => {
    const { title, description, price, imageURL } = props
    return (
        <ResponsiveDialog content={<ProductDetails />}>
            <Card className='card'>
                <div className="card__left">
                    <h3 className='card-title'>
                        {title}
                    </h3>
                    <p className='description text-muted text-small'>
                        {description}
                    </p>
                    <div className="price">
                        {price}
                    </div>
                </div>
                <div className="card__right image-container">
                    <img src={imageURL} alt='df' />
                </div>
            </Card>
        </ResponsiveDialog>
    )
}

export default MenuListItem;