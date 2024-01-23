
/**
 * @description AI Shoujo 支持
 */

import { ISupportedGames } from 'gmm-api'
import { join, basename } from 'path'
import { Manager } from './Manager'



export const supportedGames: ISupportedGames = {
    GlossGameId: 209,
    steamAppID: 1250650,
    installdir: "AI-Syoujyo",
    gameName: "AI Shoujo",
    gameExe: "AI-Syoujyo.exe",
    startExe: "AI-Syoujyo.exe",
    gameCoverImg: "https://mod.3dmgame.com/static/upload/game/209.png",
    modType: [
        {
            id: 1,
            name: "mods",
            installPath: join("mods"),
            async install(mod) {
                return Manager.installByFolderParent(mod, this.installPath ?? "", "data", true)
            },
            async uninstall(mod) {
                return Manager.installByFolderParent(mod, this.installPath ?? "", "data", false)
            }
        },
        {
            id: 99,
            name: "未知",
            installPath: "",
            async install(mod) {
                return false
            },
            async uninstall(mod) {
                return true
            }
        }
    ],
    checkModType(mod) {
        // let loader = false
        let mods = false

        mod.modFiles.forEach(item => {
            // if (basename(item) == 'python35.dll') loader = true
            // 判断路径是否包含 data
            if (item.includes('data')) mods = true
        })

        // if (loader) return 1
        if (mods) return 1

        return 99
    }
}