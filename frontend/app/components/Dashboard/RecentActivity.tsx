import { Card, CardContent, CardHeader, CardTitle } from "../../../@/components/ui/card"

export default function RecentActivity() {
  const activities = [
    { user: "Jane Doe", action: "added a new snippet", time: "1 hour ago" },
    { user: "John Smith", action: "favorited a snippet", time: "2 hours ago" },
    { user: "Emily Davis", action: "created a new category", time: "3 hours ago" },
  ]

  return (
    <Card className="bg-[#1A1A1A] border-[#DCFE50]">
      <CardHeader>
        <CardTitle className="text-[#DCFE50]">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex justify-between items-center text-[#FBFEEB]">
              <span>{activity.user} {activity.action}</span>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
