import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { mockCommunications } from '../data/mockData';
import { Mail, Phone, MessageSquare, Send, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function Communication() {
  const getTypeIcon = (type: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Email': <Mail className="w-4 h-4" />,
      'Call': <Phone className="w-4 h-4" />,
      'WhatsApp': <MessageSquare className="w-4 h-4" />,
      'SMS': <Send className="w-4 h-4" />,
      'Meeting': <Calendar className="w-4 h-4" />
    };
    return icons[type];
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Email': 'bg-blue-100 text-blue-700',
      'Call': 'bg-green-100 text-green-700',
      'WhatsApp': 'bg-emerald-100 text-emerald-700',
      'SMS': 'bg-purple-100 text-purple-700',
      'Meeting': 'bg-orange-100 text-orange-700'
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Communication Center</h1>
          <p className="text-gray-500 mt-1">Track all student interactions and communications</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          + New Communication
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Emails</p>
              <p className="text-xl font-bold text-gray-900">234</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Calls</p>
              <p className="text-xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">WhatsApp</p>
              <p className="text-xl font-bold text-gray-900">189</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Send className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">SMS</p>
              <p className="text-xl font-bold text-gray-900">67</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Meetings</p>
              <p className="text-xl font-bold text-gray-900">45</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Communication Timeline */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Communications</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="call">Calls</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Communication Timeline</h3>
            <div className="space-y-6">
              {mockCommunications.map((comm) => (
                <div key={comm.id} className="flex gap-4">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className={`${getTypeColor(comm.type)} w-10 h-10 rounded-full flex items-center justify-center`}>
                      {getTypeIcon(comm.type)}
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{comm.studentName}</h4>
                          <p className="text-xs text-gray-500 mt-1">{comm.timestamp}</p>
                        </div>
                        <Badge className={getTypeColor(comm.type)}>
                          {comm.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 mt-3">{comm.message}</p>
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          By: <span className="font-medium">{comm.counselor}</span>
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {comm.direction}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="p-6">
            <p className="text-gray-500">Email communications will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="call">
          <Card className="p-6">
            <p className="text-gray-500">Call logs will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp">
          <Card className="p-6">
            <p className="text-gray-500">WhatsApp conversations will be displayed here.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
