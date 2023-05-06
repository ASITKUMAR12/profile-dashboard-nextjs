export default async function getPostById({id}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache:"force-cache"});//SSG
    if(!response.ok) throw new Error('Please try again')
    const post = await response.json();

    return post;
    
}