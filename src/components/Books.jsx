import { FiStar } from "react-icons/fi";
const Books = ({ book }) => {
    /* 
    {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}
    */
    const { bookName, author, image, category, tags, rating } = book
    return (
        <div className="workSansFont">
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image} />
                <div className="p-6 space-y-2">
                    <p>{tags}</p>
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
                    <h4 className="text-base font-bold">By : {author}</h4>
                    <div className="flex justify-between">
                        <p>{category}</p>
                        <div className="flex gap-2 items-center">
                            <p>{rating}</p>
                            <FiStar />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Books;