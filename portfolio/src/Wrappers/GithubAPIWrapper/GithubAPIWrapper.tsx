import React, { useEffect, useState } from 'react';

interface CleanRepository {
    name: string
    link: string
    description: string
    previewImage: string
    previewGif: string
    languages: [string, number][]
}

const GetLanguages = async (repo: Repository): Promise<[string, number][]> => {

    const response = await fetch(repo.languages_url, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
    });

    return await response.json();
}
const CleanData = async (repos: Repository[]): Promise<CleanRepository[]> => {

    return await Promise.all(repos.map(async (repo: Repository): Promise<CleanRepository> => ({
        name: repo.name,
        link: repo.html_url,
        description: "",
        previewImage: "",
        previewGif: "",
        languages: await GetLanguages(repo)
    })));
}
const GithubAPIWrapper: React.FC = () => {
    const [repos, setRepos] = useState<CleanRepository[]>([]);
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
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
            const cleanData = await CleanData(data);
            
            setRepos(cleanData);
        };

        fetchRepos();
    }, [token]);

    return (
        <div>
            <h1>GitHub Repositories</h1>
            <ul>
                {repos.map((repo: CleanRepository, index: number) => (
                    <li key={index}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GithubAPIWrapper;
