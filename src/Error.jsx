import { Link } from "react-router";

export default function Error() {
    return (
        <div className="flex flex-col w-100 mx-auto my-12 text-center">
            <h1 className="text-3xl">OUT OF BOUNDS</h1>
            <p className="mt-6 mb-12">(Must be in range [1, 14])</p>
            <Link className="w-80 h-10 mx-10 text-3xl text-center border-1 rounded-md text-white bg-green-400 hover:bg-green-500 cursor-grab" to="/">BACK</Link>
        </div>
    );
}