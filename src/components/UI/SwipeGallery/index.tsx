import React from 'react';
import styles from './style.module.css'
import Image from "next/image";

interface SwipeGalleryProps {
    images: {
        url: string,
        description: string
    }[]
}

const SwipeGallery = ({images}: SwipeGalleryProps) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.container}>
                {images.map((image, index) => (
                    <div key={index} className={styles.item}>
                        <Image className={styles.img} src={image.url} alt={image.description} loading={"lazy"} width={100}
                               height={100}
                               />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SwipeGallery;