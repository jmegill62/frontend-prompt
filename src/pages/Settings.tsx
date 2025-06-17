
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Study Preferences</CardTitle>
              <CardDescription>Customize your learning experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="daily-goal">Daily Study Goal (minutes)</Label>
                <Input id="daily-goal" type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="words-per-session">Words per Study Session</Label>
                <Input id="words-per-session" type="number" defaultValue="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Audio Pronunciation</Label>
                  <div className="text-sm text-gray-500">Play audio for word pronunciation</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Romaji</Label>
                  <div className="text-sm text-gray-500">Display romanized text</div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your study reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Daily Study Reminder</Label>
                  <div className="text-sm text-gray-500">Get reminded to study daily</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Review Notifications</Label>
                  <div className="text-sm text-gray-500">Reminders for word reviews</div>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reminder-time">Daily Reminder Time</Label>
                <Input id="reminder-time" type="time" defaultValue="19:00" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="japanese_learner" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="user@example.com" />
              </div>
              <Button>Update Profile</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Export or reset your learning data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Export Study Data
              </Button>
              <Button variant="outline" className="w-full">
                Import Vocabulary List
              </Button>
              <Button variant="destructive" className="w-full">
                Reset All Progress
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Version</span>
                <span>1.0.0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Last Updated</span>
                <span>January 2024</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
