import { Slide, useScrollTrigger } from '@material-ui/core';
import React from 'react';

function HideOnScroll(props: any) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
}

export default HideOnScroll;