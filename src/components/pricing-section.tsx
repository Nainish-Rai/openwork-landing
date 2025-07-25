"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 max-w-5xl mx-auto md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground text-balance text-3xl font-semibold md:text-5xl"
          >
            <span className="text-muted-foreground">
              Build Autonomous Agents with
            </span>{" "}
            No-Code Framework
          </motion.h2>
        </div>
        <p className="text-muted-foreground mx-auto mt-8 max-w-[30rem] text-balance text-center text-base leading-snug tracking-wide sm:text-lg">
          Plan, manage, and track all product initiatives with OpenWork’s visual
          planning tools.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-medium">Free</CardTitle>
            <span className="my-3 block text-2xl font-semibold">$0 / mo</span>
            <CardDescription className="text-sm">Per user</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <hr className="border-dashed" />

            <ul className="list-outside space-y-3 text-sm">
              {[
                "Core Agent Framework",
                "Unlimited Community Support",
                "Open-Source Integrations",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-3" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <Link href="">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative">
          <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
            Popular
          </span>

          <div className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Pro</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $19 / mo
              </span>
              <CardDescription className="text-sm">Per user</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 mb-6 text-sm">
                {[
                  "Everything in Free Plan",
                  "Priority Email Support",
                  "Advanced Agent Templates",
                  "Team Collaboration Tools",
                  "Role-Based Access Control",
                  "Early Access to New Features",
                  "Custom API Integrations",
                  "Usage Analytics",
                  "Monthly Community Calls",
                  "Enhanced Security Features",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </div>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-medium">Startup</CardTitle>
            <span className="my-3 block text-2xl font-semibold">$29 / mo</span>
            <CardDescription className="text-sm">Per user</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <hr className="border-dashed" />

            <ul className="list-outside space-y-3 text-sm">
              {[
                "Everything in Pro Plan",
                "Dedicated Support Channel",
                "Onboarding Assistance",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-3" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <Link href="">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
