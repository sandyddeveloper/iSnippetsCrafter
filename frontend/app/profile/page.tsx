"use client"

import * as React from "react"
import { Bell, ChevronDown, Menu,  Edit, Check, X, Globe } from "lucide-react"
import { Button } from "../../@/components/ui/button"
import { Input } from "../../@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../@/components/ui/tabs"
import { Label } from "../../@/components/ui/label"
import { Textarea } from "../../@/components/ui/textarea"
import { Switch } from "../../@/components/ui/switch"
import { Badge } from "../../@/components/ui/badge"






export default function EnhancedProfilePage() {
  const [isEditing, setIsEditing] = React.useState(false)
  const [isOnline, setIsOnline] = React.useState(true)
  const [doNotDisturb, setDoNotDisturb] = React.useState(false)
  const [profileData, setProfileData] = React.useState({
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    bio: "Passionate coder and snippet enthusiast. Always learning and sharing knowledge.",
    github: "github.com/johndoe",
    twitter: "twitter.com/johndoe",
    website: "johndoe.com",
    location: "San Francisco, CA",
    joinDate: "January 2022",
    snippetsCount: 42,
    favoritesCount: 15
  })

  const handleEdit = () => setIsEditing(true)
  const handleSave = () => setIsEditing(false)
  const handleCancel = () => setIsEditing(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-[#232323] text-[#FBFEEB]">
      {/* Header */}
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-[#1A1A1A] border-[#DCFE50]">
          <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Badge className={`absolute bottom-0 right-0 py-1 px-2  ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {isOnline ? 'Online' : 'Offline'}
                </Badge>
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-[#DCFE50]">{profileData.name}</CardTitle>
                <CardDescription className="text-[#FBFEEB]">@{profileData.username}</CardDescription>
                <div className="flex items-center mt-2">
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="text-sm">{profileData.location}</span>
                </div>
              </div>
            </div>
            {!isEditing ? (
              <Button onClick={handleEdit} className="bg-[#DCFE50] text-[#232323] hover:bg-[#FBFEEB]">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={handleSave} className="bg-[#DCFE50] text-[#232323] hover:bg-[#FBFEEB]">
                  <Check className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button onClick={handleCancel} variant="outline" className="border-[#DCFE50] text-[#FBFEEB] hover:bg-[#DCFE50] hover:text-[#232323]">
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="info" className="w-full">
            <TabsList className="flex items-center bg-[#232323] border-b border-[#DCFE50]">
  <TabsTrigger value="info" className="text-[#FBFEEB] data-[state=active]:text-[#DCFE50] flex-1 text-center">Profile</TabsTrigger>
  <TabsTrigger value="snippets" className="text-[#FBFEEB] data-[state=active]:text-[#DCFE50] flex-1 text-center">Snippets</TabsTrigger>
  <TabsTrigger value="activity" className="text-[#FBFEEB] data-[state=active]:text-[#DCFE50] flex-1 text-center">Activity</TabsTrigger>
</TabsList>

              <TabsContent value="info">
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#DCFE50]">Name</Label>
                      <Input
  id="name"
  name="name"
  value={profileData.name}
  onChange={handleChange}
  disabled={!isEditing}
  className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
/>

                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-[#DCFE50]">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        value={profileData.username}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#DCFE50]">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-[#DCFE50]">Website</Label>
                      <Input
                        id="website"
                        name="website"
                        value={profileData.website}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-[#DCFE50]">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={profileData.location}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="joinDate" className="text-[#DCFE50]">Join Date</Label>
                      <Input
                        id="joinDate"
                        name="joinDate"
                        value={profileData.joinDate}
                        disabled={true}
                        className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-[#DCFE50]">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={profileData.bio}
                      onChange={handleChange}
                      disabled={!isEditing}
                 className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github" className="text-[#DCFE50]">GitHub</Label>
                    <Input
                      id="github"
                      name="github"
                      value={profileData.github}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="text-[#DCFE50]">Twitter</Label>
                    <Input
                      id="twitter"
                      name="twitter"
                      value={profileData.twitter}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-[#232323] border border-[#DCFE50] text-[#FBFEEB] placeholder:text-[#FBFEEB] rounded-md p-2 focus:outline-none focus:border-[#DCFE50] focus:ring-2 focus:ring-[#DCFE50] w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="online-status"
                        checked={isOnline}
                        onCheckedChange={setIsOnline}
                      />
                      <Label htmlFor="online-status" className="text-[#FBFEEB]">Online Status</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="do-not-disturb"
                        checked={doNotDisturb}
                        onCheckedChange={setDoNotDisturb}
                      />
                      <Label htmlFor="do-not-disturb" className="text-[#FBFEEB]">Do Not Disturb</Label>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="snippets">
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-[#DCFE50]">Your Snippets</h3>
                    <Badge variant="secondary" className="bg-[#DCFE50] py-2 px-1 text-[#232323]">
                      Total: {profileData.snippetsCount}
                    </Badge>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-[#232323] border-[#DCFE50]">
                      <CardHeader>
                        <CardTitle className="text-[#FBFEEB]">React useEffect Hook</CardTitle>
                        <CardDescription className="text-[#FBFEEB] opacity-70">Created 2 days ago</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#FBFEEB]">A simple example of using the useEffect hook in React...</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" className="border-[#DCFE50] text-[#FBFEEB] hover:bg-[#DCFE50] hover:text-[#232323]">View</Button>
                        <Button variant="outline" className="border-[#DCFE50] text-[#FBFEEB] hover:bg-[#DCFE50] hover:text-[#232323]">Edit</Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-[#232323] border-[#DCFE50]">
                      <CardHeader>
                        <CardTitle className="text-[#FBFEEB]">Python Data Processing</CardTitle>
                        <CardDescription className="text-[#FBFEEB] opacity-70">Created 1 week ago</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#FBFEEB]">Efficient data processing using Pandas in Python...</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" className="border-[#DCFE50]   text-[#FBFEEB] hover:bg-[#DCFE50] hover:text-[#232323]">View</Button>
                        <Button variant="outline" className="border-[#DCFE50] text-[#FBFEEB] hover:bg-[#DCFE50] hover:text-[#232323]">Edit</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="activity">
                <div className="mt-4 space-y-4">
                  <h3 className="text-xl font-semibold text-[#DCFE50]">Recent Activity</h3>
                  <ul className="space-y-2">
                    <li className="bg-[#232323] p-3 rounded-md">
                      <p className="text-[#FBFEEB]">Added a new snippet: "Python Data Processing"</p>
                      <p className="text-sm text-[#FBFEEB] opacity-70">2 hours ago</p>
                    </li>
                    <li className="bg-[#232323] p-3 rounded-md">
                      <p className="text-[#FBFEEB]">Edited snippet: "JavaScript Array Methods"</p>
                      <p className="text-sm text-[#FBFEEB] opacity-70">Yesterday</p>
                    </li>
                    <li className="bg-[#232323] p-3 rounded-md">
                      <p className="text-[#FBFEEB]">Favorited snippet: "CSS Flexbox Layout"</p>
                      <p className="text-sm text-[#FBFEEB] opacity-70">3 days ago</p>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="text-sm text-[#FBFEEB] opacity-70">
              Member since: {profileData.joinDate}
            </div>
            <div className="flex space-x-2">
              <Badge variant="secondary" className="bg-[#DCFE50] py-2 px-1 text-[#232323]">
                {profileData.snippetsCount} Snippets
              </Badge>
              <Badge variant="secondary" className="bg-[#DCFE50] text-[#232323]">
                {profileData.favoritesCount} Favorites
              </Badge>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}