import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Bot, Send, Sparkles, TrendingUp, AlertCircle } from 'lucide-react';

export function AIAssistant() {
  const [message, setMessage] = useState('');

  const aiInsights = [
    {
      id: 1,
      title: 'High-Value Lead Identified',
      description: 'Rahul Sharma shows 92% probability of enrollment based on engagement patterns',
      score: 92,
      action: 'Schedule follow-up call',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Enrollment Prediction',
      description: 'Expected 15% increase in enrollments for MBA program next month',
      score: 85,
      action: 'Prepare resources',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Lead Risk Alert',
      description: 'Ananya Gupta at risk of dropping - no contact in 7 days',
      score: 68,
      action: 'Immediate follow-up required',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Campaign Optimization',
      description: 'Social Media campaigns showing 23% better ROI than Google Ads',
      score: 78,
      action: 'Reallocate budget',
      priority: 'medium'
    }
  ];

  const chatHistory = [
    { role: 'assistant', message: 'Hello! I\'m your AI admission assistant. How can I help you today?' },
    { role: 'user', message: 'What are the top leads I should focus on this week?' },
    { role: 'assistant', message: 'Based on lead scoring and engagement patterns, here are your top 3 leads:\n\n1. Rahul Sharma (Score: 92) - MBA program, high engagement\n2. Vikram Reddy (Score: 88) - BBA program, application started\n3. Divya Iyer (Score: 85) - MS CS program, ready for admission offer\n\nWould you like detailed insights on any of these leads?' }
  ];

  const leadScorePredictions = [
    { name: 'Rahul Sharma', score: 92, trend: 'up', probability: 'Very High' },
    { name: 'Vikram Reddy', score: 88, trend: 'up', probability: 'High' },
    { name: 'Divya Iyer', score: 85, trend: 'up', probability: 'High' },
    { name: 'Pooja Menon', score: 78, trend: 'stable', probability: 'Medium' },
    { name: 'Ananya Gupta', score: 68, trend: 'down', probability: 'Medium' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
          <p className="text-gray-500 mt-1">Intelligent insights and predictions for your admissions</p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-lg border border-blue-200">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">AI Powered</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Chat Interface */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI Chat Assistant</h3>
              <p className="text-sm text-gray-500">Ask questions about leads, predictions, and insights</p>
            </div>
          </div>

          {/* Chat History */}
          <div className="h-96 overflow-y-auto mb-4 space-y-4 bg-gray-50 rounded-lg p-4">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    chat.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{chat.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Ask AI about leads, predictions, or insights..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* AI Lead Scoring */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Lead Scoring</h3>
          </div>
          <div className="space-y-3">
            {leadScorePredictions.map((lead) => (
              <div key={lead.name} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900 text-sm">{lead.name}</p>
                  <Badge
                    className={
                      lead.score >= 85
                        ? 'bg-green-100 text-green-700'
                        : lead.score >= 70
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }
                  >
                    {lead.score}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">{lead.probability} Probability</span>
                  <span
                    className={`flex items-center gap-1 ${
                      lead.trend === 'up'
                        ? 'text-green-600'
                        : lead.trend === 'down'
                        ? 'text-red-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {lead.trend === 'up' ? '↑' : lead.trend === 'down' ? '↓' : '→'}
                    {lead.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* AI Insights */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {aiInsights.map((insight) => (
            <Card key={insight.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  insight.priority === 'high'
                    ? 'bg-red-100'
                    : 'bg-blue-100'
                }`}>
                  {insight.priority === 'high' ? (
                    <AlertCircle className={`w-6 h-6 ${
                      insight.priority === 'high' ? 'text-red-600' : 'text-blue-600'
                    }`} />
                  ) : (
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                    <Badge
                      className={
                        insight.priority === 'high'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-blue-100 text-blue-700'
                      }
                    >
                      {insight.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      Confidence: {insight.score}%
                    </span>
                    <Button variant="outline" size="sm">
                      {insight.action}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Predictive Analytics */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">Expected Enrollments</p>
            <p className="text-4xl font-bold text-blue-600">127</p>
            <p className="text-xs text-gray-600 mt-2">Next 30 days</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">Revenue Forecast</p>
            <p className="text-4xl font-bold text-green-600">₹6.2M</p>
            <p className="text-xs text-gray-600 mt-2">Next quarter</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">Optimal Response Time</p>
            <p className="text-4xl font-bold text-purple-600">2.3h</p>
            <p className="text-xs text-gray-600 mt-2">Average for best conversion</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
