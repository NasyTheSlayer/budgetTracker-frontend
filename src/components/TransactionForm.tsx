import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import { IResponseTransactionLoader } from "../types/types";
import CategoryModal from "./CategoryModal";

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader;
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form method="post" action="/transactions" className="grid gap-2">
        <label className="grid" htmlFor="title">
          <span>Title</span>
          <input
            className="input border-slate-700"
            type="text"
            name="title"
            placeholder="Title..."
            required
          />
        </label>
        <label className="grid" htmlFor="amount">
          <span>Amount</span>
          <input
            className="input border-slate-700"
            type="number"
            name="amount"
            placeholder="Amount..."
            required
          />
        </label>

        {/* Select */}
        {categories.length ? (
          <label htmlFor="category" className="grid">
            <span>Category</span>
            <select className="input border-slate-700" name="category" required>
              {categories.map((category, idx) => (
                <option
                  className="text-slate-800"
                  key={idx}
                  value={category.id}
                >
                  {category.title}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <h1 className="mt-1 text-red-300">
            To continue create a category first
          </h1>
        )}

        <button
          onClick={() => setVisibleModal(true)}
          className="max-w-fit flex items-center gap-2 text-white/50 hover:text-white"
        >
          <FaPlus />
          <span>Manage Categoeies</span>
        </button>

        {/* Radio Buttons */}
        <div className="flex gap-4 items-center">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"income"}
              className="form-radio text-blue-600"
            />
          </label>
          <span>Income</span>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"expense"}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>

        {/* Submit button */}
        <button className="btn btn-green mt-2 max-w-fit">Submit</button>
      </Form>

      {/* Add Category Modal */}
      {visibleModal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}
    </div>
  );
};

export default TransactionForm;
