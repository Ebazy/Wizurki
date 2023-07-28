import { Typography, Container, Paper, Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import {
    aboutmeChangeBox,
    aboutmeChangeImg, aboutmeChangeText, aboutmeChangeTitle,
    aboutmeContainer,
    aboutmeNoChangeBox,
    aboutmeNoChangeImg, aboutmeNoChangeText,
    aboutmeNoChangeTitle,
    aboutmePaper
} from "./PhotoListStyle.js";

const AboutMe = () => {
    const theme = useTheme();
    const ChangeScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Container
            maxWidth='lg'
            sx={aboutmeContainer}
        >
            <Paper
                elevation={3}
                sx={aboutmePaper}
            >
                <Grid
                    container spacing={2}
                >
                    {!ChangeScreen && (
                        <>
                        <Grid
                            item xs={6}
                        >
                            <img
                                src='/assets/wika.jpg'
                                alt='Wiktoria'
                                style={aboutmeNoChangeImg}
                            />
                        </Grid>
                    <Grid
                        item xs={12}
                        sm={6}
                    >
                        <Box
                            sx={aboutmeNoChangeBox}

                        >
                            <Typography
                                variant='h3'
                                sx={aboutmeNoChangeTitle}
                            >
                                Poznaj Wiktorię,
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={aboutmeNoChangeText}
                            >
                                Początkującą stylistkę paznokci, pełną pozytywnej energii i dowcipnego podejścia! Z pędzelkiem w jednej
                                ręce i kolekcją lakierów do paznokci, która przyprawiłaby tęczę o zazdrość, jest gotowa podbić świat,
                                jeden paznokieć na raz.

                                Wiktoria może być początkująca w sztuce zdobienia paznokci, ale jej pasja i determinacja są tak soczyste,
                                jak kolory, których używa. Z uzbrojeniem w niekończące się tutoriale na YouTube i sercem pełnym
                                kreatywności, nie ma dla niej rzeczy niemożliwych. Czasami zdarza się, że jej wzory na paznokciach
                                przypominają abstrakcyjne dzieła sztuki, ale to właśnie dodaje im charakteru i uśmiechu na twarzach
                                klientek.

                                Wiktoria zawsze znajdzie sposób, aby przynieść uśmiech na twarz swoich klientek, nawet jeśli nie wszystko
                                idzie zgodnie z planem. Jej początkujące przygody w świecie stylizacji paznokci pełne są śmiechu i zabawy.
                                Każde spotkanie z nią to nie tylko sesja zdobienia paznokci, ale również czas, w którym można się
                                pośmiać i zapomnieć o troskach dnia codziennego.
                            </Typography>
                        </Box>
                    </Grid>
                        </>
                )}
                    {ChangeScreen && (
                        <>
                        <Grid
                            item
                            xs={12}
                            className='image-container'
                        >
                            <img
                                src='/assets/wika.jpg'
                                alt='Wiktoria'
                                style={aboutmeChangeImg}
                            />
                        </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                            >
                                <Box
                                    sx={aboutmeChangeBox}
                                >
                                    <Typography
                                        variant='h6'
                                        sx={aboutmeChangeTitle}
                                    >
                                        Poznaj Wiktorię,
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        sx={aboutmeChangeText}
                                    >
                                        Początkującą stylistkę paznokci, pełną pozytywnej energii i dowcipnego podejścia! Z pędzelkiem w jednej
                                        ręce i kolekcją lakierów do paznokci, która przyprawiłaby tęczę o zazdrość, jest gotowa podbić świat,
                                        jeden paznokieć na raz.

                                        Wiktoria może być początkująca w sztuce zdobienia paznokci, ale jej pasja i determinacja są tak soczyste,
                                        jak kolory, których używa. Z uzbrojeniem w niekończące się tutoriale na YouTube i sercem pełnym
                                        kreatywności, nie ma dla niej rzeczy niemożliwych. Czasami zdarza się, że jej wzory na paznokciach
                                        przypominają abstrakcyjne dzieła sztuki, ale to właśnie dodaje im charakteru i uśmiechu na twarzach
                                        klientek.

                                        Wiktoria zawsze znajdzie sposób, aby przynieść uśmiech na twarz swoich klientek, nawet jeśli nie wszystko
                                        idzie zgodnie z planem. Jej początkujące przygody w świecie stylizacji paznokci pełne są śmiechu i zabawy.
                                        Każde spotkanie z nią to nie tylko sesja zdobienia paznokci, ale również czas, w którym można się
                                        pośmiać i zapomnieć o troskach dnia codziennego.
                                    </Typography>
                                </Box>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Paper>
        </Container>
    );
};

export default AboutMe;