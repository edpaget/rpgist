export type BasicValue = number;
export type Expression = BasicValue;

export interface RPGist {
  expression: Expression;
  basicValue: BasicValue;
  numberLiteral: number;
}
