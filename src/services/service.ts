import * as shelljs from "shelljs";
import dotenv from 'dotenv'
dotenv.config()

const _pathToRepo = process.env.LOCAL_REPO || "."
const defaultBranch = process.env.BRANCH || "master"

export function fecthNPull(payload: any) {

  if (payload.action as string !== "closed") {
    return { status: "Não é merge"}
  }

  shelljs.cd(_pathToRepo)
  console.log(shelljs.exec(`git status`))
  shelljs.exec(`git fetch`)
  shelljs.exec(`git switch ${defaultBranch}`)
  shelljs.exec(`git pull`)
}