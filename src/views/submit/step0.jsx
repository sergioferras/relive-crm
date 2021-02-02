import React, { useState, useEffect } from "react"
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import { Grid, Button } from "@material-ui/core"
import InputLength from '../../components/InputLength'
import CustomizedSelects from "../../components/Select"



const districts = [
    {
        val: 493,
        label: "A\u00e7ores",
        "slug": "acores",
    },
    {
        val: 106,
        label: "Aveiro",
        "slug": "aveiro",
    }, {
        val: 107,
        label: "Beja",
        "slug": "beja",
    }, {
        val: 108,
        label: "Braga",
        "slug": "braga",
    }, {
        val: 109,
        label: "Bragan\u00e7a",
        "slug": "braganca",
    }, {
        val: 110,
        label: "Castelo Branco",
        "slug": "castelo-branco",
    }, {
        val: 111,
        label: "Coimbra",
        "slug": "coimbra",
    }, {
        val: 112,
        label: "\u00c9vora",
        "slug": "evora",
    }, {
        val: 113,
        label: "Faro",
        "slug": "faro",
    }, {
        val: 114,
        label: "Guarda",
        "slug": "guarda",
    }, {
        val: 115,
        label: "Leiria",
        "slug": "leiria",
    }, {
        val: 33,
        "count": 45,
        "description": "",
        label: "Lisboa",
        "slug": "lisboa",
    }, {
        val: 513,
        label: "Madeira",
        "slug": "madeira",
    }, {
        val: 116,
        label: "Portalegre",
        "slug": "portalegre",
    }, {
        val: 105,
        label: "Porto",
        "slug": "porto",
    }, {
        val: 117,
        label: "Santar\u00e9m",
        "slug": "santarem",
    }, {
        val: 118,
        "count": 2,
        label: "Set\u00fabal",
        "slug": "setubal",
    }, {
        val: 119,
        label: "Viana do Castelo",
        "slug": "viana-do-castelo",
    }, {
        val: 120,
        label: "Vila Real",
        "slug": "vila-real",
    }, {
        val: 121,
        label: "Viseu",
        "slug": "viseu",
    }
]

