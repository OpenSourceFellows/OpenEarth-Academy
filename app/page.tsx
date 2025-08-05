import Link from "next/link";
import Image from "next/image";
import { CardIcon } from "./CardIcon";
import { DeepDiveCard } from "./DeepDiveCard";
import OpenEarthAcademyPromo from "./OpenEarthAcademyPromo";
import { Stats } from "./Stats";
import { Slider } from "./Slider";
import { slides } from "./data/slides";

//@ts-ignore

import { deepDiveCards } from "./data/cardData";
import { JSX, Key } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="p-6 text-white bg-gray-400">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-3xl font-bold">OpenEarth Academy</h1>
          {/* <nav className="flex space-x-4">
            <Link href="#donate" className="hover:underline">
              Get Updates
            </Link>
            <Link
              href="#signup"
              className="px-4 py-2 text-green-600 bg-white rounded"
            >
              Sign Up
            </Link>
          </nav> */}
        </div>
      </header>
      {/* Hero Section */}
      <section
        className="relative flex-grow bg-gray-100 bg-center bg-cover"
        style={{
          backgroundImage: "url(/images/banner-one.png)",
        }}
      >
        <div className="container mx-auto text-center py-36">
          <h2 className="mb-4 text-4xl font-bold">
            Join the OpenEarth Academy. Code for the Environment
          </h2>
          <p className="mb-8 text-lg">
            Empower communities to fight climate change through code, data, and
            actionable projects.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="#donate"
              className="px-6 py-3 text-white bg-green-600 rounded"
            >
              Get Updates
            </Link>
            {/* <Link
              href="#signup"
              className="px-6 py-3 text-green-600 border border-green-600 rounded"
            >
              Sign Up
            </Link> */}
          </div>
        </div>
      </section>
      {/* Curriculum Highlights */}
      <section className="container py-16 mx-auto">
        <h3 className="mb-12 text-3xl font-semibold text-center">
          Explore Effective Strategies and Take Action
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded shadow">
            <figure className="mb-4">
              <CardIcon icon="gis" label="GIS analysis" />
            </figure>
            <h4 className="mb-2 text-xl font-bold">
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
            <h4 className="mb-2 text-xl font-bold">
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
            <h4 className="mb-2 text-xl font-bold">Engage Your Green Team</h4>
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
            <h4 className="mb-2 text-xl font-bold">
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
            <h4 className="mb-2 text-xl font-bold">Accelerate Reforestation</h4>
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
            <h4 className="mb-2 text-xl font-bold">
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
      <section className="py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h3 className="mb-8 text-3xl font-semibold">
            Deep Dive into Climate Tech
          </h3>
          <p className="mb-12 text-lg">
            OpenEarth Academy is developed by tech workers who care deeply about
            sustainability and using technical skills to empower the work of
            researchers, scientists, and local communities who are at the
            frontlines of conservation in the United States, India, Colombia,
            Indonesia, and Brasil.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
      <Stats />
      <Slider slides={slides} />;{/* Footer */}
      {/* <footer className="p-6 text-white bg-green-800">
        <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          <div>
            <h5 className="mb-2 font-semibold">Contact</h5>
            <p>MakeWebBetter</p>
            <p>123 Greenway Blvd, Suite 100</p>
            <p>+1 (800) 555-1234</p>
            <p>support@openearth.org</p>
          </div>
          <div>
            <h5 className="mb-2 font-semibold">Links</h5>
            <Link href="/privacy">Privacy Policy</Link>
            <br />
            <Link href="/terms">Terms of Use</Link>
          </div>
          <div>
            <h5 className="mb-2 font-semibold">Follow Us</h5>
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
      </footer> */}
    </div>
  );
}
