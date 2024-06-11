const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    console.log('Webhook received');
    const event = req.headers['x-github-event'];
    const action = req.body.action;

    console.log('Event:', event);
    console.log('Action:', action);

    if (event === 'repository' && (action === 'created' || action === 'deleted')) {
        try {
            const response = await axios.get('https://api.github.com/users/bcverdict/repos', {
                headers: { 'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` }
            });
            console.log(response.data);
            // Do something with the list of repositories, like updating your database or triggering another process
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    }

    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
