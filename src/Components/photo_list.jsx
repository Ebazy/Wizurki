import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Container} from "@mui/material";
import {useState} from "react";

export default function NailsImageList() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 10,
                pb: 10
        }}>
        <Box
            sx={{
                width: 900,
                height: 500,
                overflowY: 'hidden',
                border: '2px solid purple',
                boxShadow: '0px 3px 3px -2px purple, 0px 3px 4px 0px purple, 0px 1px 8px 0px purple;',
                backgroundColor: 'pink',
                '&:hover': {
                    overflowY: 'scroll',
                },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <ImageList variant="masonry" cols={2} gap={12}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
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
        img: 'src/assets/paznokcie_1.jpg',
        title: 'paznokcie1',
    },
    {
        img: 'src/assets/paznokcie_2.jpg',
        title: 'paznokcie2',
    },
    {
        img: 'src/assets/paznokcie_3.jpg',
        title: 'paznokcie3',
    },
    {
        img: 'src/assets/paznokcie_4.jpg',
        title: 'paznokcie4',
    },
    {
        img: 'src/assets/paznokcie_5.jpg',
        title: 'paznokcie5',
    },
    {
        img: 'src/assets/paznokcie_6.jpg',
        title: 'paznokcie6',
    },
    {
        img: 'src/assets/paznokcie_7.jpg',
        title: 'paznokcie7',
    },
    {
        img: 'src/assets/paznokcie_8.jpg',
        title: 'paznokcie8',
    },
    {
        img: 'src/assets/paznokcie_9.jpg',
        title: 'paznokcie9',
    },
];