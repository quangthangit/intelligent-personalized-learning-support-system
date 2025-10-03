// app/[locale]/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Brain,
  Calendar,
  Clock,
  HelpCircle,
  LayoutDashboard,
  TrendingUp,
  Users,
  Trophy,
  Target,
  BarChart3,
  BookMarked,
  Timer,
} from "lucide-react";
import HeaderClient from "@/components/header-client";
import { AppSideBar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

type ViewType = "overview" | "analytics";

// FeatureGrid Component
function FeatureGrid() {
  const features = [
    {
      title: "Study Materials",
      description: "Create and organize your learning materials",
      icon: BookOpen,
      color: "bg-blue-500",
      stats: "24 Documents",
      progress: 75,
    },
    {
      title: "Practice Quizzes",
      description: "Test your knowledge with interactive quizzes",
      icon: HelpCircle,
      color: "bg-green-500",
      stats: "12 Completed",
      progress: 60,
    },
    {
      title: "Mind Maps",
      description: "Visualize concepts and connections",
      icon: Brain,
      color: "bg-purple-500",
      stats: "8 Created",
      progress: 40,
    },
    {
      title: "Study Schedule",
      description: "Plan and track your learning journey",
      icon: Calendar,
      color: "bg-orange-500",
      stats: "5 Sessions",
      progress: 85,
    },
    {
      title: "Reading List",
      description: "Manage your reading materials",
      icon: BookMarked,
      color: "bg-teal-500",
      stats: "15 Books",
      progress: 30,
    },
    {
      title: "Pomodoro Timer",
      description: "Stay focused with time management",
      icon: Timer,
      color: "bg-red-500",
      stats: "45 Sessions",
      progress: 90,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Learning Dashboard
          </h2>
          <p className="text-muted-foreground">
            Track your progress and explore learning tools
          </p>
        </div>
        <Button>
          <Target className="mr-2 h-4 w-4" />
          Set Goals
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Study Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47.5 hrs</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Groups</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active groups</p>
          </CardContent>
        </Card>
      </div>

      {/* Feature Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {feature.stats}
                    </span>
                    <Badge variant="secondary">{feature.progress}%</Badge>
                  </div>
                  <Progress value={feature.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest learning activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Completed quiz",
                subject: "Mathematics",
                time: "2 hours ago",
                icon: HelpCircle,
              },
              {
                action: "Created mind map",
                subject: "Biology",
                time: "1 day ago",
                icon: Brain,
              },
              {
                action: "Read chapter",
                subject: "Physics",
                time: "2 days ago",
                icon: BookOpen,
              },
              {
                action: "Study session",
                subject: "Chemistry",
                time: "3 days ago",
                icon: Clock,
              },
            ].map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.subject}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Analytics Section Component
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">
            Detailed insights into your learning progress
          </p>
        </div>
        <Button variant="outline">
          <BarChart3 className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your study hours this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">24.5 hours</div>
            <div className="space-y-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-sm w-8">{day}</span>
                    <Progress value={Math.random() * 100} className="h-2" />
                    <span className="text-xs text-muted-foreground w-8">
                      {(Math.random() * 5).toFixed(1)}h
                    </span>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subject Distribution</CardTitle>
            <CardDescription>Time spent by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  subject: "Mathematics",
                  percentage: 35,
                  color: "bg-blue-500",
                },
                { subject: "Physics", percentage: 25, color: "bg-green-500" },
                {
                  subject: "Chemistry",
                  percentage: 20,
                  color: "bg-purple-500",
                },
                { subject: "Biology", percentage: 20, color: "bg-orange-500" },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{item.subject}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Your learning statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Average Score</span>
                <Badge>87%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Completion Rate</span>
                <Badge variant="secondary">92%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Study Efficiency</span>
                <Badge variant="outline">High</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Focus Time</span>
                <Badge>4.2h/day</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Charts Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Study Trends</CardTitle>
            <CardDescription>Your study patterns over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted rounded-lg">
              <p className="text-muted-foreground">Chart placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Goal Progress</CardTitle>
            <CardDescription>Track your learning goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { goal: "Complete 10 courses", progress: 80 },
                { goal: "Study 100 hours", progress: 65 },
                { goal: "Read 20 books", progress: 45 },
                { goal: "Join 5 study groups", progress: 100 },
              ].map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{goal.goal}</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Main HomePage Component
export default function DashboardPage() {
  const [activeView, setActiveView] = useState<ViewType>("overview");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSideBar />
        <SidebarInset className="flex-1">
          <HeaderClient />
          <main className="flex-1 p-6 space-y-6">
            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={activeView === "overview" ? "default" : "outline"}
                onClick={() => setActiveView("overview")}
                size="sm"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Button>
              <Button
                variant={activeView === "analytics" ? "default" : "outline"}
                onClick={() => setActiveView("analytics")}
                size="sm"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </div>

            {/* Main Content */}
            {activeView === "overview" ? <FeatureGrid /> : <AnalyticsSection />}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
