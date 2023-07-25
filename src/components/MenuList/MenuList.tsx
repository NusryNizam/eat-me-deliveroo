import { Button, Card, Chip } from '@mui/material';
import './MenuList.css';
import MenuListCategory from './MenuListCategory/MenuListCategory';

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { data as DummyData } from '../../data.js'
import { createRef, useState } from 'react';

const MenuList = () => {

    let data = DummyData
    const [currentCategory, setCurrentCategory] = useState('')

    const [isScrolling, setIsScrolling] = useState(false)

    const dataRefs: React.RefObject<HTMLDivElement>[] = []
    data.forEach(_ => {
        dataRefs.push(createRef())
    })

    const scrollTo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsScrolling(true)
        const target = e.target as HTMLDivElement

        let matchedRef = dataRefs.find(ref =>
            ref.current?.getAttribute('data-name') === target.innerText
        )
        // console.log('MatchedRef', matchedRef?.current);

        if (matchedRef) {
            setCurrentCategory(matchedRef.current?.getAttribute('data-name') as string)
            matchedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

            window.addEventListener('scrollend', () => {
                setIsScrolling(prevState => !prevState)
            }, { once: true })
        }

    }

    const handleScroll = (isIntersecting: boolean, attr: string | null) => {
        // let matchedAttr = data.filter(category => attr === category.categoryTitle)[0].categoryTitle
        if (isIntersecting) {
            setCurrentCategory(attr as string)
        }

    }

    return (
        <div className="MenuList">
            <div className="chips">
                {
                    data.map(bundle => (
                        <Chip
                            key={bundle.id}
                            label={bundle.categoryTitle}
                            color={currentCategory === bundle.categoryTitle ? 'primary' : 'default'}
                            className={currentCategory === bundle.categoryTitle ? 'selected' : 'not-selected'}
                            onClick={(e) => scrollTo(e)}
                        ></Chip>
                    ))
                }
            </div>
            <div className="menu-list__container">
                <div className="container p-1">
                    <p className='text-small' style={{ paddingBlock: '2rem' }}>Adults need around 2000 kcal a day</p>
                    {
                        data.map((bundle, index) => {
                            return (
                                <MenuListCategory
                                    key={bundle.id}
                                    {...bundle}
                                    ref={dataRefs[index]}
                                    handleScroll={handleScroll}
                                    isScrolling={isScrolling}
                                ></MenuListCategory>
                            )
                        })
                    }
                </div>
                <div className="basket-container">
                    <Card className='basket'>
                        <div className="basket-content">
                            <ShoppingBasketOutlinedIcon color="disabled" fontSize='large' />
                            <br />
                            <span className='text-muted'>Your basket is empty</span>
                            <br />
                            <br />
                            <Button disableRipple disabled variant="contained">Go to checkout</Button>
                        </div>

                    </Card>
                </div>
            </div>


        </div >
    )
}

export default MenuList;