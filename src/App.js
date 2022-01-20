import './App.css';
import {useEffect, useState} from "react";

const App = () => {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);
    let [comments, setComments] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            });

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            });

    }, []);

    return (
        <div>

        </div>
    );
};

export default App;