import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Example() {
   const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const { password, confirmPassword, firstName, lastName, email } = formData;

    // regular expressions for input validation
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // validate inputs
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      setMessage("Please enter a valid name");
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }
    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
      );
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/user/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
       
          throw new Error(data);
     
      }
      console.log(data);
      navigate('/')
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };
   useEffect(() => {
     if (message) {
       console.log(message);
     }
   }, [message]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
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
            create account
          </h2>
          {message && (
            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
          )}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  autoComplete="firstName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  autoFocus
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  autoComplete="lastName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                />
              </div>
            </div>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"
                  autoComplete="current-confirmPassword"
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
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
