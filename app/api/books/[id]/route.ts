import books from "@/app/api/db";

export async function PUT (
    request: Request,
    context: { params: { id: string } },
) {
    const id = +context.params.id;
    const book = await request.json();

    const index = books.findIndex((book) => book.id === id);
    books[index] = book;
    return Response.json(books)
}

export async function DELETE (
    request: Request,
    context: { params: { id: string } },
) {
    const id = +context.params.id;

    const index = books.findIndex((book) => book.id === id);
    books.splice(index, 1);
    return Response.json(books);
}

export async function GET (
    request: Request,
    context: { params: { id: string } },
) {
    const id = +context.params.id;
    console.log("id: " + id);
    const index = books.findIndex((book) => book.id === id);
    const book = books[index]
    console.log("book: " + book)
    return Response.json(book);
}