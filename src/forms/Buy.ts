type BuyFormData = {
  date: Date,
  method: string,
  coin: string
  quantity: number,
  fees: number 
}


const BUY_HANDLER_CONFIG: FormHandlerConfiguration<BuyFormData> = {
  sheetName: "Compra",
  sheetId: "X",
  eventSummaryTemplate: "Compra de %COIN%",
  mapping: { 
    date: 1,
    method: 2,
    coin: 3,
    quantity: 4,
    fees: 5
  }
}



class BuyHandler extends BaseFormHandler<BuyFormData> {

  constructor() {
    super(BUY_HANDLER_CONFIG.sheetId, BUY_HANDLER_CONFIG.sheetName, BUY_HANDLER_CONFIG.mapping)
  }

  handleData(currentSnapshot: Snapshot, data: BuyFormData): Snapshot {
    // TODO: CONTINUE HERE
    const newSnapshot: Snapshot = {
      createdAt: new Date(),
      lastEvent: {
        type: EVENT_BUY,
        date: data.date,
        link: getLinkToLastRow()
      }
      
    }

    return newSnapshot
  }
}

FORM_HANDLERS[BUY_HANDLER_CONFIG.sheetName] = new BuyHandler()