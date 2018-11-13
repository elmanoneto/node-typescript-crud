import App from './app'

process.once(`SIGUSR2`, () => App.closeDatabaseConnection(`nodemon restart`, () => process.kill(process.pid, `SIGUSR2`)))
process.on(`SIGINT`, () => App.closeDatabaseConnection(`Execution was interrupted`, () => process.exit(0)))

App.app.listen(4200, () => console.log(`Server running in port 4200`))