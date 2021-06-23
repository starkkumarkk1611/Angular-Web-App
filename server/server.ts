
import  * as express from 'express';
import {Application} from "express";
import {getAllTours, getTourById} from "./get-tours.route";
import {saveTours} from './save-tours.route';
import { loginUser } from './login.route';
const bodyParser = require('body-parser');


const app: Application = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.route('/api/tours').get(getAllTours); 

app.route('/api/tours/:id').get(getTourById);

app.route('/api/tours/:id').put(saveTours);

app.route('/api/login').post(loginUser);

const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



