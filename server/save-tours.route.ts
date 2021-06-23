import {Request, Response} from 'express';
import {TOURS} from "./db-data";
import {setTimeout} from 'timers';


export function saveTours(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving tours", id, JSON.stringify(changes));


    TOURS[id] = {
        ...TOURS[id],
        ...changes
    };

    res.status(200).json(TOURS[id]);


}
