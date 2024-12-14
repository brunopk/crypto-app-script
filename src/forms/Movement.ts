// TODO: define a type for Movement (similar to BuyFormData in src/Buy.ts)
// TODO: define a const for configurations (similar to BuyHandlerConfig in src/Buy.ts)

declare namespace Movement {
  type Data = {
    a: string
  }
  let mapping: Form.ColumnMapping<Data>
  let SHEET_NAME: string
}

namespace Movement {
  SHEET_NAME = "Movimiento"
  mapping = {a: 3}
}

type Data = {}


class MovementHandler extends BaseFormHandler<Movement.Data> {

  constructor() {
    super(Movement.mapping)
  }

  // TODO: define processData as in src/Buy.ts
  
  processData(data: Movement.Data): void {
    throw new Error("Method not implemented.")
  }
}

FORM_HANDLERS[Movement.SHEET_NAME] = new MovementHandler()