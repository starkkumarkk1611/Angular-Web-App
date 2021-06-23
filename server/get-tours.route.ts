

import {Request, Response} from 'express';
import {TOURS} from "./db-data";
import {findLessonsForCourse} from './db-data';



export function getAllTours(req: Request, res: Response) {

             res.status(200).json({payload:Object.values(TOURS)});  

}


export function getTourById(req: Request, res: Response) {

    const tourId = req.params["id"];
   
    const tours:any = Object.values(TOURS);

    const tour = tours.find(tour => tour.id == tourId);
    var locations_arr = findLessonsForCourse(tourId);
    const loc = { locations : locations_arr }
    const info = Object.assign(tour,loc);
   console.log(loc);
    res.status(200).json(info);


}
