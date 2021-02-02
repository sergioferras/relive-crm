import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'

/* import AcUnitIcon from '@material-ui/icons/AcUnit'
import FireplaceIcon from '@material-ui/icons/Fireplace'

import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'

import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser'

import KitchenIcon from '@material-ui/icons/Kitchen'
import PoolIcon from '@material-ui/icons/Pool'

import NatureIcon from '@material-ui/icons/Nature'
import LandscapeIcon from '@material-ui/icons/Landscape'

import LocationCityIcon from '@material-ui/icons/LocationCity'

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'

import VideocamIcon from '@material-ui/icons/Videocam'
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck' */

/* imovel-tipo

    (Comercial: 71 mas nao usar maybe)

    Terreno: 194
    Prédio: 192
    Loja: 91
    Escritório: 87
    Moradia: 34

    Apartamento: Tudo o resto (95, 47, 49, 129, 154)

    MORADIA FAZER IGUAL A APARTAMENTO

    Dá para meter VISTA CAMPO NA MORADIA/APARTMENTO ??? TENHO DE ATUALIZAR API TMB

*/

const allFeatures = [
    { id: '196', show: [194], label: "Acesso Pavimentado" },
    { id: '209', show: [192], label: "Alarme" },
    { id: '155', show: [91, 87, 34], label: "Aquecimento Central" },
    { id: '156', show: [192, 91, 87, 34], label: "Ar Condicionado" },
    { id: '157', show: [91, 87, 34], label: "Arrecadação" },
    { id: '158', show: [34], label: "Box (1 carro)" },
    { id: '159', show: [34], label: "Box (2 carros)" },
    { id: '193', show: [192], label: "Com inquilino" },
    { id: '160', show: [34], label: "Condomínio fechado" },
    { id: '211', show: [192], label: "Condutas de Gás" },
    { id: '161', show: [91, 87, 34], label: "Cozinha Equipada" },
    { id: '162', show: [192, 91, 87, 34], label: "Elevador" },
    { id: '163', show: [87, 34], label: "Estores Eléctricos" },
    { id: '213', show: [192], label: "Fibra óptica" },
    { id: '212', show: [192], label: "Fossa séptica" },
    { id: '195', show: [194], label: "Iluminação Pública" },
    { id: '164', show: [34], label: "Jardim" },
    { id: '198', show: [194], label: "Ligação de água" },
    { id: '197', show: [194], label: "Ligação de esgoto" },
    { id: '165', show: [34], label: "Parqueamento (1 carro)" },
    { id: '166', show: [34], label: "Parqueamento (2 carros)" },
    { id: '167', show: [34], label: "Piscina" },
    { id: '168', show: [34], label: "Suite" },
    { id: '169', show: [192, 91, 87, 34], label: "Terraço" },
    { id: '170', show: [87, 34], label: "Varanda" },
    { id: '171', show: [192, 91, 87, 34], label: "Video Porteiro" },
    { id: '210', show: [192], label: "Vigilância 24h" },
    { id: '179', show: [194], label: "Vista de campo" },
    { id: '176', show: [194, 192, 34], label: "Vista de cidade" },
    { id: '172', show: [194, 192, 34], label: "Vista de mar" },
    { id: '173', show: [194, 192, 34], label: "Vista de rio" },
    { id: '177', show: [91, 87], label: "WC" },
]


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}))

export default function CheckboxesGroup(props) {
    const classes = useStyles()
    const { propType = 34, updateFeatures, loading, features = { num: 0 } } = props

    const handleChange = (e) => {
        const { checked, name } = e.target
        const { num } = features
        updateFeatures({
            features: {
                ...features, num: checked ? num + 1 : num - 1, [name]: checked
            }
        })
    }

    const error = features.num < 3

    return (
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset">
                <FormLabel component="legend">Escolhe pelo menos 3 opções</FormLabel>
                <FormGroup row>
                    {allFeatures.map(f => {
                        if (f.show.includes(propType))
                            return <FormControlLabel key={f.label}
                                control={<Checkbox color="primary" checked={features[f.id]} onChange={handleChange} name={f.id} disabled={loading} />}
                                label={<span>{f.label}{/* <AcUnitIcon /> */}</span>}
                            />
                    }
                    )}
                </FormGroup>
                {error && <FormHelperText>*A performance do anúncio será penalizada</FormHelperText>}
            </FormControl>
        </div>
    );
}
