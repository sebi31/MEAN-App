import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

router.get('', (req: Request, res: Response, next: NextFunction) => {
    res.send('get users');
});
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    res.send('get user by id');
});
router.get('/:id/profile', (req: Request, res: Response, next: NextFunction) => {
    res.send('get user by id');
});
router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    res.send('register user');
});
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    res.send('user login');
});

export default router;