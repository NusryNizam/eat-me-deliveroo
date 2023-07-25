import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Icon, Skeleton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import InfoIcon from '@mui/icons-material/InfoOutlined'
import GroupIcon from '@mui/icons-material/GroupOutlined'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import InfoButton from '../InfoButton/InfoButton'
import Info from '../Info/Info'
import ResponsiveDialog from '../ResponsiveDialog/ResponsiveDialog'
import { fetchRestaurantsAsync } from '../../redux/restaurantsSlice'
import RestaurantInterface from '../../interfaces/restaurant.interface'

import DeliveryIcon from '../../assets/delivery.svg'

import './Restaurant.css'
import Review from '../Review/Review';

const Restaurant = () => {
  const dispatch = useDispatch<any>()
  const { id } = useParams()
  const restaurant = useSelector((state: any) => state.restaurants.restaurants.find((restaurant: RestaurantInterface) => parseInt(id as string) === restaurant.id))

  useEffect(() => {
    dispatch(fetchRestaurantsAsync())
  }, [])

  if (!restaurant) {
    return (
      <div style={{ display: 'flex', gap: '2rem', padding: '2.4rem 4rem', flexWrap: 'wrap' }}>
        <Skeleton variant="rectangular" width={480} height={280} />
        <div>
          <Skeleton variant="text" sx={{ fontSize: '3rem', width: 300 }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', width: 200 }} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', width: 150 }} />
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="container">
        <Button disableRipple className="mb-1 btn-back" variant="text" startIcon={<ArrowBackIcon />}>
          <span className='hide-in-small'>Back</span>
        </Button>
        <div className="details-container pt-1">
          <div className="details-container__image" style={{ backgroundImage: `url(${restaurant.imageURL})`, backgroundSize: 'cover' }}>
            {/* <img
              src={restaurant.imageURL}
              alt="Placeholder restaurant"
            /> */}
            <div className="action-small">
              <Button disableRipple startIcon={<GroupIcon color="primary" />} variant='contained' color="secondary" className='group-order-btn'>Start group order</Button>
            </div>

          </div>
          <div className='details-container__right'>
            <div className="right__details">
              <h1 className='restaurant-name'>{restaurant.restaurantName}</h1>
              <p className='pt-1'>
                {restaurant.categories.map((category: string) => (
                  <span key={category}>
                    {category} <span> · </span>
                  </span>
                ))}
              </p>
              <p className="text-muted pt-1">
                {restaurant.distance} miles away · {restaurant.openTime} · {restaurant.deliveryFee} delivery · {restaurant.mininumAmount} minimum
              </p>

              <ResponsiveDialog
                title='-'
                content={<Info />}
              >
                <InfoButton
                  startIcon={<InfoIcon htmlColor="grey" />}
                  title="Info"
                  description="Map, allergens and hygiene rating"
                  endIcon={<ChevronRightIcon color="primary" />}
                ></InfoButton>
              </ResponsiveDialog>

              <ResponsiveDialog
                title='Reviews'
                content={<Review />}
              >
                <InfoButton
                  startIcon={<StarIcon htmlColor="green" />}
                  title="4.7 Excellent"
                  description="See all 500 reviews"
                  endIcon={<ChevronRightIcon color="primary" />}
                ></InfoButton>
              </ResponsiveDialog>
            </div>

            <div className="action">
              {/* <Button disableRipple startIcon={<DeliveryDiningIcon />}><span style={{ color: '#000000', marginRight: 'auto' }}>Deliver</span> Change</Button> */}
              <Button disableRipple startIcon={<Icon>
                <img alt="edit" src={DeliveryIcon} />
              </Icon>}><span style={{ color: '#000000', marginRight: 'auto' }}>Deliver</span> Change</Button>
              <Button disableRipple startIcon={<GroupIcon />} variant='outlined' className='group-order-btn'>Start group order</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Restaurant
