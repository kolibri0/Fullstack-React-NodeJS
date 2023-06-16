import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

interface IUser {
  email: string,
  number: string
}

const data: IUser[] = [
  {
    email: 'jim@gmail.com',
    number: '221122'
  }, {
    email: 'jam@gmail.com',
    number: '830347'
  }, {
    email: 'john@gmail.com',
    number: '221122'
  }, {
    email: 'jams@gmail.com',
    number: '349425'
  }, {
    email: 'jams@gmail.com',
    number: '141424'
  }, {
    email: 'jill@gmail.com',
    number: '822287'
  }, {
    email: 'jill@gmail.com',
    number: '822286'
  }]

const app: Express = express();
const port = process.env.PORT


app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {

  const { email, number } = req.query

  const num = String(number).split('-').join('')

  const user: IUser | IUser[] = data.filter(userItem => (
    userItem.email == email || userItem.number == num
  ))

  setTimeout(() => {
    if (!user.length) {
      return res.json(
        {
          msg: "Opss user not found..."
        }
      )
    }

    res.json(
      user
    )
  }, 5000)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});