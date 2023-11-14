import React from 'react';
import './button.css';
import { IconArrowLeft, IconArrowRight,  IconAerialLift} from '@tabler/icons-react';


export const createButton = ({
    style = 'filled',
    size = 'small',
    label,
    icon,
    ...props
}) => {
    const iconMap = {
        left: IconArrowLeft,
        right: IconArrowRight,
        close:  IconAerialLift,
        // Add more icons to the map as needed
      };
      const IconComponent = iconMap[icon];

    return (
    <>
    <button className={['button', `button--${size}`, `button--${style}`].join(' ')}{...props}>   {IconComponent && <IconComponent />}{label}</button>
    </>
    );
};