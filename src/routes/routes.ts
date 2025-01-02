import { Router } from 'express'

const router = Router()

export default () => {
    router.get('/health', (req, res) => {
        res.send("Api es Healthy!!");
    })

    return router;
}