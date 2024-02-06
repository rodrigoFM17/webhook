import express, { Express, Request, Response } from 'express'

const app: Express = express()

const port: number = 3000

app.use(express.json())

app.post('/github-event', (req: Request, res: Response) => {  

    console.log('evento corrido', req.body)
    
    res.status(200).json({
        success: true
    })
})

app.listen(port, () => {
    console.log('escuchando en el puerto 3000')
})

