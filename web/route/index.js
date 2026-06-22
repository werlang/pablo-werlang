import express from 'express';

const router = express.Router();

/**
 * Provides the homepage template data for both SSR and static builds.
 *
 * @returns {{pageTitle: string, heading: string, year: number}}
 */
const getIndexData = () => ({
    pageTitle: 'Pablo Werlang | Desenvolvedor e professor',
    heading: 'Pablo Werlang',
    year: new Date().getFullYear(),
});

router.get('/', (req, res) => {
    return res.templateRender('index', getIndexData());
});

export { getIndexData, router };
