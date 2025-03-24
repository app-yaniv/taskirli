"use client";

import Image from "next/image";
import Link from "next/link";

interface StepProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

const StepCard = ({ number, title, description, image }: StepProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-16 py-12">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#FF385C] text-white flex items-center justify-center text-base">
            {number}
          </div>
          <h2 className="text-[22px] font-semibold text-[#222222]">{title}</h2>
        </div>
        <p className="text-[#717171] text-lg">{description}</p>
      </div>
      <div className="flex-1 relative w-full aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          priority={number === 1}
        />
      </div>
    </div>
  );
};

export default function HostOnboarding() {
  const steps = [
    {
      number: 1,
      title: "Tell us about your place",
      description: "Share some basic info, like where it is and how many guests can stay.",
      image: "/images/host-step-1.svg",
    },
    {
      number: 2,
      title: "Make it stand out",
      description: "Add photos, amenities, and details to help guests know exactly what to expect.",
      image: "/images/host-step-2.svg",
    },
    {
      number: 3,
      title: "Finish up and publish",
      description: "Review your listing details and publish it to start welcoming guests.",
      image: "/images/host-step-3.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center py-24">
          <h1 className="text-[48px] font-semibold text-[#222222] mb-4 tracking-tight">
            It's easy to get started on Taskirli
          </h1>
          <p className="text-[#717171] text-xl">
            Follow these simple steps to list your property
          </p>
        </div>

        <div className="divide-y border-y">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        <div className="py-12 text-center">
          <Link
            href="/host/create"
            className="inline-block bg-[#FF385C] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D70466] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 