const counties = [
    {
        val: 424,
        label: "Abrantes",
        "slug": "abrantes",
        parent: 117
    }, {
        val: 261,
        label: "\u00c1gueda",
        "slug": "agueda",
        parent: 106
    }, {
        val: 379,
        label: "Aguiar da Beira",
        "slug": "aguiar-da-beira",
        parent: 114
    }, {
        val: 348,
        label: "Alandroal",
        "slug": "alandroal",
        parent: 112
    }, {
        val: 262,
        label: "Albergaria-a-Velha",
        "slug": "albergaria-a-velha",
        parent: 106
    }, {
        val: 363,
        label: "Albufeira",
        "slug": "albufeira",
        parent: 113
    }, {
        val: 232,
        label: "Alc\u00e1cer do Sal",
        "slug": "alcacer-do-sal",
        parent: 118
    }, {
        val: 425,
        label: "Alcanena",
        "slug": "alcanena",
        parent: 117
    }, {
        val: 393,
        label: "Alcoba\u00e7a",
        "slug": "alcobaca",
        parent: 115
    }, {
        val: 233,
        label: "Alcochete",
        "slug": "alcochete",
        parent: 118
    }, {
        val: 364,
        label: "Alcoutim",
        "slug": "alcoutim",
        parent: 113
    }, {
        val: 216,
        label: "Alenquer",
        "slug": "alenquer",
        parent: 33
    }, {
        val: 308,
        label: "Alf\u00e2ndega da F\u00e9",
        "slug": "alfandega-da-fe",
        parent: 109
    }, {
        val: 455,
        label: "Alij\u00f3",
        "slug": "alijo",
        parent: 120
    }, {
        val: 365,
        label: "Aljezur",
        "slug": "aljezur",
        parent: 113
    }, {
        val: 280,
        label: "Aljustrel",
        "slug": "aljustrel",
        parent: 107
    }, {
        val: 215,
        label: "Almada",
        "slug": "almada",
        parent: 118
    }, {
        val: 380,
        label: "Almeida",
        "slug": "almeida",
        parent: 114
    }, {
        val: 426,
        label: "Almeirim",
        "slug": "almeirim",
        parent: 117
    }, {
        val: 281,
        label: "Almod\u00f4var",
        "slug": "almodovar",
        parent: 107
    }, {
        val: 427,
        label: "Alpiar\u00e7a",
        "slug": "alpiarca",
        parent: 117
    }, {
        val: 409,
        label: "Alter do Ch\u00e3o",
        "slug": "alter-do-chao",
        parent: 116
    }, {
        val: 394,
        label: "Alvai\u00e1zere",
        "slug": "alvaiazere",
        parent: 115
    }, {
        val: 282,
        label: "Alvito",
        "slug": "alvito",
        parent: 107
    }, {
        val: 217,
        "count": 6,
        label: "Amadora",
        "slug": "amadora",
        parent: 33
    }, {
        val: 243,
        label: "Amarante",
        "slug": "amarante",
        parent: 105
    }, {
        val: 294,
        label: "Amares",
        "slug": "amares",
        parent: 108
    }, {
        val: 263,
        label: "Anadia",
        "slug": "anadia",
        parent: 106
    }, {
        val: 494,
        label: "Angra do Hero\u00edsmo",
        "slug": "angra-do-heroismo",
        parent: 493
    }, {
        val: 395,
        label: "Ansi\u00e3o",
        "slug": "ansiao",
        parent: 115
    }, {
        val: 445,
        label: "Arcos de Valdevez",
        "slug": "arcos-de-valdevez",
        parent: 119
    }, {
        val: 331,
        label: "Arganil",
        "slug": "arganil",
        parent: 111
    }, {
        val: 469,
        label: "Armamar",
        "slug": "armamar",
        parent: 121
    }, {
        val: 264,
        label: "Arouca",
        "slug": "arouca",
        parent: 106
    }, {
        val: 349,
        label: "Arraiolos",
        "slug": "arraiolos",
        parent: 112
    }, {
        val: 410,
        label: "Arronches",
        "slug": "arronches",
        parent: 116
    }, {
        val: 218,
        label: "Arruda dos Vinhos",
        "slug": "arruda-dos-vinhos",
        parent: 33
    }, {
        val: 265,
        label: "Aveiro",
        "slug": "aveiro-aveiro",
        parent: 106
    }, {
        val: 411,
        label: "Avis",
        "slug": "avis",
        parent: 116
    }, {
        val: 219,
        label: "Azambuja",
        "slug": "azambuja",
        parent: 33
    }, {
        val: 244,
        label: "Bai\u00e3o",
        "slug": "baiao",
        parent: 105
    }, {
        val: 295,
        label: "Barcelos",
        "slug": "barcelos",
        parent: 108
    }, {
        val: 283,
        label: "Barrancos",
        "slug": "barrancos",
        parent: 107
    }, {
        val: 234,
        label: "Barreiro",
        "slug": "barreiro",
        parent: 118
    }, {
        val: 396,
        label: "Batalha",
        "slug": "batalha",
        parent: 115
    }, {
        val: 284,
        label: "Beja",
        "slug": "beja-beja",
        parent: 107
    }, {
        val: 320,
        label: "Belmonte",
        "slug": "belmonte",
        parent: 110
    }, {
        val: 428,
        label: "Benavente",
        "slug": "benavente",
        parent: 117
    }, {
        val: 397,
        label: "Bombarral",
        "slug": "bombarral",
        parent: 115
    }, {
        val: 350,
        label: "Borba",
        "slug": "borba",
        parent: 112
    }, {
        val: 456,
        label: "Boticas",
        "slug": "boticas",
        parent: 120
    }, {
        val: 296,
        label: "Braga",
        "slug": "braga-braga",
        parent: 108
    }, {
        val: 309,
        label: "Bragan\u00e7a",
        "slug": "braganca-braganca",
        parent: 109
    }, {
        val: 297,
        label: "Cabeceiras de Basto",
        "slug": "cabeceiras-de-basto",
        parent: 108
    }, {
        val: 220,
        label: "Cadaval",
        "slug": "cadaval",
        parent: 33
    }, {
        val: 398,
        label: "Caldas da Rainha",
        "slug": "caldas-da-rainha",
        parent: 115
    }, {
        val: 495,
        label: "Calheta",
        "slug": "calheta",
        parent: 493
    }, {
        val: 514,
        label: "Calheta",
        "slug": "calheta-madeira",
        parent: 513
    }, {
        val: 515,
        label: "C\u00e2mara de Lobos",
        "slug": "camara-de-lobos",
        parent: 513
    }, {
        val: 446,
        label: "Caminha",
        "slug": "caminha",
        parent: 119
    }, {
        val: 412,
        label: "Campo Maior",
        "slug": "campo-maior",
        parent: 116
    }, {
        val: 332,
        label: "Cantanhede",
        "slug": "cantanhede",
        parent: 111
    }, {
        val: 310,
        label: "Carrazeda de Ansi\u00e3es",
        "slug": "carrazeda-de-ansiaes",
        parent: 109
    }, {
        val: 470,
        label: "Carregal do Sal",
        "slug": "carregal-do-sal",
        parent: 121
    }, {
        val: 429,
        label: "Cartaxo",
        "slug": "cartaxo",
        parent: 117
    }, {
        val: 221,
        "count": 2,
        label: "Cascais",
        "slug": "cascais",
        parent: 33
    }, {
        val: 399,
        label: "Castanheira de Pera",
        "slug": "castanheira-de-pera",
        parent: 115
    }, {
        val: 321,
        label: "Castelo Branco",
        "slug": "castelo-branco-castelo-branco",
        parent: 110
    }, {
        val: 266,
        label: "Castelo de Paiva",
        "slug": "castelo-de-paiva",
        parent: 106
    }, {
        val: 413,
        label: "Castelo de Vide",
        "slug": "castelo-de-vide",
        parent: 116
    }, {
        val: 471,
        label: "Castro Daire",
        "slug": "castro-daire",
        parent: 121
    }, {
        val: 366,
        label: "Castro Marim",
        "slug": "castro-marim",
        parent: 113
    }, {
        val: 285,
        label: "Castro Verde",
        "slug": "castro-verde",
        parent: 107
    }, {
        val: 381,
        label: "Celorico da Beira",
        "slug": "celorico-da-beira",
        parent: 114
    }, {
        val: 298,
        label: "Celorico de Basto",
        "slug": "celorico-de-basto",
        parent: 108
    }, {
        val: 430,
        label: "Chamusca",
        "slug": "chamusca",
        parent: 117
    }, {
        val: 457,
        label: "Chaves",
        "slug": "chaves",
        parent: 120
    }, {
        val: 472,
        label: "Cinf\u00e3es",
        "slug": "cinfaes",
        parent: 121
    }, {
        val: 333,
        label: "Coimbra",
        "slug": "coimbra-coimbra",
        parent: 111
    }, {
        val: 334,
        label: "Condeixa-a-Nova",
        "slug": "condeixa-a-nova",
        parent: 111
    }, {
        val: 431,
        label: "Const\u00e2ncia",
        "slug": "constancia",
        parent: 117
    }, {
        val: 432,
        label: "Coruche",
        "slug": "coruche",
        parent: 117
    }, {
        val: 496,
        label: "Corvo",
        "slug": "corvo",
        parent: 493
    }, {
        val: 322,
        label: "Covilh\u00e3",
        "slug": "covilha",
        parent: 110
    }, {
        val: 414,
        label: "Crato",
        "slug": "crato",
        parent: 116
    }, {
        val: 286,
        label: "Cuba",
        "slug": "cuba",
        parent: 107
    }, {
        val: 415,
        label: "Elvas",
        "slug": "elvas",
        parent: 116
    }, {
        val: 433,
        label: "Entroncamento",
        "slug": "entroncamento",
        parent: 117
    }, {
        val: 267,
        label: "Espinho",
        "slug": "espinho",
        parent: 106
    }, {
        val: 299,
        label: "Esposende",
        "slug": "esposende",
        parent: 108
    }, {
        val: 268,
        label: "Estarreja",
        "slug": "estarreja",
        parent: 106
    }, {
        val: 351,
        label: "Estremoz",
        "slug": "estremoz",
        parent: 112
    }, {
        val: 352,
        label: "\u00c9vora",
        "slug": "evora-evora",
        parent: 112
    }, {
        val: 300,
        label: "Fafe",
        "slug": "fafe",
        parent: 108
    }, {
        val: 367,
        label: "Faro",
        "slug": "faro-faro",
        parent: 113
    }, {
        val: 245,
        label: "Felgueiras",
        "slug": "felgueiras",
        parent: 105
    }, {
        val: 287,
        label: "Ferreira do Alentejo",
        "slug": "ferreira-do-alentejo",
        parent: 107
    }, {
        val: 434,
        label: "Ferreira do Z\u00eazere",
        "slug": "ferreira-do-zezere",
        parent: 117
    }, {
        val: 335,
        label: "Figueira da Foz",
        "slug": "figueira-da-foz",
        parent: 111
    }, {
        val: 382,
        label: "Figueira de Castelo Rodrigo",
        "slug": "figueira-de-castelo-rodrigo",
        parent: 114
    }, {
        val: 400,
        label: "Figueir\u00f3 dos Vinhos",
        "slug": "figueiro-dos-vinhos",
        parent: 115
    }, {
        val: 383,
        label: "Fornos de Algodres",
        "slug": "fornos-de-algodres",
        parent: 114
    }, {
        val: 311,
        label: "Freixo de Espada \u00e0 Cinta",
        "slug": "freixo-de-espada-a-cinta",
        parent: 109
    }, {
        val: 416,
        label: "Fronteira",
        "slug": "fronteira",
        parent: 116
    }, {
        val: 516,
        label: "Funchal",
        "slug": "funchal",
        parent: 513
    }, {
        val: 323,
        label: "Fund\u00e3o",
        "slug": "fundao",
        parent: 110
    }, {
        val: 417,
        label: "Gavi\u00e3o",
        "slug": "gaviao",
        parent: 116
    }, {
        val: 336,
        label: "G\u00f3is",
        "slug": "gois",
        parent: 111
    }, {
        val: 435,
        label: "Goleg\u00e3",
        "slug": "golega",
        parent: 117
    }, {
        val: 246,
        label: "Gondomar",
        "slug": "gondomar",
        parent: 105
    }, {
        val: 384,
        label: "Gouveia",
        "slug": "gouveia",
        parent: 114
    }, {
        val: 385,
        label: "Guarda",
        "slug": "guarda-guarda",
        parent: 114
    }, {
        val: 301,
        label: "Guimar\u00e3es",
        "slug": "guimaraes",
        parent: 108
    }, {
        val: 497,
        label: "Horta",
        "slug": "horta",
        parent: 493
    }, {
        val: 324,
        label: "Idanha-a-Nova",
        "slug": "idanha-a-nova",
        parent: 110
    }, {
        val: 269,
        label: "\u00cdlhavo",
        "slug": "ilhavo",
        parent: 106
    }, {
        val: 368,
        label: "Lagoa",
        "slug": "lagoa",
        parent: 113
    }, {
        val: 498,
        label: "Lagoa",
        "slug": "lagoa-acores",
        parent: 493
    }, {
        val: 369,
        label: "Lagos",
        "slug": "lagos",
        parent: 113
    }, {
        val: 499,
        label: "Lajes das Flores",
        "slug": "lajes-das-flores",
        parent: 493
    }, {
        val: 500,
        label: "Lajes do Pico",
        "slug": "lajes-do-pico",
        parent: 493
    }, {
        val: 473,
        label: "Lamego",
        "slug": "lamego",
        parent: 121
    }, {
        val: 401,
        label: "Leiria",
        "slug": "leiria-leiria",
        parent: 115
    }, {
        val: 222,
        label: "Lisboa",
        "slug": "lisboa-lisboa",
        parent: 33
    }, {
        val: 370,
        label: "Loul\u00e9",
        "slug": "loule",
        parent: 113
    }, {
        val: 223,
        label: "Loures",
        "slug": "loures",
        parent: 33
    }, {
        val: 224,
        label: "Lourinh\u00e3",
        "slug": "lourinha",
        parent: 33
    }, {
        val: 337,
        label: "Lous\u00e3",
        "slug": "lousa",
        parent: 111
    }, {
        val: 247,
        label: "Lousada",
        "slug": "lousada",
        parent: 105
    }, {
        val: 436,
        label: "Ma\u00e7\u00e3o",
        "slug": "macao",
        parent: 117
    }, {
        val: 312,
        label: "Macedo de Cavaleiros",
        "slug": "macedo-de-cavaleiros",
        parent: 109
    }, {
        val: 517,
        label: "Machico",
        "slug": "machico",
        parent: 513
    }, {
        val: 501,
        label: "Madalena",
        "slug": "madalena",
        parent: 493
    }, {
        val: 225,
        label: "Mafra",
        "slug": "mafra",
        parent: 33
    }, {
        val: 248,
        label: "Maia",
        "slug": "maia",
        parent: 105
    }, {
        val: 474,
        label: "Mangualde",
        "slug": "mangualde",
        parent: 121
    }, {
        val: 386,
        label: "Manteigas",
        "slug": "manteigas",
        parent: 114
    }, {
        val: 249,
        label: "Marco de Canaveses",
        "slug": "marco-de-canaveses",
        parent: 105
    }, {
        val: 402,
        label: "Marinha Grande",
        "slug": "marinha-grande",
        parent: 115
    }, {
        val: 418,
        label: "Marv\u00e3o",
        "slug": "marvao",
        parent: 116
    }, {
        val: 250,
        label: "Matosinhos",
        "slug": "matosinhos",
        parent: 105
    }, {
        val: 270,
        label: "Mealhada",
        "slug": "mealhada",
        parent: 106
    }, {
        val: 387,
        label: "M\u00eada",
        "slug": "meda",
        parent: 114
    }, {
        val: 447,
        label: "Melga\u00e7o",
        "slug": "melgaco",
        parent: 119
    }, {
        val: 288,
        label: "M\u00e9rtola",
        "slug": "mertola",
        parent: 107
    }, {
        val: 458,
        label: "Mes\u00e3o Frio",
        "slug": "mesao-frio",
        parent: 120
    }, {
        val: 338,
        label: "Mira",
        "slug": "mira",
        parent: 111
    }, {
        val: 339,
        label: "Miranda do Corvo",
        "slug": "miranda-do-corvo",
        parent: 111
    }, {
        val: 313,
        label: "Miranda do Douro",
        "slug": "miranda-do-douro",
        parent: 109
    }, {
        val: 314,
        label: "Mirandela",
        "slug": "mirandela",
        parent: 109
    }, {
        val: 315,
        label: "Mogadouro",
        "slug": "mogadouro",
        parent: 109
    }, {
        val: 475,
        label: "Moimenta da Beira",
        "slug": "moimenta-da-beira",
        parent: 121
    }, {
        val: 235,
        label: "Moita",
        "slug": "moita",
        parent: 118
    }, {
        val: 448,
        label: "Mon\u00e7\u00e3o",
        "slug": "moncao",
        parent: 119
    }, {
        val: 371,
        label: "Monchique",
        "slug": "monchique",
        parent: 113
    }, {
        val: 459,
        label: "Mondim de Basto",
        "slug": "mondim-de-basto",
        parent: 120
    }, {
        val: 419,
        label: "Monforte",
        "slug": "monforte",
        parent: 116
    }, {
        val: 460,
        label: "Montalegre",
        "slug": "montalegre",
        parent: 120
    }, {
        val: 353,
        label: "Montemor-o-Novo",
        "slug": "montemor-o-novo",
        parent: 112
    }, {
        val: 340,
        label: "Montemor-o-Velho",
        "slug": "montemor-o-velho",
        parent: 111
    }, {
        val: 236,
        "count": 1,
        "description": "",
        label: "Montijo",
        "slug": "montijo",
        parent: 118
    }, {
        val: 354,
        label: "Mora",
        "slug": "mora",
        parent: 112
    }, {
        val: 476,
        label: "Mort\u00e1gua",
        "slug": "mortagua",
        parent: 121
    }, {
        val: 289,
        label: "Moura",
        "slug": "moura",
        parent: 107
    }, {
        val: 355,
        label: "Mour\u00e3o",
        "slug": "mourao",
        parent: 112
    }, {
        val: 461,
        label: "Mur\u00e7a",
        "slug": "murca",
        parent: 120
    }, {
        val: 271,
        label: "Murtosa",
        "slug": "murtosa",
        parent: 106
    }, {
        val: 403,
        label: "Nazar\u00e9",
        "slug": "nazare",
        parent: 115
    }, {
        val: 477,
        label: "Nelas",
        "slug": "nelas",
        parent: 121
    }, {
        val: 420,
        label: "Nisa",
        "slug": "nisa",
        parent: 116
    }, {
        val: 502,
        label: "Nordeste",
        "slug": "nordeste",
        parent: 493
    }, {
        val: 404,
        label: "\u00d3bidos",
        "slug": "obidos",
        parent: 115
    }, {
        val: 290,
        label: "Odemira",
        "slug": "odemira",
        parent: 107
    }, {
        val: 226,
        label: "Odivelas",
        "slug": "odivelas",
        parent: 33
    }, {
        val: 227,
        "count": 1,
        "description": "",
        label: "Oeiras",
        "slug": "oeiras",
        parent: 33
    }, {
        val: 325,
        label: "Oleiros",
        "slug": "oleiros",
        parent: 110
    }, {
        val: 372,
        label: "Olh\u00e3o",
        "slug": "olhao",
        parent: 113
    }, {
        val: 272,
        label: "Oliveira de Azem\u00e9is",
        "slug": "oliveira-de-azemeis",
        parent: 106
    }, {
        val: 478,
        label: "Oliveira de Frades",
        "slug": "oliveira-de-frades",
        parent: 121
    }, {
        val: 273,
        label: "Oliveira do Bairro",
        "slug": "oliveira-do-bairro",
        parent: 106
    }, {
        val: 341,
        label: "Oliveira do Hospital",
        "slug": "oliveira-do-hospital",
        parent: 111
    }, {
        val: 356,
        label: "Oliven\u00e7a",
        "slug": "olivenca",
        parent: 112
    }, {
        val: 437,
        label: "Our\u00e9m",
        "slug": "ourem",
        parent: 117
    }, {
        val: 291,
        label: "Ourique",
        "slug": "ourique",
        parent: 107
    }, {
        val: 274,
        label: "Ovar",
        "slug": "ovar",
        parent: 106
    }, {
        val: 251,
        label: "Pa\u00e7os de Ferreira",
        "slug": "pacos-de-ferreira",
        parent: 105
    }, {
        val: 237,
        label: "Palmela",
        "slug": "palmela",
        parent: 118
    }, {
        val: 342,
        label: "Pampilhosa da Serra",
        "slug": "pampilhosa-da-serra",
        parent: 111
    }, {
        val: 252,
        label: "Paredes",
        "slug": "paredes",
        parent: 105
    }, {
        val: 449,
        label: "Paredes de Coura",
        "slug": "paredes-de-coura",
        parent: 119
    }, {
        val: 405,
        label: "Pedr\u00f3g\u00e3o Grande",
        "slug": "pedrogao-grande",
        parent: 115
    }, {
        val: 343,
        label: "Penacova",
        "slug": "penacova",
        parent: 111
    }, {
        val: 253,
        label: "Penafiel",
        "slug": "penafiel",
        parent: 105
    }, {
        val: 479,
        label: "Penalva do Castelo",
        "slug": "penalva-do-castelo",
        parent: 121
    }, {
        val: 326,
        label: "Penamacor",
        "slug": "penamacor",
        parent: 110
    }, {
        val: 480,
        label: "Penedono",
        "slug": "penedono",
        parent: 121
    }, {
        val: 344,
        label: "Penela",
        "slug": "penela",
        parent: 111
    }, {
        val: 406,
        label: "Peniche",
        "slug": "peniche",
        parent: 115
    }, {
        val: 462,
        label: "Peso da R\u00e9gua",
        "slug": "peso-da-regua",
        parent: 120
    }, {
        val: 388,
        label: "Pinhel",
        "slug": "pinhel",
        parent: 114
    }, {
        val: 407,
        label: "Pombal",
        "slug": "pombal",
        parent: 115
    }, {
        val: 503,
        label: "Ponta Delgada",
        "slug": "ponta-delgada",
        parent: 493
    }, {
        val: 518,
        label: "Ponta do Sol",
        "slug": "ponta-do-sol",
        parent: 513
    }, {
        val: 450,
        label: "Ponte da Barca",
        "slug": "ponte-da-barca",
        parent: 119
    }, {
        val: 451,
        label: "Ponte de Lima",
        "slug": "ponte-de-lima",
        parent: 119
    }, {
        val: 421,
        label: "Ponte de Sor",
        "slug": "ponte-de-sor",
        parent: 116
    }, {
        val: 422,
        label: "Portalegre",
        "slug": "portalegre-portalegre",
        parent: 116
    }, {
        val: 357,
        label: "Portel",
        "slug": "portel",
        parent: 112
    }, {
        val: 373,
        label: "Portim\u00e3o",
        "slug": "portimao",
        parent: 113
    }, {
        label: "Porto",
        val: 254,
        "slug": "porto-porto",
        parent: 105
    }, {
        val: 408,
        label: "Porto de M\u00f3s",
        "slug": "porto-de-mos",
        parent: 115
    }, {
        val: 519,
        label: "Porto Moniz",
        "slug": "porto-moniz",
        parent: 513
    }, {
        val: 520,
        label: "Porto Santo",
        "slug": "porto-santo",
        parent: 513
    }, {
        val: 302,
        label: "P\u00f3voa de Lanhoso",
        "slug": "povoa-de-lanhoso",
        parent: 108
    }, {
        val: 255,
        label: "P\u00f3voa de Varzim",
        "slug": "povoa-de-varzim",
        parent: 105
    }, {
        val: 504,
        label: "Povoa\u00e7\u00e3o",
        "slug": "povoacao",
        parent: 493
    }, {
        val: 505,
        label: "Praia da Vit\u00f3ria",
        "slug": "praia-da-vitoria",
        parent: 493
    }, {
        val: 327,
        label: "Proen\u00e7a-a-Nova",
        "slug": "proenca-a-nova",
        parent: 110
    }, {
        val: 358,
        label: "Redondo",
        "slug": "redondo",
        parent: 112
    }, {
        val: 359,
        label: "Reguengos de Monsaraz",
        "slug": "reguengos-de-monsaraz",
        parent: 112
    }, {
        val: 481,
        label: "Resende",
        "slug": "resende",
        parent: 121
    }, {
        val: 521,
        label: "Ribeira Brava",
        "slug": "ribeira-brava",
        parent: 513
    }, {
        val: 463,
        label: "Ribeira de Pena",
        "slug": "ribeira-de-pena",
        parent: 120
    }, {
        val: 506,
        label: "Ribeira Grande",
        "slug": "ribeira-grande",
        parent: 493
    }, {
        val: 438,
        label: "Rio Maior",
        "slug": "rio-maior",
        parent: 117
    }, {
        val: 464,
        label: "Sabrosa",
        "slug": "sabrosa",
        parent: 120
    }, {
        val: 389,
        label: "Sabugal",
        "slug": "sabugal",
        parent: 114
    }, {
        val: 439,
        label: "Salvaterra de Magos",
        "slug": "salvaterra-de-magos",
        parent: 117
    }, {
        val: 482,
        label: "Santa Comba D\u00e3o",
        "slug": "santa-comba-dao",
        parent: 121
    }, {
        val: 522,
        label: "Santa Cruz",
        "slug": "santa-cruz",
        parent: 513
    }, {
        val: 507,
        label: "Santa Cruz da Graciosa",
        "slug": "santa-cruz-da-graciosa",
        parent: 493
    }, {
        val: 508,
        label: "Santa Cruz das Flores",
        "slug": "santa-cruz-das-flores",
        parent: 493
    }, {
        val: 275,
        label: "Santa Maria da Feira",
        "slug": "santa-maria-da-feira",
        parent: 106
    }, {
        val: 465,
        label: "Santa Marta de Penagui\u00e3o",
        "slug": "santa-marta-de-penaguiao",
        parent: 120
    }, {
        val: 523,
        label: "Santana",
        "slug": "santana",
        parent: 513
    }, {
        val: 440,
        label: "Santar\u00e9m",
        "slug": "santarem-santarem",
        parent: 117
    }, {
        val: 238,
        label: "Santiago do Cac\u00e9m",
        "slug": "santiago-do-cacem",
        parent: 118
    }, {
        val: 256,
        label: "Santo Tirso",
        "slug": "santo-tirso",
        parent: 105
    }, {
        val: 374,
        label: "S\u00e3o Br\u00e1s de Alportel",
        "slug": "sao-bras-de-alportel",
        parent: 113
    }, {
        val: 276,
        label: "S\u00e3o Jo\u00e3o da Madeira",
        "slug": "sao-joao-da-madeira",
        parent: 106
    }, {
        val: 483,
        label: "S\u00e3o Jo\u00e3o da Pesqueira",
        "slug": "sao-joao-da-pesqueira",
        parent: 121
    }, {
        val: 484,
        label: "S\u00e3o Pedro do Sul",
        "slug": "sao-pedro-do-sul",
        parent: 121
    }, {
        val: 509,
        label: "S\u00e3o Roque do Pico",
        "slug": "sao-roque-do-pico",
        parent: 493
    }, {
        val: 524,
        label: "S\u00e3o Vicente",
        "slug": "sao-vicente",
        parent: 513
    }, {
        val: 441,
        label: "Sardoal",
        "slug": "sardoal",
        parent: 117
    }, {
        val: 485,
        label: "S\u00e1t\u00e3o",
        "slug": "satao",
        parent: 121
    }, {
        val: 390,
        label: "Seia",
        "slug": "seia",
        parent: 114
    }, {
        val: 239,
        label: "Seixal",
        "slug": "seixal",
        parent: 118
    }, {
        val: 486,
        label: "Sernancelhe",
        "slug": "sernancelhe",
        parent: 121
    }, {
        val: 292,
        label: "Serpa",
        "slug": "serpa",
        parent: 107
    }, {
        val: 328,
        label: "Sert\u00e3",
        "slug": "serta",
        parent: 110
    }, {
        val: 240,
        label: "Sesimbra",
        "slug": "sesimbra",
        parent: 118
    }, {
        val: 241,
        label: "Set\u00fabal",
        "slug": "setubal-setubal",
        parent: 118
    }, {
        val: 277,
        label: "Sever do Vouga",
        "slug": "sever-do-vouga",
        parent: 106
    }, {
        val: 375,
        label: "Silves",
        "slug": "silves",
        parent: 113
    }, {
        val: 242,
        label: "Sines",
        "slug": "sines",
        parent: 118
    }, {
        val: 228,
        "count": 5,
        label: "Sintra",
        "slug": "sintra",
        parent: 33
    }, {
        val: 229,
        "count": 1,
        label: "Sobral de Monte Agra\u00e7o",
        "slug": "sobral-de-monte-agraco",
        parent: 33
    }, {
        val: 345,
        label: "Soure",
        "slug": "soure",
        parent: 111
    }, {
        val: 423,
        label: "Sousel",
        "slug": "sousel",
        parent: 116
    }, {
        val: 346,
        label: "T\u00e1bua",
        "slug": "tabua",
        parent: 111
    }, {
        val: 487,
        label: "Tabua\u00e7o",
        "slug": "tabuaco",
        parent: 121
    }, {
        val: 488,
        label: "Tarouca",
        "slug": "tarouca",
        parent: 121
    }, {
        val: 376,
        label: "Tavira",
        "slug": "tavira",
        parent: 113
    }, {
        val: 303,
        label: "Terras de Bouro",
        "slug": "terras-de-bouro",
        parent: 108
    }, {
        val: 442,
        label: "Tomar",
        "slug": "tomar",
        parent: 117
    }, {
        val: 489,
        label: "Tondela",
        "slug": "tondela",
        parent: 121
    }, {
        val: 316,
        label: "Torre de Moncorvo",
        "slug": "torre-de-moncorvo",
        parent: 109
    }, {
        val: 443,
        label: "Torres Novas",
        "slug": "torres-novas",
        parent: 117
    }, {
        val: 230,
        label: "Torres Vedras",
        "slug": "torres-vedras",
        parent: 33
    }, {
        val: 391,
        label: "Trancoso",
        "slug": "trancoso",
        parent: 114
    }, {
        val: 257,
        label: "Trofa",
        "slug": "trofa",
        parent: 105
    }, {
        val: 278,
        label: "Vagos",
        "slug": "vagos",
        parent: 106
    }, {
        val: 279,
        label: "Vale de Cambra",
        "slug": "vale-de-cambra",
        parent: 106
    }, {
        val: 452,
        label: "Valen\u00e7a",
        "slug": "valenca",
        parent: 119
    }, {
        val: 258,
        label: "Valongo",
        "slug": "valongo",
        parent: 105
    }, {
        val: 466,
        label: "Valpa\u00e7os",
        "slug": "valpacos",
        parent: 120
    }, {
        val: 510,
        label: "Velas",
        "slug": "velas",
        parent: 493
    }, {
        val: 360,
        label: "Vendas Novas",
        "slug": "vendas-novas",
        parent: 112
    }, {
        val: 361,
        label: "Viana do Alentejo",
        "slug": "viana-do-alentejo",
        parent: 112
    }, {
        val: 453,
        label: "Viana do Castelo",
        "slug": "viana-do-castelo-viana-do-castelo",
        parent: 119
    }, {
        val: 293,
        label: "Vidigueira",
        "slug": "vidigueira",
        parent: 107
    }, {
        val: 304,
        label: "Vieira do Minho",
        "slug": "vieira-do-minho",
        parent: 108
    }, {
        val: 329,
        label: "Vila de Rei",
        "slug": "vila-de-rei",
        parent: 110
    }, {
        val: 377,
        label: "Vila do Bispo",
        "slug": "vila-do-bispo",
        parent: 113
    }, {
        val: 259,
        label: "Vila do Conde",
        "slug": "vila-do-conde",
        parent: 105
    }, {
        val: 511,
        label: "Vila do Porto",
        "slug": "vila-do-porto",
        parent: 493
    }, {
        val: 317,
        label: "Vila Flor",
        "slug": "vila-flor",
        parent: 109
    }, {
        val: 231,
        label: "Vila Franca de Xira",
        "slug": "vila-franca-de-xira",
        parent: 33
    }, {
        val: 512,
        label: "Vila Franca do Campo",
        "slug": "vila-franca-do-campo",
        parent: 493
    }, {
        val: 444,
        label: "Vila Nova da Barquinha",
        "slug": "vila-nova-da-barquinha",
        parent: 117
    }, {
        val: 454,
        label: "Vila Nova de Cerveira",
        "slug": "vila-nova-de-cerveira",
        parent: 119
    }, {
        val: 305,
        label: "Vila Nova de Famalic\u00e3o",
        "slug": "vila-nova-de-famalicao",
        parent: 108
    }, {
        val: 392,
        label: "Vila Nova de Foz C\u00f4a",
        "slug": "vila-nova-de-foz-coa",
        parent: 114
    }, {
        val: 260,
        label: "Vila Nova de Gaia",
        "slug": "vila-nova-de-gaia",
        parent: 105
    }, {
        val: 490,
        label: "Vila Nova de Paiva",
        "slug": "vila-nova-de-paiva",
        parent: 121
    }, {
        val: 347,
        label: "Vila Nova de Poiares",
        "slug": "vila-nova-de-poiares",
        parent: 111
    }, {
        val: 467,
        label: "Vila Pouca de Aguiar",
        "slug": "vila-pouca-de-aguiar",
        parent: 120
    }, {
        label: "Vila Real",
        val: 468,
        "slug": "vila-real-vila-real",
        parent: 120
    }, {
        val: 378,
        label: "Vila Real de Santo Ant\u00f3nio",
        "slug": "vila-real-de-santo-antonio",
        parent: 113
    }, {
        val: 330,
        label: "Vila Velha de R\u00f3d\u00e3o",
        "slug": "vila-velha-de-rodao",
        parent: 110
    }, {
        val: 306,
        label: "Vila Verde",
        "slug": "vila-verde",
        parent: 108
    }, {
        val: 362,
        label: "Vila Vi\u00e7osa",
        "slug": "vila-vicosa",
        parent: 112
    }, {
        val: 318,
        label: "Vimioso",
        "slug": "vimioso",
        parent: 109
    }, {
        val: 319,
        label: "Vinhais",
        "slug": "vinhais",
        parent: 109
    }, {
        val: 491,
        label: "Viseu",
        "slug": "viseu-viseu",
        parent: 121
    }, {
        val: 307,
        label: "Vizela",
        "slug": "vizela",
        parent: 108
    }, {
        val: 492,
        label: "Vouzela",
        "slug": "vouzela",
        parent: 121
    }
]










