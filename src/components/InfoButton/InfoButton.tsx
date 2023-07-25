import { Button, SvgIconTypeMap } from "@mui/material"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/InfoOutlined';

import './InfoButton.css'

type InfoButtonType = {
    startIcon: JSX.Element,
    title: string,
    description: string,
    endIcon: JSX.Element,
}
const InfoButton = (props: InfoButtonType) => {
    const { startIcon, title, description, endIcon } = props
    return (
        <div className="pt-1">
            <button className="InfoButton">
                <>
                    {startIcon}
                    <div className="info-button-details">
                        <span className="title">{title}</span>
                        <span className="text-muted" >{description}</span>
                    </div>
                    {endIcon}
                </>
            </button >
        </div>
    )
}

export default InfoButton