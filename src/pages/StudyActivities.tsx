
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Clock, FileText } from "lucide-react";

const studyActivities = [
  {
    id: 1,
    title: "Hiragana Practice",
    description: "Practice reading and writing hiragana characters",
    difficulty: "Beginner",
    estimatedTime: "15 min",
    wordsCount: 46,
    type: "practice"
  },
  {
    id: 2,
    title: "Basic Vocabulary",
    description: "Learn essential Japanese words for daily conversation",
    difficulty: "Beginner",
    estimatedTime: "20 min",
    wordsCount: 50,
    type: "vocabulary"
  },
  {
    id: 3,
    title: "Katakana Mastery",
    description: "Master katakana characters and their usage",
    difficulty: "Beginner",
    estimatedTime: "18 min",
    wordsCount: 46,
    type: "practice"
  },
  {
    id: 4,
    title: "Food & Drinks",
    description: "Vocabulary related to food, drinks, and dining",
    difficulty: "Intermediate",
    estimatedTime: "25 min",
    wordsCount: 75,
    type: "vocabulary"
  },
];

const StudyActivities = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Study Activities</h1>
        <Button>Create New Activity</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyActivities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{activity.title}</CardTitle>
                <Badge variant={activity.difficulty === "Beginner" ? "secondary" : "default"}>
                  {activity.difficulty}
                </Badge>
              </div>
              <CardDescription>{activity.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{activity.estimatedTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>{activity.wordsCount} words</span>
                </div>
              </div>
              <Link to={`/study-activities/${activity.id}`}>
                <Button className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Activity
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudyActivities;
