import React, { useState, useEffect } from "react"
import { Grid, Button } from "@material-ui/core"
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Tooltip from '@material-ui/core/Tooltip'
import Divider from '@material-ui/core/Divider'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import CheckboxesGroup from "../../components/Features"
import CustomizedSelects from "../../components/Select"



export default function Step1(props) {

    const { loading, data, changeData, updateDataFields, changeStep } = props
    const { constructionYear, conservation, energyClass, nAndares, nElevador, type, slope, lote = 0, areaUtil = 0, areaBrutaP = 0, areaBrutaD = 0, features } = data
    const [err, setErr] = useState('')

    const propType = type === 'Escritório' ? 87 : type === 'Loja' ? 91 : type === 'Terreno' ? 194 : type === 'Prédio' ? 192 : 34

    const updateData = (params) => {
        updateDataFields({
            ...params
        })
    }

    const updateInputData = (e) => {
        e.preventDefault()
        updateData({ [e.target.name]: e.target.value })
    }

    useEffect(() => { /* Clean Error if there is a change in title */
        setErr('')
    }, [constructionYear, conservation, energyClass, type, slope, lote, areaUtil, areaBrutaP, areaBrutaD, features]
    )

    const validate = (e) => {
        e.preventDefault()
        /*
            console.log(
                    e.target.constructionYear.value,
                    e.target.conservation.value,
                    e.target.energyClass.value,
                    e.target.slope.value,
                    e.target.areaUtil.value,
                    e.target.areaBrutaP.value,
                    e.target.areaBrutaD.value,
        
                    data.features,
            ) 
        */

        let params = {}

        if (propType === 194) { /* Terreno */
            const declive = e.target.slope.value
            const areaLote = e.target.lote.value

            console.log(declive, areaLote)

            if (!declive)
                return setErr('Declive obrigatório.')
            if (!areaLote || areaLote == 0)
                return setErr('Área do lote obrigatória.')

            params = {
                ...params,
                slope: declive,
                lote: areaLote
            }
        }

        if (propType !== 194) { /* Se não for Terreno */
            const constructionYear = e.target.constructionYear.value
            const conservation = e.target.conservation.value
            const energyClass = e.target.energyClass.value
            const areaUtil = e.target.areaUtil.value
            const areaBrutaP = e.target.areaBrutaP.value
            const areaBrutaD = e.target.areaBrutaD.value

            if (type === 'Moradia') {
                const arealote = e.target.lote.value
                if (!arealote || arealote == 0)
                    return setErr('Área do lote obrigatória.')
                params = {
                    ...params,
                    lote: arealote
                }
            }

            if (!constructionYear)
                return setErr('Ano de construção obrigatório.')
            if (!conservation)
                return setErr('Estado de conservação é obrigatório.')
            if (!energyClass)
                return setErr('Classe energética obrigatória.')
            if (!areaUtil || areaUtil == 0)
                return setErr('Área útil obrigatória.')
            if (!areaBrutaP || areaBrutaP == 0)
                return setErr('Área bruta privativa obrigatória.')

            params = {
                ...params,
                constructionYear,
                conservation,
                energyClass,
                areaUtil,
                areaBrutaP,
                areaBrutaD
            }
        }

        /* Only if validation occurs, we send to Parent Component to update */
        changeData({
            ...params
        })

    }

    /* 

    NAO ESQUECER DO TAMANHO DO LOTE
    NAO ESQUECER DAS NOTAS PARA A DIANA

    NAO ESQUECER DO LINK DO VIDEO ????

    PERGUNTAR SOBRE ESTES DOIS:
        NAO ESQUECER DO NÚMERO DE ANDARES
        NAO ESQUECER DO NÚMERO DO ELEVADOR

    NAO ESQUECER DA IMAGEM DESTACADA, SERÁ QUE É AUTOMATICO ???


    TYPES:
        - APARTMENT
        - MORADIA
        - BUILDING
        - OFFICE
        - STORE
        - TERRAIN


    APARTMENT HAS EVERYTHING OF MORADIA (For Idealista is the same)


    Acesso Pavimentado -    TERRAIN
    Alarme -                BUILDING
    Aquecimento Central -   MORADIA OFFICE STORE
    Ar Condicionado -       BUILDING MORADIA OFFICE STORE
    Arrecadação             MORADIA OFFICE STORE
    Box (1 carro)           MORADIA
    Box (2 carros)          MORADIA
    Com inquilino           BUILDING
    Condomínio fechado      MORADIA
    Condutas de Gás -       BUILDING
    Cozinha Equipada        MORADIA OFFICE STORE
    Elevador -              BUILDING MORADIA OFFICE STORE
    Estores Eléctricos      MORADIA OFFICE
    Fibra óptica -          BUILDING
    Fossa séptica -         BUILDING
    Iluminação Pública -    TERRAIN
    Jardim                  MORADIA
    Ligação de água -       TERRAIN
    Ligação de esgoto -     TERRAIN
    Parqueamento (1 carro)  MORADIA
    Parqueamento (2 carros) MORADIA
    Piscina                 MORADIA
    Suite                   MORADIA
    Terraço -               BUILDING MORADIA OFFICE STORE
    Varanda                 MORADIA OFFICE
    Video Porteiro -        BUILDING MORADIA OFFICE STORE
    Vigilância 24h -        BUILDING
    Vista de campo -        TERRAIN
    Vista de cidade -       TERRAIN BUILDING MORADIA
    Vista de mar -          TERRAIN BUILDING MORADIA
    Vista de rio -          TERRAIN BUILDING MORADIA
    WC                      OFFICE STORE




        Terrain Only Additional Fields:

            - Declive

        Terrain does not have:

            - energyClass
            - Quartos
            - BuiltYear
            - Conservation
            - grossArea
            - areea util
            - floorNumber
            - número de casas de banho
    
    */

    return (
        <form onSubmit={validate}>
            <Typography variant="h4" component="h4">
                Detalhes
            </Typography>
            <Divider className="divider" orientation="horizontal" />
            <Grid container spacing={3}>
                {propType !== 194 &&
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="body1" component="p">
                            Ano de construção*
                    </Typography>
                        <InputBase
                            onChange={updateInputData}
                            defaultValue={constructionYear}
                            name="constructionYear"
                            type="number"
                            variant="outlined"
                            inputProps={{
                                min: 1800,
                                step: 1
                            }}
                            disabled={loading}
                        />
                    </Grid>
                }
                {propType !== 194 &&
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="body1" component="p">
                            Estado Conservação*
                    </Typography>
                        <CustomizedSelects loading={loading} updateData={updateData} name='conservation' val={conservation} options={[
                            { val: 'Bom', label: 'Bom' },
                            { val: 'Novo', label: 'Novo' },
                            { val: 'Necessita restauração', label: 'Necessita restauração' }
                        ]} />
                    </Grid>
                }
                {propType !== 194 &&
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="body1" component="p">
                            Classe Energética*
                    </Typography>
                        <CustomizedSelects loading={loading} updateData={updateData} name='energyClass' val={energyClass} options={[
                            { val: 'Em trâmite', label: 'Em trâmite' },
                            { val: 'A+', label: 'A+' },
                            { val: 'A', label: 'A' },
                            { val: 'B', label: 'B' },
                            { val: 'C', label: 'C' },
                            { val: 'D', label: 'D' },
                            { val: 'E', label: 'E' },
                            { val: 'F', label: 'F' },
                            { val: 'G', label: 'G' }
                        ]} />
                    </Grid>
                }
                {propType === 194 &&
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" component="p">
                            Declive*
                        </Typography>
                        <CustomizedSelects loading={loading} updateData={updateData} name='slope' val={slope} options={[
                            { val: 'Elevado (> 30°)', label: 'Elevado (> 30°)' },
                            { val: 'Moderado (20° a 30°)', label: 'Moderado (20° a 30°)' },
                            { val: 'Plano', label: 'Plano' },
                            { val: 'Baixo (10° a 20°)', label: 'Baixo (10° a 20°)' },
                        ]} />
                    </Grid>
                }

                {propType === 192 && /* Prédio */
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="body1" component="p">
                            Número de elevador
                        </Typography>
                        <InputBase
                            onChange={updateInputData}
                            defaultValue={nElevador}
                            name="nElevador"
                            type="number"
                            variant="outlined"
                            inputProps={{
                                min: 1,
                                step: 1
                            }}
                            disabled={loading}
                        />
                    </Grid>
                }
                {propType === 192 && /* Prédio */
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="body1" component="p">
                            Número de andares
                        </Typography>
                        <InputBase
                            onChange={updateInputData}
                            defaultValue={nAndares}
                            name="nAndares"
                            type="number"
                            variant="outlined"
                            inputProps={{
                                min: 1,
                                step: 1
                            }}
                            disabled={loading}
                        />
                    </Grid>
                }
                {/* <Grid item xs={4}>
                    <Typography variant="body1" component="p">
                        URL do video Virtual Tour
                    </Typography>
                    <InputBase
                        onChange={updateInputData}
                        defaultValue={se}
                        name="se"
                        type="text"
                        variant="outlined"
                        disabled={loading}
                    />
                </Grid> */}
            </Grid>
            <Typography variant="h4" component="h4">
                Áreas
            </Typography>
            <Divider className="divider" orientation="horizontal" />
            <Grid container spacing={3}>
                {propType !== 194 &&
                    <Grid item xs={12} sm={4}>
                        <Tooltip placement="top-start" title={<h3>A soma das áreas interiores do imóvel e de todos os compartimentos excluindo as paredes interiores e exteriores</h3>}>
                            <Typography variant="body1" component="p">
                                Útil <HelpOutlineIcon color="primary" fontSize="small" />
                            </Typography>
                        </Tooltip>
                        <InputBase
                            onChange={updateInputData}
                            style={{ display: 'inline-flex' }}
                            defaultValue={areaUtil}
                            name="areaUtil"
                            type="number"
                            inputProps={{
                                min: 0,
                                step: 0.1
                            }}
                            variant="outlined"
                            disabled={loading}
                            endAdornment={<span>(m²)</span>}
                        />
                    </Grid>
                }
                {propType !== 194 &&
                    <Grid item xs={12} sm={4}>
                        <Tooltip placement="top-start" title={<h3>Superfície total do imóvel, incluindo a espessura das paredes interiores e paredes exteriores</h3>}>
                            <Typography variant="body1" component="p">
                                Bruta privativa* <HelpOutlineIcon color="primary" fontSize="small" />
                            </Typography>
                        </Tooltip>
                        <InputBase
                            onChange={updateInputData}
                            defaultValue={areaBrutaP}
                            name="areaBrutaP"
                            type="number"
                            inputProps={{
                                min: 0,
                                step: 0.1
                            }}
                            variant="outlined"
                            disabled={loading}
                            endAdornment={<span>(m²) </span>}
                        />
                    </Grid>
                }
                {propType !== 194 &&
                    <Grid item xs={12} sm={4}>
                        <Tooltip placement="top-start" title={<h3>Áreas cobertas e fechadas de uso exclusivo, nomeadamente, varandas e terraços</h3>}>
                            <Typography variant="body1" component="p">
                                Bruta dependente <HelpOutlineIcon color="primary" fontSize="small" />
                            </Typography>
                        </Tooltip>
                        <InputBase
                            onChange={updateInputData}
                            defaultValue={areaBrutaD}
                            name="areaBrutaD"
                            type="number"
                            inputProps={{
                                min: 0,
                                step: 0.1
                            }}
                            variant="outlined"
                            disabled={loading}
                            endAdornment={<span>(m²)</span>}
                        />
                    </Grid>
                }
                {(propType === 194 || type === 'Moradia') && /* Terreno ou Moradia */
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" component="p">
                            Lote*
                        </Typography>
                        <InputBase
                            onChange={updateInputData}
                            defaultValue={lote}
                            name="lote"
                            type="number"
                            inputProps={{
                                min: 0,
                                step: 0.1
                            }}
                            variant="outlined"
                            disabled={loading}
                            endAdornment={<span>(m²)</span>}
                        />
                    </Grid>
                }
            </Grid>
            <Typography variant="h4" component="h4">
                Características
            </Typography>
            <Divider className="divider" orientation="horizontal" />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CheckboxesGroup updateFeatures={updateData} features={features} propType={propType} loading={loading} />
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="space-between">
                <Grid item xs={12}>
                    <Typography variant="caption" component="p">
                        {err}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={() => changeStep(0)}>
                        Recuar
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" type="submit">
                        Seguinte
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}