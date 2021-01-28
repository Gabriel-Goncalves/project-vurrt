export async function allTools() {
    const response = await fetch('http://localhost:3000/tools').then(data => data.json());
    return response;
}