export default function Step0(props) {

    const { loading, data, changeData, updateDataFields } = props
    const { title, seEmail, se, bedrooms, bathrooms, garage, location, type, business, price, description, district, county } = data
    const [err, setErr] = useState({})

    const propType = type === 'Escritório' ? 87 : type === 'Loja' ? 91 : type === 'Terreno' ? 194 : type === 'Prédio' ? 192 : 34

    /* 
        Info from Sheet Sellers:

            Title C  -----> Usar para colocar auto no campo do title e validar tamanho
            State D
            S.E.  B

            Tipo Imovel (Apartamento, Moradia, Terreno, Prédio, Escritório) F
            Localização H


            Regime Angariaçao O
            Tipo Negócio L
            Valor I

            Descrição do Imóvel
    
    */

    useEffect(() => { /* Clean Error if there is a change in title */
        setErr({})
    }, [title]
    )

    const updateData = (params) => {
        updateDataFields({
            ...params
        })
    }

    const updateInputData = (e) => {
        e.preventDefault()
        updateData({ [e.target.name]: e.target.value })
    }

    const validate = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        let params = {}

        if (!data.district)
            return setErr({ description: 'Por favor selecciona um distrito.' })
        if (!data.county)
            return setErr({ description: 'Por favor selecciona um concelho.' })

        if (propType === 91 || propType === 87) { /* Loja OU Escritório */
            const bathrooms = e.target.bathrooms.value
            const garage = e.target.garage.value
            if (!bathrooms && bathrooms === '')
                return setErr({ description: 'Número de casas de banho obrigatório.' })
            params = {
                ...params,
                bathrooms,
                garage
            }
        }

        if (propType === 194) { /* Terreno */
            /* Nada de especial para fazer */
        }


        if (propType === 34 || propType === 192) { /* Apartamento/Moradia OU Prédio */
            const bedrooms = e.target.bedrooms.value
            const bathrooms = e.target.bathrooms.value
            const garage = e.target.garage.value
            if (!bedrooms && bedrooms === '')
                return setErr({ description: 'Número de quartos obrigatório.' })
            if (!bathrooms && bathrooms === '')
                return setErr({ description: 'Número de casas de banho obrigatório.' })
            params = {
                ...params,
                bedrooms,
                bathrooms,
                garage
            }
        }

        if ((title && title.length < 50) || !title)
            return setErr({ title: 'Título tem de ter mais que 50 caracteres.' })
        if (title && title.length > 70)
            return setErr({ title: 'Título não pode ter mais que 70 caracteres.' })
        if ((description && description.length < 500) || !description)
            return setErr({ description: 'Descrição tem de ter mais que 500 caracteres.' })

        changeData({
            title,
            description,
            district: data.district,
            county: data.county,
            ...params
        })
    }

    /* localizacao-imovel: [33, 229] */


    return (
        <form onSubmit={validate}>
            <Typography variant="h4" component="h4">
                Dados gerais
            </Typography>
            <Divider className="divider" orientation="horizontal" />
            <Grid container>
                {/* 
                    <Grid item xs={2}>
                        <Typography variant="body1" component="p">
                            Estado
                        </Typography>
                        <InputBase
                            defaultValue={state}
                            margin="dense"
                            name="state"
                            type="text"
                            variant="outlined"
                            disabled
                        />
                    </Grid> 
                */}
                <Grid item xs={12} sm={3}>
                    <Typography variant="body1" component="p">
                        Responsável
                    </Typography>
                    <InputBase
                        defaultValue={seEmail}
                        margin="dense"
                        name="seEmail"
                        type="text"
                        variant="outlined"
                        disabled
                    />
                </Grid>
                {/* <Grid item xs={2}>
                    <Typography variant="body1" component="p">
                    Regime
                    </Typography>
                    <InputBase
                        defaultValue={regime}
                        margin="dense"
                        name="regime"
                        type="text"
                        variant="outlined"
                        disabled
                    />
                </Grid> */}
                <Grid item xs={12} sm={2}>
                    <Typography variant="body1" component="p">
                        Tipo
                    </Typography>
                    <InputBase
                        defaultValue={type}
                        margin="dense"
                        name="type"
                        type="text"
                        variant="outlined"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="body1" component="p">
                        Negócio
                    </Typography>
                    <InputBase
                        defaultValue={business}
                        margin="dense"
                        name="business"
                        type="text"
                        variant="outlined"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="body1" component="p">
                        Valor
                    </Typography>
                    <InputBase
                        defaultValue={price && (price + ' €')}
                        margin="dense"
                        name="price"
                        type="text"
                        variant="outlined"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="body1" component="p">
                        Localização
                    </Typography>
                    <InputBase
                        defaultValue={location}
                        margin="dense"
                        name="location"
                        type="text"
                        variant="outlined"
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p">
                        Distrito*
                    </Typography>
                    <CustomizedSelects loading={loading} updateData={updateData} name='district' val={district} options={[
                        /* localizacao-imovel: [33] */
                        { val: 493, label: 'Açores' },
                        { val: 106, label: 'Aveiro' },
                        { val: 107, label: 'Beja' },
                        { val: 108, label: 'Braga' },
                        { val: 109, label: 'Bragança' },
                        { val: 110, label: 'Castelo Branco' },
                        { val: 111, label: 'Coimbra' },
                        { val: 112, label: 'Évora' },
                        { val: 113, label: 'Faro' },
                        { val: 114, label: 'Guarda' },
                        { val: 115, label: 'Leiria' },

                        { val: 33, label: 'Lisboa' },

                        { val: 513, label: 'Madeira' },
                        { val: 116, label: 'Portalegre' },
                        { val: 105, label: 'Porto' },
                        { val: 117, label: 'Santarém' },
                        { val: 118, label: 'Setúbal' },
                        { val: 119, label: 'Viana do Castelo' },
                        { val: 120, label: 'Vila Real' },
                        { val: 121, label: 'Viseu' }
                    ]} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p">
                        Concelho*
                    </Typography>
                    <CustomizedSelects loading={loading} updateData={updateData} name='county' val={county} options={
                        counties.filter(c => c.parent === district)
                    } />
                </Grid>
                {propType !== 194 && propType !== 91 && propType !== 87 && /* Diferente de Terreno, Loja e Escritório */
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" component="p">
                            Quartos*
                        </Typography>
                        <InputBase
                            name="bedrooms"
                            defaultValue={bedrooms}
                            type="number"
                            onChange={updateInputData}
                            variant="outlined"
                            disabled={loading}
                            inputProps={{
                                min: 0,
                                step: 1
                            }}
                        />
                    </Grid>
                }
                {propType !== 194 && /* Diferente de Terreno */
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" component="p">
                            Casas de Banho
                        </Typography>
                        <InputBase
                            name="bathrooms"
                            defaultValue={bathrooms}
                            onChange={updateInputData}
                            type="number"
                            variant="outlined"
                            disabled={loading}
                            inputProps={{
                                min: 0,
                                step: 1
                            }}
                        />
                    </Grid>
                }
                {propType !== 194 && /* Diferente de Terreno */
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" component="p">
                            Garagens
                        </Typography>
                        <InputBase
                            defaultValue={garage}
                            onChange={updateInputData}
                            name="garage"
                            type="number"
                            variant="outlined"
                            disabled={loading}
                            inputProps={{
                                min: 0,
                                step: 1
                            }}
                        />
                    </Grid>
                }
            </Grid>

            <Divider className="divider" orientation="horizontal" />
            <Typography variant="body1" component="p">
                Título do imóvel*
            </Typography>
            <InputLength loading={loading} defaultValue={title} name='title' min={50} max={70} placeholder="Insere um título com no mínimo 50 caracteres e no máximo 70" />
            <Typography variant="caption" component="p">
                {err.title}
            </Typography>
            <Typography variant="body1" component="p">
                Descrição do imóvel*
            </Typography>
            <InputLength loading={loading} defaultValue={description} multiline name='description' min={500} placeholder="Insere uma descrição com pelo menos 500 caracteres" />
            <Typography variant="caption" component="p">
                {err.description}
            </Typography>
            <Grid container justify="flex-end">
                <Button variant="contained" color="primary" type="submit">
                    Seguinte
                </Button>
            </Grid>
        </form>
    )
}