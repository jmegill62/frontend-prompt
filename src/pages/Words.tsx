
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Plus, FileText } from "lucide-react";

const words = [
  { id: 1, kanji: "水", hiragana: "みず", romaji: "mizu", meaning: "water", level: "N5" },
  { id: 2, kanji: "火", hiragana: "ひ", romaji: "hi", meaning: "fire", level: "N5" },
  { id: 3, kanji: "山", hiragana: "やま", romaji: "yama", meaning: "mountain", level: "N5" },
  { id: 4, kanji: "川", hiragana: "かわ", romaji: "kawa", meaning: "river", level: "N5" },
  { id: 5, kanji: "学校", hiragana: "がっこう", romaji: "gakkou", meaning: "school", level: "N5" },
  { id: 6, kanji: "先生", hiragana: "せんせい", romaji: "sensei", meaning: "teacher", level: "N5" },
];

const Words = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = words.filter(word =>
    word.kanji.includes(searchTerm) ||
    word.hiragana.includes(searchTerm) ||
    word.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Words</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Word
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="text-sm text-gray-500">
          {filteredWords.length} of {words.length} words
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.map((word) => (
          <Link key={word.id} to={`/words/${word.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{word.kanji}</CardTitle>
                  <Badge variant="outline">{word.level}</Badge>
                </div>
                <CardDescription className="space-y-1">
                  <div>{word.hiragana}</div>
                  <div className="text-xs text-gray-500">{word.romaji}</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">{word.meaning}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Words;
