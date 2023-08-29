import { createContext, useContext } from 'react'
import { Backdrop, Box, CircularProgress,  Typography } from '@mui/material'
import useLoading from '../hooks/useLoading'

const defaultContext = {
  addLoading: () => { },
  removeLoading: () => { }
}

interface AppContextProps {
  addLoading: Function
  removeLoading: Function
}

type LoaderProviderProps = {
  children: JSX.Element
}

export const LoaderContext = createContext<AppContextProps>(defaultContext)

export const useLoader = () => useContext(LoaderContext)

const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [loading, addLoading, removeLoading] = useLoading()

  return (
    <LoaderContext.Provider value={ { addLoading, removeLoading } }>
      <Backdrop
        sx={ { color: 'primary', zIndex: (theme) => theme.zIndex.modal + 1 } }
        open={ loading }
      >
        <Box
          style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem'
          } }
        >
          <CircularProgress size="3rem" />
          <Typography sx={ { fontWeight: '600', color: 'primary', letterSpacing: '1px' } }>
            Cargando...
          </Typography>
        </Box>
      </Backdrop>
      { children }
    </LoaderContext.Provider>
  )
}

export default LoaderProvider