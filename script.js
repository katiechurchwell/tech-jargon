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

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var random = Math.floor(Math.random() * 10);

  console.log(action[random]);
  var content =
    action[random] + " " +
    adjective[random] + " " +
    noun[random] + " " +
    expression[random] + " " +
    result[random];

  document.getElementById("sentence").innerHTML = content;
}
sentence();
