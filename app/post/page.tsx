import { redirect } from "next/navigation";
import PostClient from "./post";
import { auth } from "@/auth";

export default async function Post () {
    const session = await auth ()
    if(!session){
        redirect("/signin")
    }
    return (
        <main>
            <PostClient session={session}/>
        </main>
    )
}