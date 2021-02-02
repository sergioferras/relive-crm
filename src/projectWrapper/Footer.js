import React from "react"
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(4),
        fontSize: '1.4em'
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <Typography variant="h4" component="h4" className={classes.footer}>
            <Grid container justify="center" alignItems="center">
                Made with
            <FavoriteIcon color="secondary" fontSize="small" />
                by Relive
            </Grid>
        </Typography>
    )
}

export default Footer