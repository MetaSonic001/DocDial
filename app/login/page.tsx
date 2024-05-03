"use client";
import React, { useState } from "react";
import { auth, db, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        email: user.email,
      });
      console.log("User registered and email saved to Firestore");
      router.push("/More");
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await addDoc(collection(db, "users"), {
        email: user.email,
        displayName: user.displayName,
      });
      console.log("User registered with Google and email saved to Firestore");
      router.push("/Home");
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <div
    className="flex justify-center items-center h-screen"
    style={{
      backgroundImage: `url("/assets/images/medical background.png")`, // Updated background image path
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleEmailSignUp}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
          >
            Sign Up with Email
          </button>
        </form>
        <button
          onClick={handleGoogleSignUp}
          className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md border border-gray-300 w-full mt-4"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
