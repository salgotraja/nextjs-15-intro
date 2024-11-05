import React from 'react';

const Page = async () => {
    const response = await fetch('http://localhost:3000/api/books/2');
    const books = await response.json();
    console.log("books: " + books);
    return (
        <main>
            <code>{JSON.stringify(books, null, 2)}</code>
        </main>
    );
};

export default Page;