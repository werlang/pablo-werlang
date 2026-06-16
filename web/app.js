import express from 'express';
import mustacheExpress from 'mustache-express';

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', `${import.meta.dirname}/view/`);

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Pablo Werlang | Desenvolvedor e professor',
        heading: 'Pablo Werlang',
        year: new Date().getFullYear(),
    });
});

app.use(express.static(`${import.meta.dirname}/public/`));

app.use((req, res) => {
    res.status(404).send('Not found');
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, host, () => {
        console.log(`Pablo Werlang portfolio listening at http://${host}:${port}`);
    });
}

export default app;
