export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const  GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

//export const  GOOGLE_CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH;

export const checkToken = (jwtTokenValue) => {
    const decodedPayload = jwt.verify(jwtTokenValue, jwtSecret);
    let expiration_timestamp = decodedPayload.exp;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const isExpired = decodedPayload.exp < currentTimeInSeconds;
    
    return !isExpired;
}
