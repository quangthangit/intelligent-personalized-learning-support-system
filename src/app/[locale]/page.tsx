import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  TrendingUp,
  Play,
  Star,
  Sparkles,
} from "lucide-react";
import BaseLayoutServer from "@/components/layout/base-layout-server";

export default function HomePage() {
  return (
    <BaseLayoutServer>
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-sm font-medium border border-teal-200">
              <Sparkles className="h-4 w-4 text-teal-500" />
              <span>Trusted by 50,000+ learners worldwide</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Transform your future with{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                world-class
              </span>{" "}
              education
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
              Access expert-led courses, connect with a global community, and
              achieve your learning goals with personalized pathways designed
              for success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base h-12 px-8 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get started free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-8 gap-2 bg-transparent border-teal-300 text-teal-600 hover:bg-teal-50 hover:border-teal-400"
              >
                <Play className="h-5 w-5" />
                Watch demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <p className="text-muted-foreground">from 12k reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-100 p-8 border border-teal-200">
              <Card className="absolute top-8 left-8 shadow-xl border-teal-200 hover:shadow-2xl transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Course completion
                      </p>
                      <p className="text-2xl font-bold text-teal-600">+150%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute bottom-8 right-8 shadow-xl border-cyan-200 hover:shadow-2xl transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Certificates earned
                      </p>
                      <p className="text-2xl font-bold text-cyan-600">
                        25,000+
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayoutServer>
  );
}
