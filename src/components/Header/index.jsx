import { FaVirusCovid } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./Form";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  const handleSubmit = () => {};
  return (
    <header className="flex bg-zinc-900 text-white py-5 px-5 md:px-20 justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <FaVirusCovid className="text-xl text-red-800" />
        <h1>Covid Test</h1>
      </Link>
      <Form handleSubmit={handleSubmit} />
      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Bugün aşı olanlar</span>
          <span className="text-gray-400">(123,456)</span>
        </p>
        <TbVaccine className="text-2xl text-green-600" />
      </div>
    </header>
  );
};

export default Header;
