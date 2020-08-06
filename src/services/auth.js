const apiUrl = process.env.REACT_APP_API_URL ;
    
export const getRoutes = async () => {
    try {
        const response = await fetch( `${apiUrl}` ) ;
        
        if ( response.status === 401 ) {
            throw new Error( 'Usuario no autenticado' ) ;
        }
        if ( !response.status === 200 ) {
            throw new Error( 'error lanzado a propósito' ) ;
        }

        const data = await response.json() ;

        return data ;
        
    } catch ( error ) {
        throw new Error( error ) ;
    }
} ;

