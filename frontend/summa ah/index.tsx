'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SnippetList from '@/components/SnippetList'
import TagManager from '@/components/TagManager'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function SnippetManager() {
  const { user } = useUser()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} selectedTags={selectedTags} onTagSelect={setSelectedTags} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar user={user} onMenuClick={toggleSidebar} onSearch={setSearchQuery} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
            <div className="container mx-auto px-6 py-8">
              <TagManager selectedTags={selectedTags} onTagSelect={setSelectedTags} />
              <SnippetList selectedTags={selectedTags} searchQuery={searchQuery} />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}