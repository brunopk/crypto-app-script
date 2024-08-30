type BuyFormData = {
  date: Date,
  method: string,
  coin: string
  quantity: number,
  fees: number 
}


const BuyHandlerConfig: FormHandlerConfiguration<Data> = {
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
    super(Buy.mapping)
  }

  processData(data: BuyFormData): void {
    this.snapshot.createdAt = new Date()
    this.snapshot.lastEvent = {
      type: "TODO",
      eventDate: data.date,
      summary: Buy.EVENT_SUMMARY_TEMPLATE.replace("%COIN%", data.coin),
      url: getLinkToLastRow()
    }
  }
}

FORM_HANDLERS[BuyHandlerConfig.sheetName] = new BuyHandler()