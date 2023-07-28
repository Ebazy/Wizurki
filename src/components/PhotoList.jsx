import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from "@mui/material";
import {itemlistStyle, listContainer, listBox, listImageList} from "./PhotoListStyle.js";

export default function NailsImageList() {

    const handleImageClick = () => {
        window.open('https://www.instagram.com/wizurki/', '_blank');
    };


    return (
        <Container
            sx={listContainer}
        >
            <Box
                sx={listBox}
            >
                <ImageList
                    variant='masonry'
                    cols={2}
                    gap={12}
                    sx={itemlistStyle}
                >
                    {itemData
                        .map((item) => (
                        <ImageListItem
                            key={item.img}
                            onClick={handleImageClick}
                            style={listImageList}
                        >
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