'use client'

import { MessageCircle, Award, Clock, Globe } from 'lucide-react'

interface Host {
  name: string
  image: string
  isSuperhost: boolean
  joinDate: string
  responseRate: number
  responseTime: string
  about: string
  languages: string[]
  work: string
  coHosts?: Array<{
    name: string
    image: string
  }>
}

interface HostSectionProps {
  host: Host
}

export default function HostSection({ host }: HostSectionProps) {
  return (
    <div className="py-12 border-b">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src={host.image}
            alt={host.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Hosted by {host.name}</h2>
            <p className="text-gray-500">Joined in {host.joinDate}</p>
          </div>
        </div>
        <button className="px-6 py-3 border border-gray-900 rounded-lg font-medium">
          Message host
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6" />
          <div>
            <p className="font-medium">Superhost</p>
            <p className="text-gray-500">Experienced, highly rated hosts</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6" />
          <div>
            <p className="font-medium">{host.responseRate}% response rate</p>
            <p className="text-gray-500">Responds in {host.responseTime}</p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-6">{host.about}</p>

      {host.coHosts && host.coHosts.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium mb-4">Co-hosts</h3>
          <div className="flex items-center gap-4">
            {host.coHosts.map((coHost) => (
              <div key={coHost.name} className="flex items-center gap-2">
                <img
                  src={coHost.image}
                  alt={coHost.name}
                  className="w-12 h-12 rounded-full"
                />
                <span>{coHost.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Globe className="w-6 h-6" />
          <p>Speaks {host.languages.join(', ')}</p>
        </div>
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6" />
          <p>Work: {host.work}</p>
        </div>
      </div>
    </div>
  )
} 