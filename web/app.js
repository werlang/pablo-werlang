import express from 'express';
import { renderMiddleware } from './middleware/render.js';
import { router as indexRoute } from './route/index.js';

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const app = express();

app.set('views', `${import.meta.dirname}/view/`);

app.use(renderMiddleware());

app.use('/', indexRoute);

app.use(express.static(`${import.meta.dirname}/public/`));

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.listen(port, host, () => {
    console.log(`Pablo Werlang portfolio listening at http://${host}:${port}`);
});

export default app;
