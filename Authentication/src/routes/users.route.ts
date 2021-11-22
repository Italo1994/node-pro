import { Router, Request, Response, NextFunction } from 'express';

const userRouter = Router();

userRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [ { userName: 'Italo' } ];
    res.status(200).send({users});
});

export default userRouter;