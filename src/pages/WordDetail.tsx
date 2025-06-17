
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Volume2 } from "lucide-react";

const WordDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const word = {
    id: 1,
    kanji: "学校",
    hiragana: "がっこう",
    romaji: "gakkou",
    meaning: "school",
    level: "N5",
    examples: [
      { japanese: "私は学校に行きます。", reading: "わたしは がっこうに いきます。", meaning: "I go to school." },
      { japanese: "学校は大きいです。", reading: "がっこうは おおきいです。", meaning: "The school is big." },
    ],
    notes: "Compound word made of 学 (learning) + 校 (school building)"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/words">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Words
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl">{word.kanji}</CardTitle>
                <Badge>{word.level}</Badge>
              </div>
              <CardDescription className="space-y-2">
                <div className="text-lg">{word.hiragana}</div>
                <div className="text-sm text-gray-500">{word.romaji}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{word.meaning}</h3>
                </div>
                <Button variant="outline" size="sm">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Play Audio
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Example Sentences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {word.examples.map((example, index) => (
                <div key={index} className="space-y-2 p-4 bg-gray-50 rounded-lg">
                  <div className="font-medium">{example.japanese}</div>
                  <div className="text-sm text-gray-600">{example.reading}</div>
                  <div className="text-sm text-blue-600">{example.meaning}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Study Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Add to Study List
              </Button>
              <Button variant="outline" className="w-full">
                Mark as Learned
              </Button>
              <Button variant="outline" className="w-full">
                Add to Group
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{word.notes}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WordDetail;
