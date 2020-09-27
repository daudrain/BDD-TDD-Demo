$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("any-member_bookavtc.feature");
formatter.feature({
  "line": 1,
  "name": "Tout client - Réserver un VTC",
  "description": "\nUn client veut réserver un VTC de sorte à se déplacer d\u0027un point A à un point B.",
  "id": "tout-client---réserver-un-vtc",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "solde suffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "je suis authentifié en tant que \"\u003cprénom_client\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "le solde de mon compte est de \"\u003csolde_avant\u003e\" euros TTC avec \"\u003cavoir_avant\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "le solde de mon compte est de \"\u003csolde_après\u003e\" euros TTC avec \"\u003cavoir_après\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-suffisant;",
  "rows": [
    {
      "cells": [
        "prénom_client",
        "solde_avant",
        "solde_après",
        "avoir_avant",
        "avoir_après",
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ],
      "line": 23,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;1"
    },
    {
      "cells": [
        "Jean-Michel",
        "35",
        "5",
        "10",
        "10",
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ],
      "line": 24,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;2"
    },
    {
      "cells": [
        "Patrick",
        "46",
        "16",
        "10",
        "10",
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ],
      "line": 25,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;3"
    },
    {
      "cells": [
        "Michael",
        "30",
        "0",
        "10",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 26,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;4"
    },
    {
      "cells": [
        "Michael",
        "50",
        "10",
        "10",
        "0",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ],
      "line": 27,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;5"
    },
    {
      "cells": [
        "Michael",
        "50",
        "50",
        "51",
        "1",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ],
      "line": 28,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;6"
    },
    {
      "cells": [
        "Michael",
        "50",
        "50",
        "10",
        "10",
        "Vincent",
        "111 avenue Victor Hugo, 93300 Aubervilliers",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 29,
      "id": "tout-client---réserver-un-vtc;solde-suffisant;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "solde insuffisant",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "je suis authentifié en tant que \"\u003cprénom_client\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "le solde de mon compte est de \"\u003csolde_avant\u003e\" euros TTC avec \"\u003cavoir_avant\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "le solde de mon compte est de \"\u003csolde_après\u003e\" euros TTC avec \"\u003cavoir_après\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "tout-client---réserver-un-vtc;solde-insuffisant;",
  "rows": [
    {
      "cells": [
        "prénom_client",
        "solde_avant",
        "solde_après",
        "avoir_avant",
        "avoir_après",
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ],
      "line": 39,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;1"
    },
    {
      "cells": [
        "Jean-Michel",
        "0",
        "0",
        "10",
        "10",
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ],
      "line": 40,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;2"
    },
    {
      "cells": [
        "Patrick",
        "26",
        "26",
        "10",
        "10",
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ],
      "line": 41,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;3"
    },
    {
      "cells": [
        "Michael",
        "29",
        "29",
        "10",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 42,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;4"
    },
    {
      "cells": [
        "Michael",
        "20",
        "20",
        "15",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 43,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;5"
    },
    {
      "cells": [
        "Michael",
        "2",
        "2",
        "10",
        "10",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ],
      "line": 44,
      "id": "tout-client---réserver-un-vtc;solde-insuffisant;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Je ne suis pas authentifié",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;",
  "rows": [
    {
      "cells": [
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ],
      "line": 53,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;1"
    },
    {
      "cells": [
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ],
      "line": 54,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;2"
    },
    {
      "cells": [
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ],
      "line": 55,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;3"
    },
    {
      "cells": [
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ],
      "line": 56,
      "id": "tout-client---réserver-un-vtc;je-ne-suis-pas-authentifié;;4"
    }
  ],
  "keyword": "Examples"
});
});