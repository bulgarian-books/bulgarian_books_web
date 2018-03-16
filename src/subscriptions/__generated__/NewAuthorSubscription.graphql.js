/**
 * @flow
 * @relayHash f00cb64ad19ba5cdedc58d85b9b32615
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewAuthorSubscriptionVariables = {| |};
export type NewAuthorSubscriptionResponse = {|
  +newAuthor: ?{|
    +id: ?string,
    +name: ?string,
  |},
|};
*/


/*
subscription NewAuthorSubscription {
  newAuthor {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "newAuthor",
    "storageKey": null,
    "args": null,
    "concreteType": "Author",
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
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "NewAuthorSubscription",
  "id": null,
  "text": "subscription NewAuthorSubscription {\n  newAuthor {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewAuthorSubscription",
    "type": "RootSubscriptionType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "NewAuthorSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '3749ee06130f9b9551f8ff0e5c9296e9';
module.exports = node;
