import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { mockCampaigns } from '../data/mockData';
import { Plus, TrendingUp, DollarSign, Users, Target } from 'lucide-react';

export function Marketing() {
  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Active': 'bg-green-100 text-green-700',
      'Paused': 'bg-yellow-100 text-yellow-700',
      'Completed': 'bg-gray-100 text-gray-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const totalStats = mockCampaigns.reduce((acc, campaign) => ({
    leads: acc.leads + campaign.leads,
    conversions: acc.conversions + campaign.conversions,
    budget: acc.budget + campaign.budget,
    spent: acc.spent + campaign.spent
  }), { leads: 0, conversions: 0, budget: 0, spent: 0 });

  const conversionRate = ((totalStats.conversions / totalStats.leads) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketing Campaigns</h1>
          <p className="text-gray-500 mt-1">Manage and track your marketing campaigns</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Leads</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{totalStats.leads}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversions</p>
              <h3 className="text-2xl font-bold text-green-600 mt-2">{totalStats.conversions}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-purple-600 mt-2">{conversionRate}%</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Spent</p>
              <h3 className="text-2xl font-bold text-orange-600 mt-2">₹{(totalStats.spent / 1000).toFixed(0)}K</h3>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockCampaigns.map((campaign) => {
          const budgetUsed = (campaign.spent / campaign.budget) * 100;
          const roi = ((campaign.conversions * 50000 - campaign.spent) / campaign.spent * 100).toFixed(0);

          return (
            <Card key={campaign.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{campaign.type}</p>
                  </div>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600">Leads Generated</p>
                    <p className="text-2xl font-bold text-blue-600 mt-1">{campaign.leads}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Conversions</p>
                    <p className="text-2xl font-bold text-green-600 mt-1">{campaign.conversions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Conversion Rate</p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      {((campaign.conversions / campaign.leads) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">ROI</p>
                    <p className="text-lg font-semibold text-purple-600 mt-1">{roi}%</p>
                  </div>
                </div>

                {/* Budget Progress */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Budget Used</span>
                    <span className="text-sm font-semibold text-gray-900">
                      ₹{(campaign.spent / 1000).toFixed(0)}K / ₹{(campaign.budget / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <Progress value={budgetUsed} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">{budgetUsed.toFixed(0)}% of budget utilized</p>
                </div>

                {/* Campaign Duration */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600">Start Date</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {new Date(campaign.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">End Date</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {new Date(campaign.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Edit Campaign
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
