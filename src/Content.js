import React, { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']
export default function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
            .then(data => data.json()).then(data => setPosts(data))
    }, [type])
    return (
        <>
            {/* {tabs.map((tab) => {
                return (<div key={tab}>
                    <button
                        onClick={() => setType(tab)}
                        style={type === tab ? { background: '#ccc' } : {}}
                    >
                        {tab}
                    </button> <br />
                </div >)
            })}
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            {console.log('render')}
            <ul>{posts.map((post, index) => {
                return (<li key={index}>

                    title: {post.title || post.name}

                </li>)
            })}</ul> */}

            <textarea name="text" rows="14" cols="10" wrap="soft"> </textarea>
        </>
    )
}
