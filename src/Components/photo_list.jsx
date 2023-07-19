import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from "@mui/material";
import { useState } from "react";

export default function NailsImageList() {

    const handleImageClick = () => {
        window.open('https://www.instagram.com/wizurki/', '_blank');
    };


    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 10,
                pb: 10
            }}
        >
            <Box
                sx={{
                    width: 900,
                    height: 500,
                    border: '2px solid purple',
                    boxShadow: '0px 3px 3px -2px purple, 0px 3px 4px 0px purple, 0px 1px 8px 0px purple;',
                    backgroundColor: '#cd5c5c',
                    overflowY: 'scroll',
                    scrollbarColor: 'purple pink',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        backgroundColor: '#cd5c5c',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'purple',
                        borderRadius: '4px',
                    },
                }}
            >
                <ImageList variant="masonry" cols={2} gap={12} sx={{ m: 0 }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

const itemData = [
    {
        img: '/assets/paznokcie_1.jpg',
        title: 'paznokcie1',
    },
    {
        img: '/assets/paznokcie_2.jpg',
        title: 'paznokcie2',
    },
    {
        img: '/assets/paznokcie_3.jpg',
        title: 'paznokcie3',
    },
    {
        img: 'assets/paznokcie_4.jpg',
        title: 'paznokcie4',
    },
    {
        img: '/assets/paznokcie_5.jpg',
        title: 'paznokcie5',
    },
    {
        img: '/assets/paznokcie_6.jpg',
        title: 'paznokcie6',
    },
    {
        img: '/assets/paznokcie_7.jpg',
        title: 'paznokcie7',
    },
    {
        img: '/assets/paznokcie_8.jpg',
        title: 'paznokcie8',
    },
    {
        img: '/assets/paznokcie_9.jpg',
        title: 'paznokcie9',
    },
];