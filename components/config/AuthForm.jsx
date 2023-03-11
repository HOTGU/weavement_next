import React from "react";

const AuthForm = () => {
  return (
    <>
      <form
        action="/api/auth/login"
        method="post"
        className=" w-full min-h-screen flex flex-col gap-3 mt-20 items-center justify-start"
      >
        <input
          className="border-2 border-gray-500 px-4 py-2 rounded-lg"
          type="email"
          name="email"
          required
        />
        <input
          className="border-2 border-gray-500 px-4 py-2 rounded-lg"
          type="password"
          name="password"
          required
        />
        <input
          className=" bg-accent-color text-white px-4 py-2 rounded-lg"
          type="submit"
          value="로그인"
        />
      </form>
    </>
  );
};

export default AuthForm;
