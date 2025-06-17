
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, RotateCcw } from "lucide-react";

const StudyActivityDetail = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/study-activities">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Activities
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Hiragana Practice</CardTitle>
                <Badge>Beginner</Badge>
              </div>
              <CardDescription>
                Practice reading and writing hiragana characters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>12/46 characters</span>
                </div>
                <Progress value={26} />
              </div>

              <div className="flex space-x-4">
                <Button size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Continue Practice
                </Button>
                <Button variant="outline" size="lg">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Restart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Characters</span>
                <span className="font-medium">46</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Accuracy</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Best Streak</span>
                <span className="font-medium">8</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyActivityDetail;
