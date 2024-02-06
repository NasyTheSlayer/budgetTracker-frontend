import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCount } from "../store/user/userSlice";

const Home: FC = () => {
  const { isAuth, user } = useSelector(selectCount);

  return (
    <div className="m-auto p-32 w-1/2">
      {isAuth ? (
        <div className="border-2 border-slate-800 rounded-md p-16">
          <h1 className="flex justify-center text-xl">
            Hello,
            <span className="text-blue-500" style={{ marginLeft: "5px" }}>
              {user?.email}
            </span>
          </h1>
          <Link
            to={"/transactions"}
            className="btn btn-green mx-auto justify-center mt-4 w-60"
          >
            Keep track of your money
          </Link>
        </div>
      ) : (
        <div className="border-2 border-slate-800 rounded-md p-16">
          <h1 className="flex justify-center text-xl">
            To use the site, you need to log in
          </h1>
          <Link
            to={"/auth"}
            className="btn btn-green mx-auto justify-center w-32 mt-4"
          >
            Press to Join
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;