"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Compass,
  BookOpen,
  HelpCircle,
  CreditCard,
  FolderOpen,
  FileText,
  Brain,
  BookMarked,
  Users,
  Timer,
  Calendar,
  LayoutGrid,
  GraduationCap,
  UsersRound,
  Trophy,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LocalizedLink } from "../localized-link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function AppSideBar() {
  const [openGroups, setOpenGroups] = useState({
    overview: true,
    contentCreation: true,
    studyTools: true,
    planning: true,
    social: true,
  })

  const toggleGroup = (groupName: keyof typeof openGroups) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }))
  }

  return (
    <Sidebar className="border-r border-gray-200/80 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/50 dark:border-gray-800">
      <SidebarHeader className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              Edumentum
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Learning Platform</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4 space-y-2">
        {/* Overview Section */}
        <Collapsible open={openGroups.overview} onOpenChange={() => toggleGroup('overview')}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between h-8 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Overview
                {openGroups.overview ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 mt-2">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200">
                      <LocalizedLink href="/dashboard" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                          <LayoutDashboard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">Dashboard</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all duration-200">
                      <LocalizedLink href="/explore" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50 group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
                          <Compass className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-400">Explore</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Content Creation Section */}
        <Collapsible open={openGroups.contentCreation} onOpenChange={() => toggleGroup('contentCreation')}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between h-8 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Content Creation
                {openGroups.contentCreation ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 mt-2">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/50 transition-all duration-200">
                      <LocalizedLink href="/materials" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50 group-hover:bg-green-200 dark:group-hover:bg-green-900 transition-colors">
                          <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-700 dark:group-hover:text-green-400">Materials</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/50 transition-all duration-200">
                      <LocalizedLink href="/quizzes" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/50 group-hover:bg-orange-200 dark:group-hover:bg-orange-900 transition-colors">
                          <HelpCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-700 dark:group-hover:text-orange-400">Quizzes</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-950/50 transition-all duration-200">
                      <LocalizedLink href="/flashcards" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900/50 group-hover:bg-pink-200 dark:group-hover:bg-pink-900 transition-colors">
                          <CreditCard className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-pink-700 dark:group-hover:text-pink-400">Flashcards</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-200">
                      <LocalizedLink href="/collections" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900 transition-colors">
                          <FolderOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-400">Collections</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Study Tools Section */}
        <Collapsible open={openGroups.studyTools} onOpenChange={() => toggleGroup('studyTools')}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between h-8 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Study Tools
                {openGroups.studyTools ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 mt-2">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200">
                      <LocalizedLink href="/notes" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                          <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">Notes</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-all duration-200">
                      <LocalizedLink href="/mind-map" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/50 group-hover:bg-violet-200 dark:group-hover:bg-violet-900 transition-colors">
                          <Brain className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-violet-700 dark:group-hover:text-violet-400">Mind Map</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-950/50 transition-all duration-200">
                      <LocalizedLink href="/reader" className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/50 group-hover:bg-teal-200 dark:group-hover:bg-teal-900 transition-colors">
                            <BookMarked className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                          </div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-700 dark:group-hover:text-teal-400">Reader</span>
                        </div>
                        <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs">
                          New
                        </Badge>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all duration-200">
                      <LocalizedLink href="/tutors" className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900 transition-colors">
                            <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">Tutors</span>
                        </div>
                        <Badge className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs">
                          Beta
                        </Badge>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/50 transition-all duration-200">
                      <LocalizedLink href="/pomodoro" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/50 group-hover:bg-red-200 dark:group-hover:bg-red-900 transition-colors">
                          <Timer className="h-4 w-4 text-red-600 dark:text-red-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-700 dark:group-hover:text-red-400">Pomodoro</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Planning & Organization Section */}
        <Collapsible open={openGroups.planning} onOpenChange={() => toggleGroup('planning')}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between h-8 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Planning & Organization
                {openGroups.planning ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 mt-2">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-950/50 transition-all duration-200">
                      <LocalizedLink href="/planner" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/50 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900 transition-colors">
                          <Calendar className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-400">Planner</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-all duration-200">
                      <LocalizedLink href="/kanban" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/50 group-hover:bg-amber-200 dark:group-hover:bg-amber-900 transition-colors">
                          <LayoutGrid className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-amber-400">Kanban Board</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Social Progress Section */}
        <Collapsible open={openGroups.social} onOpenChange={() => toggleGroup('social')}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between h-8 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Social Progress
                {openGroups.social ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 mt-2">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200">
                      <LocalizedLink href="/course" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                          <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">Course</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all duration-200">
                      <LocalizedLink href="/study-group" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50 group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
                          <UsersRound className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-400">Study Group</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="group h-10 px-3 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-950/50 transition-all duration-200">
                      <LocalizedLink href="/achievements" className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/50 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900 transition-colors">
                          <Trophy className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-700 dark:group-hover:text-yellow-400">Achievements</span>
                      </LocalizedLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}
