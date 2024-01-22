export type sourceType = "GlossMod" | "NexusMods" | "Thunderstore" | "ModIo"

export interface ITag {
    name: string
    color: string
}

export interface IModInfo {
    id: number
    from?: sourceType
    webId?: number
    nexus_id?: string
    modIo_id?: number
    modName: string
    gameID?: number
    md5: string
    modVersion: string
    tags?: ITag[]
    isUpdate?: boolean
    modType?: number
    isInstalled: boolean
    weight: number
    modFiles: string[]
    modDesc?: string
    modAuthor?: string
    modWebsite?: string
    advanced?: {
        enabled: boolean
        data: any
    }
}

export interface IGameExe {
    name: string
    rootPath: string
}
export interface IStartExe {
    name: string
    exePath: string
}

export interface IGameInfo {
    GlossGameId: number
    steamAppID: number
    installdir?: string
    gameName: string
    gameExe: string | IGameExe[]
    startExe?: string | IStartExe[]
    gamePath?: string
    gameVersion?: string
    gameCoverImg?: string
    NexusMods?: {
        game_id: number
        game_domain_name: string
    },
    Thunderstore?: {
        community_identifier: string
    },
    mod_io?: {
        game_id: number
    }
}

export interface IState {
    file: string,
    state: boolean
}

interface IAdvancedItem {
    type: "input" | "selects" | "switch"
    label: string
    key: string
    selectItem?: { name: string, value: string }[]
    defaultValue?: string | boolean
}

export interface IType {
    id: number
    name: string
    installPath?: string
    advanced?: {
        name: string
        icon: string
        item: IAdvancedItem[]
    }
    install: (mod: IModInfo) => Promise<IState[] | boolean>
    uninstall: (mod: IModInfo) => Promise<IState[] | boolean>
    checkPlugin?: (plugin: IModInfo) => boolean
}

export interface ISupportedGames extends IGameInfo {
    modType: IType[]
    checkModType: (mod: IModInfo) => number
}

export interface ISettings {
    managerGame?: ISupportedGames
    managerGameList: ISupportedGames[]
    modStorageLocation: string
    tourGameList: number[]
    proxy: string
    // UnzipPath: string
    autoInstall: boolean
    leftMenuRail: boolean
    autoLaunch: boolean
    language: string
    theme: 'light' | 'dark' | 'system'
    fold: boolean,
    exploreType: sourceType
    selectGameByFolder: boolean
    showPakeMessage: boolean
}