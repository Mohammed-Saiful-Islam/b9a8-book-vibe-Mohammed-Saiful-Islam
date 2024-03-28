import { NavLink, useLoaderData } from "react-router-dom";
import Books from "../components/Books";

const Home = () => {
    const books = useLoaderData()
    console.log(books);
    const { image } = books[0]

    return (
        <div className="workSansFont">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 p-20 bg-gray-200 ">
                        <div className="p-6 space-y-2 lg:col-span-5 h-full flex flex-col justify-center items-start ">
                            <h3 className="text-2xl font-semibold sm:text-4xl ">Books to freshen up your bookshelf</h3>
                            <NavLink to={'/listedbooks'} className={'btn bg-green-600 text-white'}>View The List </NavLink>
                        </div>
                        <img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-center">Books</h1>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            books.map(book=>(<Books book={book} key={book.id} />))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;