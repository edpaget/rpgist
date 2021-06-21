import * as P from "parsimmon";

import * as ast from ".ast";

export const RPGist = P.createLanguage<ast.RPGist>({
  number: P.regexp(/[0-9]+/).map(Number),
})
