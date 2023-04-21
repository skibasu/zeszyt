import React from "react"
import logo from "./med.png"
import greengo from "./greengo.png"
import moment from "moment"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import uuid from "react-uuid"
import "./App.css"

interface ITime {
    hour: string
    minutes: string
    weight: number
    type: string
}
interface IRows {
    id: any
    date: any
    feelings: string
    time: ITime[]
    sum: number
}
const rows: IRows[] = [
    {
        id: uuid(),
        date: moment("07-04-2023"),
        feelings: `Po okolo kilku minutach od zazycia pierwszej dawki calodniowy bol plecow znaczaco sie zmniejsza. Poprawila się rowniez jakość snu. Dobre samopoczucie i delikatnie rozleniwienie towarzyszy po konsumpcji`,
        time: [
            {
                hour: "19",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "21",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "23",
                minutes: "50",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.6,
    },
    {
        id: uuid(),
        date: moment("08-04-2023"),
        feelings: `Po okolo kilku minutach od zazycia pierwszej dawki calodniowy bol plecow znaczaco sie zmniejsza. Dobra jakość snu. Dobre samopoczucie i delikatnie rozleniwienie towarzyszy po konsumpcji`,

        time: [
            {
                hour: "17",
                minutes: "50",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "20",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.6,
    },
    {
        id: uuid(),
        date: moment("09-04-2023"),
        feelings: `Po okolo kilku minutach od zazycia pierwszej dawki calodniowy bol plecow znaczaco sie zmniejsza. Dobra jakość snu. Dobre samopoczucie i delikatnie rozleniwienie towarzyszy po konsumpcji`,

        time: [
            {
                hour: "17",
                minutes: "50",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "20",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "30",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 1,
    },
    {
        id: uuid(),
        date: moment("10-04-2023"),
        feelings: `Po okolo kilku minutach od zazycia pierwszej dawki calodniowy bol plecow znaczaco sie zmniejsza. Dobra jakość snu. Dobre samopoczucie i delikatnie rozleniwienie towarzyszy po konsumpcji i utrzymuje się. Pojawia sie równiez kreatywnosć`,

        time: [
            {
                hour: "19",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "23",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 1,
    },

    {
        id: uuid(),
        date: moment("04-10-2023"),
        feelings: `Po okolo kilku minutach od zazycia pierwszej dawki calodniowy bol plecow znaczaco sie zmniejsza. Dobra jakość snu. Dobre samopoczucie i delikatnie rozleniwienie towarzyszy po konsumpcji. Pojawia sie równiez kreatywnosć`,

        time: [
            {
                hour: "19",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "23",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.6,
    },
    {
        id: uuid(),
        date: moment("04-11-2023"),
        feelings: `Ewidentnie odczuwalne są efekty przeciwbolowe. Dobra jakość snu. Dobre samopoczucie, czasami lekkie zmeczenie towarzyszy po konsumpcji. Kreatywność utrzymuje się.`,

        time: [
            {
                hour: "17",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "20",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "23",
                minutes: "45",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 1,
    },
    {
        id: uuid(),
        date: moment("04-12-2023"),
        feelings: `Ewidentnie odczuwalne są efekty przeciwbolowe. Dobra jakość snu. Dobre samopoczucie, czasami lekkie zmeczenie towarzyszy po konsumpcji. Kreatywność utrzymuje się.`,

        time: [
            {
                hour: "20",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.6,
    },
    {
        id: uuid(),
        date: moment("04-13-2023"),
        feelings: `Ewidentnie odczuwalne są efekty przeciwbolowe. Dobra jakość snu. Dobre samopoczucie, czasami lekkie zmeczenie towarzyszy po konsumpcji. Kreatywność utrzymuje się.`,

        time: [
            {
                hour: "20",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "23",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.8,
    },
    {
        id: uuid(),
        date: moment("04-14-2023"),
        feelings: `Ewidentnie odczuwalne są efekty przeciwbolowe. Dobra jakość snu. Samopoczucie raczej na przecietnym poziomie. Kreatywność lekko opada.`,

        time: [
            {
                hour: "17",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "20",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "23",
                minutes: "45",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.8,
    },
    {
        id: uuid(),
        date: moment("04-15-2023"),
        feelings: `Efekty przeciwbolowe utrzymują się. Dobra jakość snu. Samopoczucie raczej na przecietnym poziomie, pojawil sie efekt duzego zmeczenia okolo 23 . Kreatywność raczej na srednim ale dobrym poziomie.`,

        time: [
            {
                hour: "17",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "20",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.6,
    },
    {
        id: uuid(),
        date: moment("04-16-2023"),
        feelings: `Efekty przeciwbolowe utrzymują się. Dobra jakość snu. Samopoczucie raczej na przecietnym poziomie, zmeczenie i senność okolo 23 . Kreatywność sie ustabilizowala na srednim poziomie z momentami lekkich wzrostów co dwa trzy dni.`,

        time: [
            {
                hour: "20",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "22",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.8,
    },
    {
        id: uuid(),
        date: moment("04-17-2023"),
        feelings: `Efekty przeciwbolowe utrzymują się bez zwiekszania dawki. Dobra jakość snu. Samopoczucie raczej na przecietnym poziomie, lekkie zmeczenie podczas dnia i senność okolo 23 .Mała kreatywność.`,

        time: [
            {
                hour: "17",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "20",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
            {
                hour: "23",
                minutes: "00",
                weight: 0.2,
                type: "Cannabis Flos Monster Kush 18% THC",
            },
        ],
        sum: 0.8,
    },
    {
        id: uuid(),
        date: moment("04-18-2023"),
        feelings: `Zabieg dentystyczny, znieczulenie i srodki przeciwbolowe podane przez stomatologa. Wstzrymane inhalacje ze wzgledu na zalecenie lekarza`,

        time: [],
        sum: 0,
    },
    {
        id: uuid(),
        date: moment("04-19-2023"),
        feelings: `Zmiana odmiany na Jack Herrer.Efekty przeciwbolowe na dobrym poziomie. Znacznie wieksza energia, duzo lepsze samopoczucie, odczuwalne momenty euforii - szczególnie podczas samego palenia. Sen w normie. Kreatywnosc na dobrym poziomie.`,

        time: [
            {
                hour: "17",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Jack Herrer 18% THC",
            },
            {
                hour: "22",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Jack Herrer 18% THC",
            },
            {
                hour: "23",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Jack Herrer 18% THC",
            },
        ],
        sum: 1,
    },
    {
        id: uuid(),
        date: moment("04-20-2023"),
        feelings: `Jack Herrer to zdecydowanie lepsza odmiana dla mnie.Duzo lepsze samopoczucie i brak znudzenia. Efekty przecibolowe utrzymuje sie na bardzo dobrym poziomie. Znaczace poprawa samopoczucia brak efektu "zamulenia", który momentami sie pojawiał przy odnianie Monster Kush`,

        time: [
            {
                hour: "17",
                minutes: "30",
                weight: 0.2,
                type: "Cannabis Flos Jack Herrer 18% THC",
            },
            {
                hour: "22",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Jack Herrer 18% THC",
            },
            {
                hour: "23",
                minutes: "00",
                weight: 0.4,
                type: "Cannabis Flos Jack Herrer 18% THC",
            },
        ],
        sum: 1,
    },
]
const App: React.FC = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        borderRadius: 0,
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.secondary,
    }))

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />
                <div style={{ maxWidth: "100%", padding: "40px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={1} key={uuid()}>
                                <Item
                                    sx={{
                                        borderRadius: "6px",
                                        backgroundColor: "#0c4a01",
                                        display: "flex",
                                        flexDirection: "column",
                                        flexWrap: "wrap",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        minWidth: "152px",
                                    }}
                                >
                                    <h2
                                        style={{
                                            fontSize: "16px",
                                            color: "#fff",
                                            margin: 0,
                                        }}
                                    >
                                        Łączna dawka:{" "}
                                    </h2>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: "28px",
                                            color: "#FFF",
                                        }}
                                    >
                                        {rows
                                            .reduce(
                                                (acc, current) =>
                                                    acc + current.sum,
                                                0
                                            )
                                            .toFixed(1)}{" "}
                                        <span
                                            style={{
                                                marginLeft: "1px",
                                                fontSize: "16px",
                                                color: "#FFF",
                                            }}
                                        >
                                            /gr
                                        </span>
                                    </p>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={12} key={uuid()}>
                                <Item
                                    sx={{
                                        borderRadius: "6px",
                                    }}
                                >
                                    <h2>Sposob konsumpcji :</h2>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            marginBottom: "48px",
                                        }}
                                    >
                                        Skret z mieszanka kwiatow "Greengo" plus
                                        susz. Filtr weglowy "Purize".
                                    </p>
                                    <figure>
                                        <img
                                            src={greengo}
                                            alt=""
                                            style={{ maxWidth: "100%" }}
                                        />
                                    </figure>
                                </Item>
                            </Grid>
                            {rows.map((item) => {
                                return (
                                    <Grid item xs={12} key={uuid()}>
                                        <Item
                                            sx={{
                                                borderBottom: "1px solid grey",
                                                borderTopLeftRadius: "6px",
                                                borderTopRightRadius: "6px",
                                                backgroundColor:
                                                    "rgb(183, 247, 200)",
                                            }}
                                        >
                                            <h2
                                                style={{
                                                    fontSize: "18px",
                                                }}
                                            >
                                                Data:{" "}
                                                {moment(item.date).format(
                                                    "DD / MM / YYYY"
                                                )}
                                            </h2>
                                        </Item>
                                        <Grid
                                            container
                                            spacing={0}
                                            sx={{
                                                overflow: "hidden",
                                                borderBottomLeftRadius: "6px",
                                                borderBottomRightRadius: "6px",
                                            }}
                                        >
                                            {item.time.map((time) => {
                                                return (
                                                    <Grid
                                                        container
                                                        spacing={0}
                                                        alignItems="stretch"
                                                        key={uuid()}
                                                    >
                                                        <Grid
                                                            item
                                                            xs={4}
                                                            lg={2}
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection:
                                                                    "column",
                                                            }}
                                                        >
                                                            <Item
                                                                style={{
                                                                    // width: "100%",
                                                                    height: "100%",
                                                                }}
                                                            >
                                                                <h2
                                                                    style={{
                                                                        fontSize:
                                                                            "16px",
                                                                    }}
                                                                >
                                                                    Godzina:{" "}
                                                                    {time.hour}{" "}
                                                                    :{" "}
                                                                    {
                                                                        time.minutes
                                                                    }
                                                                </h2>
                                                            </Item>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={4}
                                                            lg={2}
                                                        >
                                                            <Item
                                                                style={{
                                                                    // width: "100%",
                                                                    height: "100%",
                                                                }}
                                                            >
                                                                <h2
                                                                    style={{
                                                                        fontSize:
                                                                            "16px",
                                                                    }}
                                                                >
                                                                    Dawka:{" "}
                                                                    {
                                                                        time.weight
                                                                    }{" "}
                                                                    gr
                                                                </h2>
                                                            </Item>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={4}
                                                            lg={8}
                                                        >
                                                            <Item
                                                                style={{
                                                                    //width: "100%",
                                                                    height: "100%",
                                                                }}
                                                            >
                                                                <h2
                                                                    style={{
                                                                        fontSize:
                                                                            "16px",
                                                                    }}
                                                                >
                                                                    Odmiana:{" "}
                                                                    {time.type}
                                                                </h2>
                                                            </Item>
                                                        </Grid>
                                                    </Grid>
                                                )
                                            })}
                                            <Grid item xs={12}>
                                                <Item>
                                                    <h2
                                                        style={{
                                                            fontSize: "16px",
                                                        }}
                                                    >
                                                        Samopoczucie
                                                    </h2>
                                                    <ul>
                                                        <li>
                                                            <p
                                                                style={{
                                                                    fontSize:
                                                                        "16px",
                                                                }}
                                                            >
                                                                {item.feelings}
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </div>
            </header>
        </div>
    )
}

export default App
