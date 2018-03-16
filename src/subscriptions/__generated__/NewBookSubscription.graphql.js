/**
 * @flow
 * @relayHash 52eb6ac08219f4ea52698823bd2c7821
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewBookSubscriptionVariables = {| |};
export type NewBookSubscriptionResponse = {|
  +newBook: ?{|
    +id: ?string,
    +title: ?string,
  |},
|};
*/


/*
subscription NewBookSubscription {
  newBook {
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
    "name": "newBook",
    "storageKey": null,
    "args": null,
    "concreteType": "Book",
    "plural": false,
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
  "operationKind": "subscription",
  "name": "NewBookSubscription",
  "id": null,
  "text": "subscription NewBookSubscription {\n  newBook {\n    id\n    title\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewBookSubscription",
    "type": "RootSubscriptionType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "NewBookSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'a8feada7346d1c31cff7bedadcbd46bd';
module.exports = node;
