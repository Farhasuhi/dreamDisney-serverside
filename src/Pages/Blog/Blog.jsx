import React from 'react';
import useTittle from '../../hooks/useTittle';

const Blog = () => {
    useTittle('blog')
    return (
        <div className='md:w-[90%] w-[95%] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Question 1!</h2>
                        <div className="card-actions justify-end">
                            <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                            <p>Tokens are pieces of data that carry just enough information to facilitate the process of determining a users identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process.
                                Common identity frameworks and protocols use token-based strategies to secure access to applications and resources. For example, we can use OAuth 2.0 for authorization and OIDC for authentication.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Question 2!</h2>

                        <div className="card-actions justify-end">
                            <p>Compare SQL and NoSQL databases?</p>
                            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Question 3!</h2>

                        <div className="card-actions justify-end">
                            <p>What is express js? What is Nest JS??</p>
                            <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Question 4!</h2>

                        <div className="card-actions justify-end">
                            <p>What is MongoDB aggregate and how does it work ??</p>
                            <p>Aggregation operations process data records and return computed results.

                                Not only do we have the ability to aggregate data on the client side with JavaScript, but we can use MongoDB to run operations on the server against our collections stored in the database before the result is returned to the client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;