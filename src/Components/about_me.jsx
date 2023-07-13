import { Typography, Container, Paper, Grid, Box, useMediaQuery, useTheme } from '@mui/material';

const AboutMe = () => {
    const theme = useTheme();
    const ChangeScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ backgroundColor: 'transparent'}}>
            <Paper elevation={3} sx={{ backgroundColor: 'transparent', boxShadow: '0px 3px 3px -2px purple, 0px 3px 4px 0px purple, 0px 1px 8px 0px purple;'}} >
                <Grid container spacing={2}>
                    {!ChangeScreen && (
                        <>
                        <Grid item xs={6} >
                            <img
                                src="src/assets/wika.jpg"
                                alt="Wiktoria"
                                style={{ width: '100%', height: '100%', float: 'left', marginRight: '1rem' }}
                            />
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ padding: '1rem', color: 'white' }}>
                            <Typography variant="h3" sx={{ wordWrap: 'break-word', paddingBottom: 6 }}>
                                Poznaj Wiktorię,
                            </Typography>
                            <Typography variant="body1" sx={{ wordWrap: 'break-word' }}>
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
                        <Grid item xs={12} className="image-container">
                            <img
                                src="src/assets/wika.jpg"
                                alt="Wiktoria"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box sx={{ padding: '1rem', color: 'white' }}>
                                    <Typography variant="h4" sx={{ wordWrap: 'break-word' }}>
                                        Poznaj Wiktorię,
                                    </Typography>
                                    <Typography variant="body1" sx={{ wordWrap: 'break-word' }}>
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