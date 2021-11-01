const express = require('express');
const bodyParser = require('body-parser');

const livingRoomSceneImplementationRoutes = require('./routes/LivingRoomSceneImplementationRoutes');
const environmentControllerRoutes = require('./routes/EnvironmentControllerRoutes');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Scene Implementation Project');
});

app.use('/LivingRoomSceneImplementation', livingRoomSceneImplementationRoutes);
app.use('/EnvironmentController', environmentControllerRoutes);

app.listen(3000, () => {
    console.log('Scene Implementation server started at port 3000...');
})