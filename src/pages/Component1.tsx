import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Component1 = () => {
    const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="p-10 flex justify-center">
      <Button onClick={() => setDark(!dark)}>Toggle Theme</Button>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="example@gmail.com" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>

          <Button className="w-full">Login</Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">Forget password?</Button>
            </DialogTrigger>

            <DialogContent className="space-y-4">
              <DialogHeader>
                <DialogTitle>Reset password</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>

              <Button className="w-full">Send reset link</Button>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}

export default Component1