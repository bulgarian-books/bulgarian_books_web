/**
 * @flow
 * @relayHash ee3c90cae59732385425cc0d186334b4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BooksQueryVariables = {| |};
export type BooksQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +id: ?string,
    +title: ?string,
  |}>,
|};
*/


/*
query BooksQuery {
  books {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "books",
    "storageKey": null,
    "args": null,
    "concreteType": "Book",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BooksQuery",
  "id": null,
  "text": "query BooksQuery {\n  books {\n    id\n    title\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BooksQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "BooksQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '163b7f396d773e4c813a5ca58ce1a72c';
module.exports = node;
