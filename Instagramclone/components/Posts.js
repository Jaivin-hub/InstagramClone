import Post from "./Post"

function Posts() {
    const posts = [
        {
            id: '1234',
            username: 'jaivin',
            userImg: 'https://avatars.githubusercontent.com/u/83535061?v=4',
            img: 'https://wikiborn.com/wp-content/uploads/2020/06/Dan-Bilzerian.jpg',
            caption: 'This is DOPE!'
        },
        {
            id: '1234',
            username: 'jaivin',
            userImg: 'https://avatars.githubusercontent.com/u/83535061?v=4',
            img: 'https://wikiborn.com/wp-content/uploads/2020/06/Dan-Bilzerian.jpg',
            caption: 'This is DOPE!'
        }
    ]
    return (
        <div>
            {posts.map((post,i)=>(
                <Post key={i} 
                id={post.id} 
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                />
            ))}
        </div>
    )
}
export default Posts
