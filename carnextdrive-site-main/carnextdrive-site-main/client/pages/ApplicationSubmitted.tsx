import { Link } from "react-router-dom";

export default function ApplicationSubmitted() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">

      <div className="max-w-xl text-center px-6">

        <h1 className="text-4xl font-bold mb-4">
          Application Received
        </h1>

        <p className="text-lg text-gray-600 mb-4">
          Your application has been submitted successfully.
        </p>

        <p className="text-gray-500 mb-8">
          Please check your email for confirmation.  
          Approval usually takes up to 30 minutes.
        </p>

        <Link
          to="/"
          className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}