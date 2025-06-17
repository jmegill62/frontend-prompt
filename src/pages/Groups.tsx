
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus, FolderOpen, FileText } from "lucide-react";

const groups = [
  {
    id: 1,
    name: "JLPT N5 Vocabulary",
    description: "Essential vocabulary for JLPT N5 level",
    wordCount: 120,
    progress: 85,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    name: "Food & Dining",
    description: "Words related to food, drinks, and restaurants",
    wordCount: 45,
    progress: 60,
    color: "bg-green-100 text-green-800"
  },
  {
    id: 3,
    name: "Family & Relationships", 
    description: "Family members and relationship terms",
    wordCount: 32,
    progress: 90,
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 4,
    name: "Daily Activities",
    description: "Common verbs and activities",
    wordCount: 67,
    progress: 45,
    color: "bg-yellow-100 text-yellow-800"
  },
];

const Groups = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Word Groups</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Group
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Link key={group.id} to={`/groups/${group.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <FolderOpen className="h-5 w-5 text-gray-400" />
                </div>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{group.wordCount} words</span>
                  </div>
                  <Badge className={group.color}>
                    {group.progress}% complete
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${group.progress}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Groups;
