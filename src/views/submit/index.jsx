import React, { useState, useEffect, useCallback } from "react"
import axios from 'axios'
import queryString from 'query-string'
import { Grid, Button } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import clsx from 'clsx'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepConnector from '@material-ui/core/StepConnector'
import LinearProgress from '@material-ui/core/LinearProgress'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import EventNoteIcon from '@material-ui/icons/EventNote'
import PermMediaIcon from '@material-ui/icons/PermMedia'
import Step0 from "./step0"
import Step1 from "./step1"
import Step2 from "./step2"

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.primary.main,
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#11998e',
    },
}))(LinearProgress)

const ColorlibConnector = withStyles((theme) => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundColor: '#fff',
            backgroundImage:
                'linear-gradient( 95deg, rgba(189, 97, 169, 0) 0%, #BD62A9 35%, #632a57 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#fff',
            backgroundImage:
                'linear-gradient( 95deg, rgba(189, 97, 169, 0) 0%, rgba(189, 97, 169, 0.6) 40%, rgba(189, 97, 169, 0) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
}))(StepConnector)

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 60,
        height: 60,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#632a57',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundColor: 'rgba(189, 97, 169, 0.6)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <FingerprintIcon />,
        2: <EventNoteIcon />,
        3: <PermMediaIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const stepContent = [
    Step0,
    Step1
]

export default function SubmitProp(props) {
    const { ID } = queryString.parse(props.location.search)
    const [loading, setLoading] = useState(true)
    const [step, setStep] = useState(0)
    const [data, setData] = useState(null)
    const steps = ['Geral', 'Detalhes', 'Media']

    useEffect(() => {
        axios.get('/api/imoveis/crm/' + ID)
            .then(res => {
                const { tipology, coordinates } = res.data
                let bedrooms = undefined
                if (tipology) {
                    const aux = tipology.replace('T', '')
                    bedrooms = parseInt(aux)
                    console.log(bedrooms)
                }
                let newCoordinates = coordinates
                if (coordinates) {
                    const aux = coordinates.split(",")
                    newCoordinates = {
                        latitude: aux[0],
                        longitude: aux[1]
                    }
                }
                setData({ ...res.data, ID, bedrooms: bedrooms, coordinates: newCoordinates })
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })

    }, [])

    const changeStep = (s) => {
        setStep(s)
    }

    const updateData = (params) => {
        setData({
            ...data,
            ...params
        })
    }

    const changeData = (params) => {
        setData({
            ...data,
            ...params
        })
        if (step === 1) /* Means we need to update DB */
            updateSheet()
        else
            setStep(step + 1)
    }

    const updateSheet = () => {
        /* PUT request to BE to change Sheet with CORS */
        setLoading(true)
        axios.put('/api/imoveis/crm/' + ID, { data })
            .then(res => {
                setLoading(false)
                setStep(step + 1)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    const Element = stepContent[step]

    return (
        <>
            <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {data &&
                <Grid container justify="center">
                    <Grid item xs={12} sm={10}>
                        {step < 2 &&
                            <Element
                                loading={loading} changeStep={changeStep} data={data} step={step} changeData={changeData} updateDataFields={updateData}
                            />
                        }
                        <Step2 loading={loading} data={data} changeStep={changeStep} step={step} ID={ID} />
                    </Grid>
                    {/* <Grid item xs={10}>
                        <Button variant="contained" color="secondary" onClick={() => setLoading(!loading)}>
                            Loading
                        </Button>
                    </Grid> */}
                    {/* {step < 2 &&
                        <Grid item xs={12} sm={10}>
                            <Button variant="contained" color="primary" onClick={() => setStep(step + 1)}>
                                Seguinte
                            </Button>
                        </Grid>
                    } */}
                </Grid>
            }
        </>
    )
}