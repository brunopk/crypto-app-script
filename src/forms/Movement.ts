// TODO: define a type for Movement (similar to BuyFormData in src/Buy.ts)
// TODO: define a const for configurations (similar to BuyHandlerConfig in src/Buy.ts)

type MovementData = {}

const MOVEMENT_HANDLER_CONFIG: FormHandlerConfiguration<MovementData> = {
  sheetName: "",
  sheetId: "X",
  eventSummaryTemplate: "",
  mapping: { 
    date: 1,
    method: 2,
    coin: 3,
    quantity: 4,
    fees: 5
  }
}

type Data = {}


class MovementHandler extends BaseFormHandler<MovementData> {

  constructor() {
    super(MOVEMENT_HANDLER_CONFIG.sheetId, MOVEMENT_HANDLER_CONFIG.sheetName, MOVEMENT_HANDLER_CONFIG.mapping)
  }

  // TODO: define processData as in src/Buy.ts
  
  handleData(currentSnapshot: Snapshot, data: BuyFormData): Snapshot {
    throw new Error("Method not implemented.")
  }
}

FORM_HANDLERS[MOVEMENT_HANDLER_CONFIG.sheetName] = new MovementHandler()