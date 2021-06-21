import * as P from "parsimmon";

import * as ast from "./ast";

export const RPGist = P.createLanguage<ast.RPGist>({
  NumberLiteral: () => P.regexp(/[0-9]+/).map(Number),
  BasicValue: (r) => P.alt(r.NumberLiteral),
  Expression: (r) => P.alt(r.BasicValue),
});
