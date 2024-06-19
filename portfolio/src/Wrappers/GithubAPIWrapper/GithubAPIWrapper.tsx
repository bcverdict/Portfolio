
interface CleanRepository {
    name: string
    link: string
    description: string
    previewImage: string
    previewGif: string
    languages: [string, number][]
}

const getLanguages = async (repo: Repository): Promise<[string, number][]> => {
    const response = await fetch(repo.languages_url, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
    });

    return await response.json();
}

const getProjectDescription = async (repo: Repository) => {

    const readMeContent = await getReadme(repo)

    return projectDescription(readMeContent);

}
const projectDescription = (content: string): string => {
    const sectionTitle = "Project Overview";
    const regex = new RegExp(`## ${sectionTitle}\\s+([\\s\\S]*?)(?=\\s+## |$)`, 'i');
    const match = content.match(regex);

    if (!match || !match[1]) {
        return '';
    }

    return match[1].trim();
}

const getReadme = async (repo: Repository): Promise<string> => {
    try {
        const response = await fetch(`https://api.github.com/repos/bcverdict/${repo.name}/readme`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        });

        if (!response.ok) {
            return "No readme found"
        }

        return await response.text();
    } catch (e) {
        return "No readme found"
    }
}

export type CleanDataReturnType = {
    repositories: CleanRepository[];
};

const cleanData = async (repos: Repository[]): Promise<CleanDataReturnType> => {
    return {
        repositories: await Promise.all(repos.map(async (repo: Repository): Promise<CleanRepository> => ({
            name: repo.name,
            link: repo.html_url,
            description: await getProjectDescription(repo),
            previewImage: "",
            previewGif: "",
            languages: await getLanguages(repo),
        })))
    };
}

const getData = () => {
    const fetchRepos = async () => {
        const response = await fetch('https://api.github.com/users/bcverdict/repos', {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: Repository[] = await response.json();
        const a = await cleanData(data);

        return a;
    };

    return fetchRepos();
};

export default getData;
