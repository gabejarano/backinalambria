const app = require('../app');

app.set('port', process.env.PORT || 8202);

//Run server express.
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})