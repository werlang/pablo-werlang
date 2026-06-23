import express from 'express';

const router = express.Router();

/**
 * Provides the homepage template data for both SSR and static builds.
 *
 * @returns {{pageTitle: string, heading: string, year: number}}
 */
const getIndexData = () => ({
    pageTitle: 'Pablo Werlang | Desenvolvedor Full-Stack & Professor',
    heading: 'Pablo Werlang',
    year: new Date().getFullYear(),
    siteUrl: process.env.SITE_URL || 'https://werlang.dev.br',
});

router.get('/', (req, res) => {
    return res.render('index', getIndexData());
});

export { getIndexData, router };
