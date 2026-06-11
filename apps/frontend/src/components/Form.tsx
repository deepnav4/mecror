import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

export function Form() {
    const [githubUrl, setGithubUrl] = useState("");
    const [linkedinUrl, setLinkedinUrl] = useState("");

    function onSubmit(){
        if(!githubUrl || !linkedinUrl){
            alert("Please fill in all fields");
            return;
        } 
    }
    return(
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 ">
      <div>AI Interview KickStart</div>
      <Input placeholder="Github Url" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} className="w-[200px] max-w-xs"/>
      <Input placeholder="LinkedIn Profile Url" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} className="w-full max-w-xs"/>
      <Button onClick={onSubmit} >Submit</Button>
    </div>
  )
}

