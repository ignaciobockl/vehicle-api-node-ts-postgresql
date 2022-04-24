import express, { Application } from 'express';
import morgan from 'morgan';



export class App {

    private app: Application;

    constructor( private port?: number | string ) {

        this.app = express();

        this.middleware();

        this.settings();

    }
    
    async listen() {
        await this.app.listen( this.app.get('port') );
        console.log('Server run on port', this.app.get('port'));
    }

    middleware() {
        this.app.use(morgan('dev'));
    }
    
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

}