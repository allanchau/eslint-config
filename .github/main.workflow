workflow "Publish to NPM" {
  on = "push"
  resolves = ["Publish"]
}

action "Tagged commit" {
  args = "tag v*"
  uses = "actions/bin/filter@3c98a2679187369a2116d4f311568596d3725740"
}

action "Publish" {
  args = "publish --access public"
  needs = ["Tagged commit"]
  secrets = ["NPM_AUTH_TOKEN"]
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
}
