import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { mockApplications, type Application } from '../data/mockData';
import { Mail, Phone, Calendar, FileCheck, Clock, CheckCircle2 } from 'lucide-react';

export function Applications() {
  const [selectedStage, setSelectedStage] = useState<string>('all');

  const stages: Application['status'][] = [
    'Application Started',
    'Documents Pending',
    'Documents Verified',
    'Under Review',
    'Admission Offered',
    'Enrolled'
  ];

  const getStatusColor = (status: Application['status']) => {
    const colors: Record<Application['status'], string> = {
      'Application Started': 'bg-blue-100 text-blue-700',
      'Documents Pending': 'bg-yellow-100 text-yellow-700',
      'Documents Verified': 'bg-cyan-100 text-cyan-700',
      'Under Review': 'bg-purple-100 text-purple-700',
      'Admission Offered': 'bg-green-100 text-green-700',
      'Enrolled': 'bg-emerald-100 text-emerald-700'
    };
    return colors[status];
  };

  const getStatusIcon = (status: Application['status']) => {
    const icons: Record<Application['status'], React.ReactNode> = {
      'Application Started': <Clock className="w-4 h-4" />,
      'Documents Pending': <FileCheck className="w-4 h-4" />,
      'Documents Verified': <CheckCircle2 className="w-4 h-4" />,
      'Under Review': <Clock className="w-4 h-4" />,
      'Admission Offered': <CheckCircle2 className="w-4 h-4" />,
      'Enrolled': <CheckCircle2 className="w-4 h-4" />
    };
    return icons[status];
  };

  const filteredApplications = selectedStage === 'all' 
    ? mockApplications 
    : mockApplications.filter(app => app.status === selectedStage);

  const applicationsByStage = stages.map(stage => ({
    stage,
    count: mockApplications.filter(app => app.status === stage).length
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Applications</h1>
          <p className="text-gray-500 mt-1">Track and manage student applications</p>
        </div>
      </div>

      {/* Pipeline Overview */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Pipeline</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {applicationsByStage.map(({ stage, count }) => (
            <button
              key={stage}
              onClick={() => setSelectedStage(stage)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedStage === stage
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`${getStatusColor(stage)} w-10 h-10 rounded-lg flex items-center justify-center mb-2`}>
                {getStatusIcon(stage)}
              </div>
              <p className="text-2xl font-bold text-gray-900">{count}</p>
              <p className="text-xs text-gray-600 mt-1">{stage}</p>
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            variant={selectedStage === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedStage('all')}
          >
            View All
          </Button>
        </div>
      </Card>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredApplications.map((application) => (
          <Card key={application.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{application.studentName}</h3>
                  <p className="text-sm text-gray-500 mt-1">Application ID: {application.id}</p>
                </div>
                <Badge className={getStatusColor(application.status)}>
                  {application.status}
                </Badge>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{application.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileCheck className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">Program: {application.program}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">
                    Submitted: {new Date(application.submittedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Completion</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {application.completionPercentage}%
                  </span>
                </div>
                <Progress value={application.completionPercentage} className="h-2" />
              </div>

              {/* Counselor */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">Assigned Counselor</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{application.counselor}</p>
              </div>

              {/* Timeline */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-medium text-gray-700 mb-3">Application Timeline</p>
                <div className="space-y-2">
                  {stages.slice(0, stages.indexOf(application.status) + 1).map((stage, idx) => (
                    <div key={stage} className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-1.5 ${
                        stage === application.status ? 'bg-blue-600' : 'bg-green-600'
                      }`}></div>
                      <div className="flex-1">
                        <p className={`text-xs ${
                          stage === application.status ? 'text-blue-600 font-medium' : 'text-gray-600'
                        }`}>
                          {stage}
                        </p>
                      </div>
                      {stage === application.status && (
                        <span className="text-xs text-blue-600">Current</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Update Status
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
