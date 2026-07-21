import { auth } from "../../auth"
import {redirect} from "next/navigation"
import View from "./view"

export default async function ViewPage () {
    const session = await auth()
    if (!session) {
        redirect("/signin")
    }
    return (
        <main><View/></main>
    )
}