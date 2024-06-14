import { useEffect } from 'react';
import {updateRepoInfo} from "../FirebaseWrapper/FirebaseWrapper";

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

export type CleanDataReturnType = {
    repositories: CleanRepository[];
};

const CleanData = async (repos: Repository[]): Promise<CleanDataReturnType> => {

    return {
        repositories: await Promise.all(repos.map(async (repo: Repository): Promise<CleanRepository> => ({
            name: repo.name,
            link: repo.html_url,
            description: "test",
            previewImage: "",
            previewGif: "",
            languages: await GetLanguages(repo)
        })))
    };

}
const GithubAPIWrapper = () => {
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

        await updateRepoInfo(cleanData);
    };

    fetchRepos();
};

export default GithubAPIWrapper;
