import Link from "next/link";
import Image from "next/image";
import { CardIcon } from "./CardIcon";
import { DeepDiveCard } from "./DeepDiveCard";
import OpenEarthAcademyPromo from "./OpenEarthAcademyPromo";
//@ts-ignore

import { deepDiveCards } from "./cardData";
import { JSX, Key } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-400 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">OpenEarth Academy</h1>
          {/* <nav className="flex space-x-4">
            <Link href="#donate" className="hover:underline">
              Get Updates
            </Link>
            <Link
              href="#signup"
              className="bg-white text-green-600 py-2 px-4 rounded"
            >
              Sign Up
            </Link>
          </nav> */}
        </div>
      </header>
      {/* Hero Section */}
      <section
        className="bg-gray-100 relative flex-grow bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/banner-one.png)",
        }}
      >
        <div className="container mx-auto py-36 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join the OpenEarth Academy. Code for the Environment
          </h2>
          <p className="text-lg mb-8">
            Empower communities to fight climate change through code, data, and
            actionable projects.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="#donate"
              className="bg-green-600 text-white py-3 px-6 rounded"
            >
              Get Updates
            </Link>
            {/* <Link
              href="#signup"
              className="border border-green-600 text-green-600 py-3 px-6 rounded"
            >
              Sign Up
            </Link> */}
          </div>
        </div>
      </section>
      {/* Curriculum Highlights */}
      <section className="container mx-auto py-16">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Explore Effective Strategies and Take Action
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <figure className="mb-4">
              <CardIcon icon="gis" label="GIS analysis" />
            </figure>
            <h4 className="text-xl font-bold mb-2">
              Align with Sustainability
            </h4>
            <p>
              Build a knowledge foundation for nature-based solutions, carbon
              sequestration, and supply chain efficiency with activities that
              put theory into practice.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <figure className="mb-4">
              <CardIcon icon="reforestation" label="Reforestation planting" />
            </figure>
            <h4 className="text-xl font-bold mb-2">
              Measure Your Climate Impact
            </h4>
            <p>
              Learn how your support for conservation efforts to enhance carbon
              sequestration and clean water restoration creates measurable
              impact.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <figure className="mb-4">
              <CardIcon icon="conservation" label="AI for conservation" />
            </figure>
            <h4 className="text-xl font-bold mb-2">Engage Your Green Team</h4>
            <p>
              Are you part of a Green Team? Shape the future through
              volunteering opportunities where members use their skills to make
              a difference.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <figure className="mb-4">
              <CardIcon icon="energy" label="Energy monitoring" />
            </figure>
            <h4 className="text-xl font-bold mb-2">
              Connect with the Outdoors
            </h4>
            <p>
              Experience the joy of conservation by paddling, foraging, and more
              at events hosted by our 120+ local, Indigenous environmental
              partners.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <figure className="mb-4">
              <CardIcon icon="water" label="Water usage analytics" />
            </figure>
            <h4 className="text-xl font-bold mb-2">Accelerate Reforestation</h4>
            <p>
              Get hands-on by contributing to open source GIS tools that monitor
              water and soil data to accelerate ecosystem restoration in
              forests, rivers, and lakes.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <figure className="mb-4">
              <CardIcon icon="crowd" label="Crowdsourced eco action" />
            </figure>
            <h4 className="text-xl font-bold mb-2">
              Build for the Environment
            </h4>
            <p>
              Support community-trusted climate intelligence. Our AI model uses
              field sensor data to monitor biodiversity and optimize
              conservation decisions for our environmental partners.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">
            Deep Dive into Climate Tech
          </h3>
          <p className="text-lg mb-12">
            OpenEarth Academy is developed by tech workers who care deeply about
            sustainability and using technical skills to empower the work of
            researchers, scientists, and local communities who are at the
            frontlines of conservation in the United States, India, Colombia,
            Indonesia, and Brasil.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deepDiveCards.map(
              (
                card: JSX.IntrinsicAttributes & {
                  image: string;
                  alt: string;
                  subheader: string;
                  subheaderClass?: string;
                  header: string;
                  summary: string;
                },
                idx: Key | null | undefined
              ) => (
                <DeepDiveCard key={idx} {...card} />
              )
            )}
          </div>
        </div>
      </section>

      {/* Membership Fee */}
      <OpenEarthAcademyPromo />

      {/* Case Studies */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">
                Air Pollution Mitigation
              </h4>
              <p>
                Raised $10.11M of a $23M goal to reduce urban pollutants via
                citizen science.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Mangrove Restoration</h4>
              <p>
                Planted over 2M mangrove saplings in coastal regions to prevent
                erosion.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section id="signup" className="container mx-auto py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Sign Up For Environment News & Alerts
        </h3>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="border p-3 rounded flex-1"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded"
          >
            Subscribe
          </button>
        </form>
      </section>
      {/* Footer */}
      <footer className="bg-green-800 text-white p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p>MakeWebBetter</p>
            <p>123 Greenway Blvd, Suite 100</p>
            <p>+1 (800) 555-1234</p>
            <p>support@openearth.org</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Links</h5>
            <Link href="/privacy">Privacy Policy</Link>
            <br />
            <Link href="/terms">Terms of Use</Link>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/openearth" aria-label="Facebook">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://instagram.com/openearth"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
