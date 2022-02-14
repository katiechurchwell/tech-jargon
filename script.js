var action = [
  "increased",
  "refined",
  "modularized",
  "serialized",
  "defined",
  "tuned",
  "grew",
  "minimized",
  "executed",
  "limited",
  "instanced",
  "triaged",
  "tracked",
  "refactored",
  "translated",
  "enhanced",
  "mentored",
  "wrote",
  "used",
  "built",
  "led",
  "delivered",
  "spearheaded",
  "architected",
  "reduced",
  "participated",
  "volunteered",
  "debugged",
  "redeveloped",
  "upgraded",
  "authored",
  "implemented",
];

var adjective = [
  "customizable",
  "average",
  "new",
  "distributable",
  "mock",
  "as part of the",
  "analytics",
  "development",
  "daily",
  "weekly",
  "internal",
  "external",
  "existing",
  "prototype",
  "automated",
  "customer facing",
  "open-source",
  "serverless",
  "browser-based",
  "hourly",
  "running",
  "live",
  "remote",
  "real time",
  "custom",
  "critical",
  "rapid",
];

var noun = [
  "modularity",
  "back-end",
  "front-end",
  "bugs",
  "functional tests",
  "asset migration",
  "case time",
  "data APIs",
  "workflow",
  "authentication",
  "server",
  "standup",
  "web application",
  "web development team",
  "engineering team",
  "components",
  "data entry",
  "management",
  "framework",
  "tests",
  "infrastructure",
  "tech talk",
  "clone",
  "package",
  "partial",
  "scripts",
  "questions",
  "requests",
  "migration",
  "library",
  "features",
  "A/B tests",
];

var expression = [
  "resulting in",
  "maximizing",
  "to support",
  "which directly informed",
  "leveraging",
  "limiting",
  "drastically improving",
  "generating",
  "informing",
  "ensuring on-time",
  "delivering",
  "providing",
];

var result = [
  "stakeholders",
  "end users",
  "a use-case",
  "profit",
  "a dynamic product",
  "pain points",
  "virtual users",
  "data points",
  "test results",
  "case study",
  "deployment",
  "pipeline",
  "lifecycle",
  "growth",
  "funding",
  "deliverables",
  "native integration",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sentence() {
  var randomAction = action[getRandomInt(action.length)];
  var capitalizedAction =
    randomAction.charAt(0).toUpperCase() + randomAction.slice(1);

  var content =
    capitalizedAction +
    " " +
    adjective[getRandomInt(adjective.length)] +
    " " +
    noun[getRandomInt(noun.length)] +
    " " +
    expression[getRandomInt(expression.length)] +
    " " +
    result[getRandomInt(result.length)] +
    ".";

  document.getElementById("sentence").innerHTML = content;
}
sentence();
