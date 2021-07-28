"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useText = exports.useGitHubDocs = void 0;
const react_1 = require("react");
exports.useGitHubDocs = (repo, root, branch, path) => {
    const [content, setContent] = react_1.useState();
    const [sections, setSections] = react_1.useState();
    const [error, setError] = react_1.useState();
    const baseUrl = `https://raw.githubusercontent.com/${repo}/${branch || 'master'}/${root}`;
    const fetchData = async () => {
        try {
            const sectionsResponse = await fetch(`${baseUrl}/sections.json`);
            const contentResponse = await fetch(`${baseUrl}/${path}/README.md`);
            const sections = JSON.parse(await sectionsResponse.text());
            const content = await contentResponse.text();
            setSections(sections);
            setContent(content);
        }
        catch (error) {
            setError(error.message);
        }
    };
    react_1.useEffect(() => {
        fetchData();
    }, [path]);
    return Object.assign({}, content && { content }, sections && { sections }, error && { error });
};
exports.useText = (url) => {
    const [text, setText] = react_1.useState("");
    react_1.useEffect(() => {
        (async function () {
            try {
                const response = await fetch(url);
                const text = await response.text();
                setText(text);
            }
            catch (_a) {
            }
        })();
    }, []);
    return text;
};
//# sourceMappingURL=main.js.map