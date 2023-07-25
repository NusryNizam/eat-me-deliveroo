import { forwardRef, useEffect } from "react";
import MenuListItemInterface from "../../../interfaces/menu-list-item.interface"
import MenuListItem from "../MenuListItem/MenuListItem"

import './MenuListCategory.css';

type PropTypes = {
    categoryTitle: string,
    items: MenuListItemInterface[],
    handleScroll: (isIntersecting: boolean, attribute: string | null) => void,
    isScrolling: boolean
}
const MenuListCategory = (props: PropTypes, ref: React.Ref<HTMLDivElement>) => {
    const { categoryTitle, items, handleScroll, isScrolling } = props

    const intersectionCallback = (([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        // console.log(observer);
        handleScroll(entry.isIntersecting, entry.target.getAttribute('data-name'))

    })

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionCallback, {
            rootMargin: '-180px 0px -30% 0px',
        })

        if (isScrolling) {
            observer.disconnect()
        }

        if (ref != null && !isScrolling)
            observer.observe((ref as React.RefObject<HTMLDivElement>)?.current as Element)

        return () => {
            observer.disconnect()
        }
    }, [isScrolling])

    return (
        <div className="MenuListCategory" ref={ref} data-name={categoryTitle}>
            <h2 className="category" >
                {categoryTitle}
            </h2>
            <div className="items-container">
                {
                    items.map((item) => {
                        return (
                            <MenuListItem key={item.itemID} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default forwardRef<HTMLDivElement, PropTypes>(MenuListCategory)