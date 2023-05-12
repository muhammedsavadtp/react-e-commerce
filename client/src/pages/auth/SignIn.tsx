import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fetchAPI from "../../lib/fetch";
import { useDispatch, useSelector } from "react-redux";
import { SetUser,SetUserDetails } from "../../store/slice/userSlice";

export default function Example() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
 const dispatch = useDispatch();
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetchAPI({
        url: "http://192.168.43.67:4001/api/user/login",
        method: "POST",
        data: formData,
      });
      if (response.status === 200) {
        // Save JWT token to local storage
        const data = response.data;
        localStorage.setItem("token", data.token);
        console.log(data.email);
        // dispatch(SetUser(true));
        dispatch(SetUserDetails(data));
        
        navigate("/"); // navigate to the home page or another page if successful
      } else {
        throw new Error(response.response.data); // throw error if the status is not 'ok'
      }
    } catch (error) {
      //  console.error(error);
      setMessage(error.message);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (message) {
      console.log(message);
    }
  }, [message]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src=""
            alt="Your Company"
          /> */}

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          {message && (
            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
          )}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  autoFocus
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleFormSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
