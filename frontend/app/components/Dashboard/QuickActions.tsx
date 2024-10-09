import { Button } from "../../../@/components/ui/button"
import { Plus, Code, Tag } from "lucide-react"

export default function QuickActions() {
  return (
    <div className="space-x-4">
      <Button className="bg-[#DCFE50] hover:bg-[#FBFEEB] text-[#232323]">
        <Plus className="mr-2 h-4 w-4" />
        Add Snippet
      </Button>
      <Button className="bg-[#DCFE50] hover:bg-[#FBFEEB] text-[#232323]">
        <Code className="mr-2 h-4 w-4" />
        Add Category
      </Button>
      <Button className="bg-[#DCFE50] hover:bg-[#FBFEEB] text-[#232323]">
        <Tag className="mr-2 h-4 w-4" />
        Add Tag
      </Button>
    </div>
  )
}
