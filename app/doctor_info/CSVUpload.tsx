import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import { db } from "../../firebase";

export default function CSVUpload() {
  const [uploadConfirmation, setUploadConfirmation] = useState<string | null>(
    null
  );
  const [csvData, setCsvData] = useState<any[][]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleCSVUpload = (data: any[][], fileInfo: any) => {
    setCsvData(data);
  };

  const handleUploadSubmit = async () => {
    try {
      setUploading(true);
      const batch = db.batch();
      csvData.forEach((entry) => {
        const [
          Blood_Type,
          Email,
          Gender,
          Name,
          Hospital_name,
          Contact_number,
          Role,
        ] = entry;

        const docRef = db.collection("messages").doc();
        batch.set(docRef, {
          Blood_Type,
          Email,
          Gender,
          Name,
          Hospital_name,
          Contact_number,
          Role,
        });
      });
      await batch.commit();
      setUploadConfirmation("CSV file uploaded successfully.");
      setCsvData([]); // Clear CSV data after upload
    } catch (error) {
      console.error("Error uploading CSV file to Firestore", error);
      setUploadConfirmation("Error uploading CSV file to Firestore");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Upload CSV</h1>
      <CSVReader
        onFileLoaded={handleCSVUpload}
        parserOptions={{ header: true, skipEmptyLines: true }}
        label="Select CSV File"
      />
      <button
        onClick={handleUploadSubmit}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          uploading && "opacity-50 cursor-not-allowed"
        }`}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload CSV"}
      </button>
      {uploadConfirmation && (
        <div className="text-green-600 mt-4">{uploadConfirmation}</div>
      )}
    </div>
  );
}
