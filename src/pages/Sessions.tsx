
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, BookOpen, TrendingUp } from "lucide-react";

const sessions = [
  {
    id: 1,
    date: "2024-01-15",
    duration: "25 min",
    activity: "Hiragana Practice",
    wordsStudied: 12,
    accuracy: 85,
    type: "practice"
  },
  {
    id: 2,
    date: "2024-01-14",
    duration: "18 min",
    activity: "JLPT N5 Vocabulary",
    wordsStudied: 8,
    accuracy: 92,
    type: "review"
  },
  {
    id: 3,
    date: "2024-01-14",
    duration: "32 min",
    activity: "Food & Dining",
    wordsStudied: 15,
    accuracy: 78,
    type: "learning"
  },
  {
    id: 4,
    date: "2024-01-13",
    duration: "20 min",
    activity: "Katakana Practice",
    wordsStudied: 10,
    accuracy: 88,
    type: "practice"
  },
];

const Sessions = () => {
  const totalStudyTime = sessions.reduce((acc, session) => {
    return acc + parseInt(session.duration);
  }, 0);

  const averageAccuracy = Math.round(
    sessions.reduce((acc, session) => acc + session.accuracy, 0) / sessions.length
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Study Sessions</h1>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sessions.length}</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudyTime} min</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Accuracy</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageAccuracy}%</div>
            <p className="text-xs text-muted-foreground">Across all sessions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Words Studied</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sessions.reduce((acc, session) => acc + session.wordsStudied, 0)}
            </div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Sessions List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sessions</CardTitle>
          <CardDescription>Your study activity history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <div className="font-medium">{session.activity}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(session.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Badge variant={
                    session.type === 'practice' ? 'default' :
                    session.type === 'review' ? 'secondary' : 'outline'
                  }>
                    {session.type}
                  </Badge>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{session.duration}</span>
                  </div>
                  <div>{session.wordsStudied} words</div>
                  <div className={`font-medium ${
                    session.accuracy >= 90 ? 'text-green-600' :
                    session.accuracy >= 75 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {session.accuracy}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sessions;
