import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to Poetry Reviews</h1>
            <p>Discover, share, and review amazing poetry.</p>
            <Link to="/register" className="btn btn-primary">Register</Link>
            <Link to="/login" className="btn btn-secondary ml-2">Login</Link>
        </div>
    );
};

export default Home;
