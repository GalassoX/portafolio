import spanish from './translates/es.json';
import english from './translates/en.json';

const languages = [
    {
        name: 'spanish',
        regex: /^es/,
        module: spanish
    },
    {
        name: 'english',
        regex: /^en/,
        module: english
    }
];

const translate = (keyword) => {
    if (!keyword) return;
    const language = languages.find(l => l.regex.test(navigator.language));
    if (!language) {
        return english[keyword];
    }
    return language.module[keyword] ?? 'Translate not defined';
}

export default translate;