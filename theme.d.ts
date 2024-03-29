import {ThemeOptions} from '@mui/material/styles'
import React from 'react'

declare module'@mui/material/styles'{
    interface Theme{
        status:{
            danger: string
        }
    }


    interface ThemeOptions{
        status:{
            danger: ReactCssProperties['color']
        }


    }
    interface Palette{
        neutral?: PaletteColor
    }


    interface PaletteOptions{
        neutral?: PaletteColorOptions
    }
    interface SimplePaletteColorOptions{
        darker?: string
    }
    interface PaletteColor{
        darker?: string
    }

    
}