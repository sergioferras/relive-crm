import React from "react"
import Typography from '@material-ui/core/Typography'
import { Grid, Button } from "@material-ui/core"
import Divider from '@material-ui/core/Divider'

export default function Step2(props) {

    const { loading, step, ID, data, changeStep } = props

    const { se, title } = data

    const formatTitle = title.replace(/ /g, "%20")
    const formatSe = se.replace(/ /g, "%20")

    return (
        <div style={{ display: step !== 2 ? 'none' : 'inherit' }}>
            <Typography variant="h4" component="h4">
                Media
            </Typography>
            <Divider className="divider" orientation="horizontal" /> {/* New%20property%20from%20AppSheet%20awaiting%20update%20from%20API%20PRE-${ID} */}
            <iframe src={`https://relive.pt/submit/?title=${formatTitle}_${ID}&note=Propriedade%20${formatTitle}%20submetida%20por%20${formatSe}%20com%20ID%20PRE-${ID}`} loading="lazy" style={{ width: '100%', borderWidth: 'inherit', height: '1000px' }} title="Submeter Propriedade Relive">
            </iframe>
            <Grid container>
                <Button variant="contained" color="secondary" onClick={() => changeStep(1)}>
                    Recuar
                </Button>
            </Grid>
        </div>
    )
}