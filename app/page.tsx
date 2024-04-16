import LoginButton from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="text-center space-y-6 ">
        <h1 className={cn("text-6xl font-semibold  drop-shadow-md text-slate-50" , font.className)}>Next-Auth</h1>
        <p className="text-lg text-slate-50">A simple authentication service</p>
        <LoginButton >
          <Button variant={"secondary"} size={"lg"}>Sign in</Button>
        </LoginButton>
      </div>
    </main>
  );
}
