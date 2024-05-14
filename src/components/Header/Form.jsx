import React from "react";
import { CiSearch } from "react-icons/ci";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center border rounded">
      <input
        className="bg-transparent py-1 px-1 md:px-3 outline-none"
        placeholder="Ülke ismine göre ara"
        type="text"
      />
      <button>
        <CiSearch className="bg-zinc-900 text-xl p-[6px] md:p-2 w-full h-full rounded transition hover:bg-green-600" />
      </button>
    </form>
  );
};

export default Form;
