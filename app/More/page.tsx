// additional details

"use client";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";

const AdditionalDetails = () => {
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (user) {
        await addDoc(collection(db, "users"), {
          email: user.email,
          phone,
          gender,
          bloodType,
          dob,
          address,
        });
        console.log("Additional details saved to Firestore");
        router.push("/"); // Redirect to the home page or any other desired page
      }
    } catch (error) {
      console.error("Error saving additional details:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Additional Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>
          {/* Add similar input fields for gender, bloodType, dob, and address */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
          >
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalDetails;
