import { Variants } from 'framer-motion';

export const ArtistCardVariants: Variants = {
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        delay: 1.8,
        ease: 'easeInOut'
        }
    }
};

export const PlaylistCardVariants: Variants = {
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        delay: 1.8,
        ease: 'easeInOut'
        }
    }
};

export const TrackCardVariants: Variants = {
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        delay: 1.8,
        ease: 'easeInOut'
        }
    }
};