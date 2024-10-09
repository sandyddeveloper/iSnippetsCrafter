import { Card, CardContent, CardHeader, CardTitle } from "../../../@/components/ui/card"

export default function SnippetStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-[#1A1A1A] border-[#DCFE50]">
        <CardHeader>
          <CardTitle className="text-[#DCFE50]">Total Snippets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">128</p>
        </CardContent>
      </Card>
      <Card className="bg-[#1A1A1A] border-[#DCFE50]">
        <CardHeader>
          <CardTitle className="text-[#DCFE50]">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">12</p>
        </CardContent>
      </Card>
      <Card className="bg-[#1A1A1A] border-[#DCFE50]">
        <CardHeader>
          <CardTitle className="text-[#DCFE50]">Favorites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">24</p>
        </CardContent>
      </Card>
      <Card className="bg-[#1A1A1A] border-[#DCFE50]">
        <CardHeader>
          <CardTitle className="text-[#DCFE50]">Last Added</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">2 hours ago</p>
        </CardContent>
      </Card>
    </div>
  )
}
