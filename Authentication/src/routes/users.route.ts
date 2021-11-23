import { Router, Request, Response, NextFunction } from 'express';

const usersRouter = Router();

usersRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [ { userName: 'Italo' } ];
    res.status(200).send({users});
});

usersRouter.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(200).send( {uuid} );
});

export default usersRouter;