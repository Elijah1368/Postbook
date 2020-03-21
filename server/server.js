import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://eramian125:Aq1sw2@cluster0-qi6kh.mongodb.net/test?retryWrites=true&w=majority',
    {autoIndex: false}).then(() => console.log('DB connected'))
                            .catch(err => console.log(err))
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
