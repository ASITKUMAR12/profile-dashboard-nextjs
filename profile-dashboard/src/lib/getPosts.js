export default async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate: 60}});
    if(!response.ok) throw new Error('Please try again')
    const posts = await response.json();

    return posts;
    
}