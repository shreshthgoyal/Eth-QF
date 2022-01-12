export const getProjectData = async () => {
    const res = await fetch("https://api.github.com/search/repositories?q=stars:%22%3E800%22language:solidity&sort=stars&order=desc");
    const jsonData = await res.json();
    const projects = jsonData.items;
    return projects;
}