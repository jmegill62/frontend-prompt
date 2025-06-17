
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Plus, BookOpen, Trash2 } from "lucide-react";

const GroupDetail = () => {
  const { id } = useParams();

  const group = {
    id: 1,
    name: "JLPT N5 Vocabulary",
    description: "Essential vocabulary for JLPT N5 level",
    wordCount: 120,
    progress: 85,
  };

  const words = [
    { id: 1, kanji: "水", hiragana: "みず", meaning: "water", learned: true },
    { id: 2, kanji: "火", hiragana: "ひ", meaning: "fire", learned: true },
    { id: 3, kanji: "山", hiragana: "やま", meaning: "mountain", learned: false },
    { id: 4, kanji: "川", hiragana: "かわ", meaning: "river", learned: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/groups">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Groups
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{group.name}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Words
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{Math.round(group.wordCount * group.progress / 100)}/{group.wordCount} words learned</span>
                  </div>
                  <Progress value={group.progress} />
                </div>

                <div className="space-y-3">
                  {words.map((word) => (
                    <div
                      key={word.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-lg font-medium">{word.kanji}</div>
                        <div className="text-sm text-gray-600">{word.hiragana}</div>
                        <div className="text-sm">{word.meaning}</div>
                        {word.learned && <Badge variant="secondary">Learned</Badge>}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link to={`/words/${word.id}`}>
                          <Button variant="ghost" size="sm">
                            <BookOpen className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Group Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Words</span>
                <span className="font-medium">{group.wordCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Learned</span>
                <span className="font-medium">{Math.round(group.wordCount * group.progress / 100)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Remaining</span>
                <span className="font-medium">{group.wordCount - Math.round(group.wordCount * group.progress / 100)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Study This Group
              </Button>
              <Button variant="outline" className="w-full">
                Export Words
              </Button>
              <Button variant="destructive" className="w-full">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Group
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
