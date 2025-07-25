"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowUp,
  Globe,
  Play,
  Plus,
  Signature,
  Sparkles,
  GitFork,
  Eye,
  Star,
  Brain,
  Workflow,
  Zap,
  Database,
  Shield,
  Plug,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground text-balance text-3xl font-semibold md:text-4xl"
          >
            <span className="text-muted-foreground">
              Build Autonomous Agents with No-Code
            </span>{" "}
            Features Section
          </motion.h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="col-span-full space-y-4">
              <Card className="overflow-hidden px-6 sm:col-span-2">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8"
                >
                  <OpenSourceIllustration />
                </motion.div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <motion.h3 className="text-foreground text-lg font-semibold">
                  Truly Open Source. No Asterisks.
                </motion.h3>
                <motion.p className="text-muted-foreground mt-3 text-balance">
                  Our repository is public. Fork it, inspect it, contribute to
                  it. No black boxes. What you see is what you get.
                </motion.p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <AutonomousAgentIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Autonomous, Not Just Automated.
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Build agents that can reason, delegate, and execute complex
                  tasks.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="overflow-hidden p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <BringYourStackIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Bring Your Own Stack.
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Works with your private models and internal APIs. It's your
                  agent, your rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OpenSourceIllustration = () => {
  return (
    <Card
      aria-hidden
      className="p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      {/* Repository Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-foreground/5 flex size-8 items-center justify-center rounded-lg border">
          <GitFork className="size-4 text-foreground/60" />
        </div>
        <div>
          <div className="text-sm font-medium">autonomous-agents</div>
          <div className="text-muted-foreground text-xs">Public repository</div>
        </div>
      </div>

      {/* Repository Stats */}
      <div className="mb-4 flex gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="size-3" />
          <span className="text-xs">1.2k</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="size-3" />
          <span className="text-xs">234</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="size-3" />
          <span className="text-xs">89</span>
        </div>
      </div>

      {/* File Tree */}
      <div className="bg-foreground/5 rounded-lg p-3 space-y-2 border">
        <div className="text-muted-foreground text-xs font-medium mb-2">
          Source Code
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>src/agents/</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>docs/</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>examples/</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>tests/</span>
          </div>
        </div>
      </div>

      {/* License Badge */}
      <div className="mt-3 flex justify-center">
        <div className="bg-foreground/10 text-foreground/80 px-2 py-1 rounded-full text-xs font-medium border">
          MIT License
        </div>
      </div>
    </Card>
  );
};

const AutonomousAgentIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      {/* Agent Brain */}
      <div className="mb-4 flex justify-center">
        <div className="bg-foreground/10 flex size-10 items-center justify-center rounded-full border">
          <Brain className="size-5 text-foreground/60" />
        </div>
      </div>

      {/* Agent Status */}
      <div className="mb-4 text-center">
        <div className="text-sm font-medium">Autonomous Agent</div>
        <div className="text-muted-foreground text-xs flex items-center justify-center gap-1 mt-1">
          <div className="bg-foreground/40 size-1.5 rounded-full"></div>
          Active & Reasoning
        </div>
      </div>

      {/* Task Flow */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Workflow className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Task Planning
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Zap className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Execution
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Brain className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Learning
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Indicator */}
      <div className="mt-4 text-center">
        <div className="text-muted-foreground text-xs">
          Making autonomous decisions...
        </div>
      </div>
    </Card>
  );
};

const BringYourStackIllustration = () => {
  return (
    <div aria-hidden className="relative">
      {/* Main Integration Hub */}
      <Card className="p-4">
        <div className="mb-3 flex items-center justify-center">
          <div className="bg-foreground/10 flex size-8 items-center justify-center rounded-full border">
            <Plug className="size-4 text-foreground/60" />
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-sm font-medium">Your Stack Integration</div>
          <div className="text-muted-foreground text-xs">Private & Secure</div>
        </div>

        {/* Integration Points */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Database className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Private DB
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Shield className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Internal API
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Brain className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Custom Model
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Workflow className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Your Rules
            </div>
          </div>
        </div>
      </Card>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-foreground/10 h-px w-full"></div>
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-foreground/10 w-px h-full"></div>
      </div> */}
    </div>
  );
};
