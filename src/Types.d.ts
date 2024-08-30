declare namespace ExternalAPIs {
  namespace CoinAPI {
    namespace ExchangeRate {
      type GetSpecificRateResponse = {
        time: string,
        asset_id_base: string,
        asset_id_quote: string,
        rate: number
      }
    }
  }
}

declare let CHARS: string

declare type FormSheet = RowDefinition

type FormHandlerConfiguration<T> = {
  mapping: ColumnMapping<T>
  sheetName: string
  sheetId: string
  eventSummaryTemplate: string
}

type RowDefinition = {
  [name: string]: number | string | Date
}

type ColumnMapping<T> = {
  [Property in keyof T]: number
}

// TODO: it should contain where is the coin (example: metamask, binance, etc, data.coins['ADA'] could be an array)

/**
 * Event types are defined as constant (see src/Constants.ts)
 */
type Snapshot = {
  createdAt: Date
  lastEvent: {
    date: Date,
    type: string,s
    summary: string,
    link?: string
  },
  data: {
    totalInvestment: number
    prices: {
      [crypto: string]: {
        value: number,
        obtainedFrom: string
      }
    }
    coins: {
      [crypto: string]: {
        total: number,
        totalInvested: number
      }
    }
  }
}

interface FormHandler {
  run: () => void
}