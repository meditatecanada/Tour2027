"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes-data";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Routes() {
  return (
    <section id="routes" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-teal font-medium mb-3">
            Summer 2027
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-soul-stone-blue mb-4">
            The Four Routes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your path across Canada. Each route visits major cities and
            existing collectives, giving Self Realization at every stop.
          </p>
        </div>

        {/* Route cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {routes.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background image */}
              <Image
                src={route.image}
                alt={route.imageAlt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Route number badge */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#3194ED] flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-white text-sm">
                  {route.id}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/60 text-xs tracking-widest uppercase mb-1">
                  Route {route.id}
                </p>
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {route.name}
                </h3>
                <p className="text-gold-light text-xs italic mb-3">
                  {route.tagline}
                </p>

                {/* Cities */}
                <div className="flex items-start gap-1.5 mb-4">
                  <MapPin className="h-3.5 w-3.5 text-teal mt-0.5 shrink-0" />
                  <p className="text-white/70 text-xs leading-relaxed">
                    {route.cities.join(" · ")}
                  </p>
                </div>

                {/* CTA — visible on hover */}
                <a href="#join">
                  <Button
                    size="sm"
                    className="w-full bg-teal hover:bg-teal/90 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Join This Route
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Routes convergence strip */}
        <div className="mt-16">
          <p className="text-center text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">
            All routes side-by-side
          </p>

          <div className="bg-cream rounded-2xl p-6 md:p-8 overflow-x-auto">
            <div className="min-w-[560px]">
              {/* Route labels */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {routes.map((route) => (
                  <div
                    key={route.id}
                    className="text-center py-2 px-3 rounded-lg bg-teal-dark/10"
                  >
                    <p className="text-xs font-bold text-soul-stone-blue uppercase tracking-wide">
                      {route.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Convergence arrows */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {routes.map((route) => (
                  <div
                    key={route.id}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-0.5 h-8 bg-teal/30" />
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-teal/40" />
                  </div>
                ))}
              </div>

              {/* Toronto convergence */}
              <div className="bg-teal text-white rounded-xl py-3 px-4 text-center mb-3 mx-4 md:mx-12">
                <p className="font-heading font-bold text-sm">
                  Toronto Mega Program
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  All four routes unite · Late Summer 2027
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-3">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gold/50" />
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-gold/60" />
                </div>
              </div>

              {/* Canajoharie */}
              <div className="bg-[#3194ED] text-white rounded-xl py-3 px-4 text-center mx-8 md:mx-20">
                <p className="font-heading font-bold text-sm">
                  International Shri Krishna Puja
                </p>
                <p className="text-white/80 text-xs mt-0.5">
                  Canajoharie, New York · Optional Charter Bus from Toronto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
