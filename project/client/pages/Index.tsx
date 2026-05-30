import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Car, FileText, CheckCircle } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Chrysler 200",
    type: "Sedan",
    weeklyPrice: 349,
    monthlyPrice: 1199,
    image: "/Chrysler.jpg",
  },
  {
    id: 2,
    name: "Chevy Camaro",
    type: "Coupe",
    weeklyPrice: 399,
    monthlyPrice: 1349,
    image: "/Camaro.jpg",
  },
  {
    id: 3,
    name: "Chevy Tahoe",
    type: "SUV",
    weeklyPrice: 479,
    monthlyPrice: 1599,
    image: "/Tahoe.jpg",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[560px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/Ecar.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-12 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Drive a Car Weekly.
              <br />
              Simple & Affordable.
            </h1>

            <p className="text-lg text-white/90 mb-8 font-medium">
              Flexible rentals. No long-term commitment.
            </p>

            <Link to="/">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-3">
                Browse Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How it Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Car className="w-10 h-10 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">1</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Choose Your Car
              </h3>
              <p className="text-foreground/70">
                Select from our available vehicles.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <FileText className="w-10 h-10 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">2</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Get Approved
              </h3>
              <p className="text-foreground/70">
                Upload your license and basic details.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">3</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Start Driving
              </h3>
              <p className="text-foreground/70">
                Sign and pay weekly. Hit the road!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Cars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Available Cars
            </h2>
            <p className="text-lg text-foreground/70">Pick Your Ride</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div
                key={car.id}
                data-testid={`car-card-${car.id}`}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 bg-gray-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {car.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">{car.type}</p>

                  <div className="space-y-1 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-accent">
                        ${car.weeklyPrice}
                      </span>
                      <span className="text-foreground/60 text-sm">/week</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-accent">
                        ${car.monthlyPrice}
                      </span>
                      <span className="text-foreground/60 text-sm">/month</span>
                    </div>
                  </div>

                  <Link to={`/vehicle/${car.id}`}>
                    <Button className="w-full bg-foreground hover:bg-foreground/90 text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center text-white/70 text-sm">
          <p>&copy; 2024 CarNextDrive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
