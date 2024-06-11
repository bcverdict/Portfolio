import React, { useEffect, useState } from 'react';

const GithubRepos: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/bcverdict/repos', {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data: Repository[] = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchRepos();
    }, [token]);

    return (
        <div>
            <h1>GitHub Repositories</h1>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GithubRepos;
