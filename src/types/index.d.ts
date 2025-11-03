// Type definitions for ICARUS Terminal
declare global {
  interface Window {
    icarusTerminal_version: () => string
    icarusTerminal_checkForUpdate: () => string
    icarusTerminal_requestUpdate: () => void
    icarusTerminal_closeWindow: () => void
    icarusTerminal_requestRestart: () => void
    icarusTerminal_showExternalTerminal: () => void
    icarusTerminal_downloadLogsAsJson: () => void
    icarusTerminal_copyClipboard: (text: string) => void
    icarusTerminal_alwaysOnTop: (enabled: boolean) => void
    icarusTerminal_borderless: (enabled: boolean) => void
  }

  interface Global {
    BROADCAST_EVENT: (name: string, message?: any) => void
  }

  const global: Global
}

export interface EliteLogEvent {
  timestamp: string
  event: string
  [key: string]: any
}

export interface Commander {
  name: string
  credits: number
  debt: number
  currentShipId?: number
  rank?: {
    combat: number
    trade: number
    exploration: number
    federation: number
    empire: number
    cqc: number
  }
}

export interface Ship {
  id: number
  name: string
  shipName?: string
  shipIdent?: string
  hullValue: number
  modulesValue: number
  hullHealth: number
  unladenMass: number
  cargoCapacity: number
  maxJumpRange: number
  fuelCapacity: {
    main: number
    reserve: number
  }
  rebuy: number
}

export interface SystemLocation {
  starSystem: string
  starClass?: string
  systemAddress?: number
  starPos?: [number, number, number]
  systemAllegiance?: string
  systemEconomy?: string
  systemSecond_economy?: string
  systemGovernment?: string
  systemSecurity?: string
  population?: number
  body?: string
  bodyId?: number
  bodyType?: string
  docked?: boolean
  stationName?: string
  stationType?: string
  marketId?: number
  stationFaction?: {
    name: string
    factionState?: string
  }
  stationGovernment?: string
  stationServices?: string[]
  stationEconomy?: string
  stationEconomies?: Array<{
    name: string
    proportion: number
  }>
  distFromStarLS?: number
}

export interface Logger {
  error(message: string, ...args: any[]): void
  warn(message: string, ...args: any[]): void
  info(message: string, ...args: any[]): void
  debug(message: string, ...args: any[]): void
  setLevel(level: 'ERROR' | 'WARN' | 'INFO' | 'DEBUG'): void
}

export {}