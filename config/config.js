const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env){
        case 'dev':
            return {
                bd_string: 'mongodb+srv://ellyofreitas:freitas13@clusterapi-omdzw.mongodb.net/test?retryWrites=true',
                jwt_pass: 'ellyofreitas',
                jwt_expires_in: '1d',
                
            }
            case 'hml':
            return {
                bd_string: 'mongodb+srv://ellyofreitas:freitas13@clusterapi-omdzw.mongodb.net/test?retryWrites=true',
                jwt_pass: 'ellyofreitas',
                jwt_expires_in: '7d',
            }
            
            case 'prod':
            return {
                bd_string: 'mongodb+srv://ellyofreitas:freitas13@clusterapi-omdzw.mongodb.net/test?retryWrites=true',
                jwt_pass: 'daidaudiahiaidahdabdkgoiybhbai',
                jwt_expires_in: '7d',
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();