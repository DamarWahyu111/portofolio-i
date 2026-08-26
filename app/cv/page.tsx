import { redirect } from "next/navigation"
import { CV_FILE_PATH } from "@/lib/cv"

export default function CVPage() {
  redirect(CV_FILE_PATH)
}
