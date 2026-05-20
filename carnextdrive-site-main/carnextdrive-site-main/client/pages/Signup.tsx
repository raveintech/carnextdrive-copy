import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Upload } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    licenseFile: "",
    idFile: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadToCloudinary = async (file: any) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "license_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drlo4xvo8/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const json = await res.json();
    return json.secure_url;
  };

  const handleFileChange = async (e: any, type: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const url = await uploadToCloudinary(file);

    setFormData((prev: any) => ({
      ...prev,
      [type]: url,
    }));

    setUploading(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData();

    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("licenseURL", formData.licenseFile);
    form.append("idURL", formData.idFile);

    const res = await fetch("https://formspree.io/f/mvzwbzgz", {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      alert("Application submitted! Check your email.");
    } else {
      alert("Submission failed.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-2xl mx-auto px-6 sm:px-12 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Apply for a Car
          </h1>

          <p className="text-lg text-foreground/70">
            Submit your information to get approved
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Upload Driver License
            </label>

            <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "licenseFile")}
                className="hidden"
                id="license-upload"
                accept="image/*,.pdf"
                required
              />

              <label htmlFor="license-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2" />

                <p>Click to upload your license</p>

                <p className="text-sm opacity-60">
                  {formData.licenseFile ? "Uploaded ✓" : "PNG JPG or PDF"}
                </p>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Upload ID
            </label>

            <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "idFile")}
                className="hidden"
                id="id-upload"
                accept="image/*,.pdf"
                required
              />

              <label htmlFor="id-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2" />

                <p>Click to upload your ID</p>

                <p className="text-sm opacity-60">
                  {formData.idFile ? "Uploaded ✓" : "PNG JPG or PDF"}
                </p>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            disabled={uploading}
            className="w-full bg-accent text-white font-bold py-3"
          >
            {uploading ? "Uploading..." : "Submit Application"}
          </Button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/dashboard" className="text-accent">
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}